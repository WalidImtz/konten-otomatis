<template>
  <LayoutAuthenticated>
    <SectionMain>
      <h1 class="text-2xl font-bold text-white mb-6">Create Bulk Content</h1>
      <div class="space-y-8">
        <div class="grid md:grid-cols-3 gap-6">
          
          <!-- Upload Excel File -->
          <CardBox class="px-6 md:col-span-2">
            <h3 class="text-lg font-semibold text-white mb-1">Upload Data Excel</h3>
            <p class="text-sm text-gray-300 mb-4">
              Upload file Excel yang berisi data untuk membuat konten secara massal.
            </p>

            <div
              class="border-2 border-dashed border-[#2F3756] rounded-lg p-24 bg-[#5E6FAC] text-center hover:border-[#F98613] transition-all duration-200"
              @dragover.prevent
              @drop.prevent="handleDrop"
            >
              <input
                type="file"
                ref="fileInput"
                accept=".xlsx,.xls"
                class="hidden"
                @change="handleFileUpload"
              />
              <div v-if="fileName" class="mb-4">
                <div class="text-white font-medium">📂 {{ fileName }}</div>
              </div>
              <p class="text-gray-200 mb-2">Tarik file Excel ke sini, atau</p>
              <button
                type="button"
                @click="$refs.fileInput.click()"
                class="px-5 py-2 bg-[#F98613] hover:bg-[#ff9f3d] text-white rounded-lg font-semibold shadow transition-all duration-200"
              >
                Browse Files
              </button>
              <p v-if="fileName" class="text-sm text-gray-300 mt-3">File berhasil dipilih.</p>
            </div>
          </CardBox>

          <!-- Change Background + Download Template -->
          <div class="flex flex-col gap-6">
            
            <!-- Change Background -->
            <CardBox class="px-6">
              <h3 class="text-lg font-semibold text-white mb-1">Change Background</h3>
              <p class="text-sm text-gray-300 mb-4">
                Pilih background dari Asset Library untuk diterapkan pada semua konten.
              </p>
              <div class="aspect-video bg-[#5E6FAC] border border-[#2F3756] rounded-lg flex items-center justify-center text-gray-300">
                <img
                  v-if="previewImage"
                  :src="previewImage"
                  alt="Selected Background"
                  class="object-cover w-full h-full rounded-lg"
                />
                <span v-else>Tidak ada gambar dipilih</span>
              </div>
              <button
                type="button"
                @click="openAssetLibrary"
                class="mt-4 px-5 py-2 bg-[#F98613] hover:bg-[#ff9f3d] text-white rounded-lg font-semibold shadow transition-all duration-200 w-full"
              >
                Pilih dari Asset Library
              </button>
            </CardBox>

            <!-- Download Template Bulk -->
            <CardBox class="px-6 text-center">
              <h3 class="text-lg font-semibold text-white mb-3">Download Template Bulk</h3>
              <p class="text-sm text-gray-300 mb-4">
                Unduh template Excel agar format kolom sesuai sistem.
              </p>
              <button
                type="button"
                @click="downloadTemplate"
                class="px-5 py-2 bg-[#F98613] hover:bg-[#ff9f3d] text-white rounded-lg font-semibold shadow transition-all duration-200 w-full"
              >
                Download Template
              </button>
            </CardBox>

          </div>
        </div>
      </div>

      <!-- Tombol navigasi bawah -->
      <div class="flex justify-end gap-4 mt-6 pb-10">
        <button
          @click="goBack"
          class="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white text-base font-semibold rounded-xl shadow-md transition-all duration-200"
        >
          Back
        </button>

        <button
          @click="generateBulk"
          class="px-10 py-3 bg-[#F98613] hover:bg-[#ff9f3d] text-white text-base font-semibold rounded-xl shadow-md transition-all duration-200"
        >
          Generate Image
        </button>
      </div>
    </SectionMain>
  </LayoutAuthenticated>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'

const router = useRouter()

const fileInput = ref(null)
const fileName = ref('')
const previewImage = ref('')

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    fileName.value = file.name
  }
}

const handleDrop = (event) => {
  const file = event.dataTransfer.files[0]
  if (file) {
    fileName.value = file.name
  }
}

const openAssetLibrary = () => {
  alert('📁 Simulasi membuka Asset Library (dummy)')
  previewImage.value = 'https://placehold.co/600x400/5E6FAC/FFFFFF?text=Background+Preview'
}

const downloadTemplate = () => {
  alert('⬇️ Simulasi unduh template Excel')
}

const generateBulk = () => {
  alert('🚀 Simulasi proses generate konten massal')
}

const goBack = () => {
  router.push({ name: 'view-content' })
}
</script>
