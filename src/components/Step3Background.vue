<template>
  <div class="space-y-8">
    <!-- Main Grid Area -->
    <div class="grid md:grid-cols-3 gap-6">
      <!-- Upload Background Image (2/3) -->
      <CardBox class="px-6 md:col-span-2">
        <h3 class="text-lg font-semibold text-white mb-1">Upload Background Image</h3>
        <p class="text-sm text-gray-300 mb-4">
          Upload an image to be used as the background for your generated content.
        </p>

        <div
          class="border-2 border-dashed border-[#2F3756] rounded-lg p-6 bg-[#5E6FAC] text-center hover:border-[#F98613] transition-all duration-200"
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

      <!-- File Type Selection (1/3) -->
      <CardBox class="px-6">
        <h3 class="text-lg font-semibold text-white mb-1">File Type</h3>
        <p class="text-sm text-gray-300 mb-4">
          Choose the output file format for your content.
        </p>

        <FormField label="Select file format">
          <FormCheckRadioGroup
            v-model="fileType"
            name="file-type"
            type="radio"
            :options="{
              png: 'PNG',
              jpg: 'JPG',
              jpeg: 'JPEG',
              pdf: 'PDF'
            }"
            class="text-white"
            is-column
          />
        </FormField>
      </CardBox>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CardBox from '@/components/CardBox.vue'
import FormField from '@/components/FormField.vue'
import FormCheckRadioGroup from '@/components/FormCheckRadioGroup.vue'

const fileInput = ref(null)
const fileName = ref('')
const previewUrl = ref('')
const fileType = ref('')

const emit = defineEmits(['finish', 'back'])

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
</script>
