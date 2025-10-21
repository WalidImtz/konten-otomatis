<template>
  <div class="border-2 border-dashed border-[#2F3756] p-4 rounded-lg text-center bg-[#5E6FAC]/30">
    <input type="file" accept="image/*" class="hidden" ref="fileInput" @change="handleFileChange" />
    <div v-if="preview" class="relative inline-block">
      <img :src="preview" alt="Preview" class="rounded-lg max-h-40 object-cover mx-auto" />
      <button type="button" class="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1"
        @click="removeImage">✕</button>
    </div>
    <div v-else>
      <p class="text-sm text-gray-200">Seret gambar ke sini atau klik untuk upload</p>
      <button type="button" class="mt-2 text-primary font-semibold" @click="fileInput.click()">Pilih Gambar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({ modelValue: File })
const emit = defineEmits(['update:modelValue'])

const fileInput = ref(null)
const preview = ref(null)

const handleFileChange = (e) => {
  const file = e.target.files[0]
  if (file) {
    emit('update:modelValue', file)
    preview.value = URL.createObjectURL(file)
  }
}
const removeImage = () => {
  emit('update:modelValue', null)
  preview.value = null
}
watch(() => props.modelValue, (val) => {
  if (!val) preview.value = null
})
</script>
