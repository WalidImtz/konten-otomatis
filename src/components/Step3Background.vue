<template>
  <div class="space-y-8">
    <!-- Main Grid -->
    <div class="grid md:grid-cols-3 gap-6">
      <!-- Upload Background -->
      <CardBox id="background-upload" class="px-6 md:col-span-2">
        <h3 class="text-lg font-semibold text-white mb-1">Upload Background Image</h3>
        <p class="text-sm text-gray-300 mb-4">
          Upload an image to be used as the background for your generated content.
        </p>

        <div
          class="border-2 border-dashed border-[#2F3756] rounded-lg p-24 bg-[#5E6FAC] text-center hover:border-[#F98613] transition-all duration-200"
          @dragover.prevent
          @drop.prevent="handleDrop"
        >
          <input
            type="file"
            ref="fileInput"
            accept="image/*"
            class="hidden"
            @change="handleFileUpload"
          />
          <div v-if="previewUrl" class="mb-4">
            <img :src="previewUrl" alt="Preview" class="mx-auto rounded-lg max-h-60 object-cover" />
          </div>
          <p class="text-gray-200 mb-2">Drag and drop an image here, or</p>
          <button
            type="button"
            @click="$refs.fileInput.click()"
            class="px-5 py-2 bg-[#F98613] hover:bg-[#ff9f3d] text-white rounded-lg font-semibold shadow transition-all duration-200"
          >
            Browse Files
          </button>
          <p v-if="fileName" class="text-sm text-gray-300 mt-3">Selected: {{ fileName }}</p>
        </div>
      </CardBox>

      <!-- File Type Selection -->
      <CardBox id="file-type-select" class="px-6">
        <h3 class="text-lg font-semibold text-white mb-1">File Type</h3>
        <p class="text-sm text-gray-300 mb-4">
          Choose the output file format for your content.
        </p>

        <div class="space-y-3">
          <label
            v-for="(label, key) in fileOptions"
            :key="key"
            class="flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 cursor-pointer"
            :class="[
              fileType === key
                ? 'border-[#F98613] bg-[#2F3756]/70 text-white shadow-lg shadow-[#F98613]/20'
                : 'border-gray-600 text-gray-300 hover:border-[#F98613]/70 hover:shadow-md hover:shadow-[#F98613]/10'
            ]"
          >
            <input
              type="radio"
              class="hidden"
              :value="key"
              v-model="fileType"
              name="file-type"
            />
            <div
              class="w-5 h-5 flex items-center justify-center border-2 rounded-full transition-all duration-200"
              :class="fileType === key ? 'border-[#F98613] bg-[#F98613]' : 'border-gray-400'"
            >
              <div
                v-if="fileType === key"
                class="w-2 h-2 bg-white rounded-full"
              ></div>
            </div>
            <span class="font-medium">{{ label }}</span>
          </label>
        </div>
      </CardBox>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CardBox from '@/components/CardBox.vue'

const fileInput = ref(null)
const fileName = ref('')
const previewUrl = ref('')
const fileType = ref('png')

const emit = defineEmits(['finish', 'back'])

const fileOptions = {
  png: 'PNG (Recommended)',
  jpg: 'JPG',
  jpeg: 'JPEG',
  pdf: 'PDF',
}

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    fileName.value = file.name
    previewUrl.value = URL.createObjectURL(file)
  }
}

const handleDrop = (event) => {
  const file = event.dataTransfer.files[0]
  if (file) {
    fileName.value = file.name
    previewUrl.value = URL.createObjectURL(file)
  }
}

const prevStep = () => emit('back')
const finish = () => emit('finish')
</script>
