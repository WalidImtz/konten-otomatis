<template>
  <LayoutAuthenticated>
    <SectionMain>
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-3">
          <!-- Tombol Back -->
          <BaseButton
            :icon="mdiArrowLeft"
            label="Back"
            color="primary"
            class="!rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all px-4"
            @click="goBack"
          />

          <!-- Nama Folder -->
          <h1 class="text-2xl font-bold text-white">{{ folderName }}</h1>
        </div>

        <!-- Tombol Add -->
        <BaseButton
          :icon="mdiPlus"
          color="primary"
          label="Add New Image"
          class="!rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all"
        />
      </div>

      <!-- Card utama -->
      <CardBox class="px-6 py-6">
        <!-- Toolbar -->
        <div class="flex flex-wrap items-center justify-between mb-6 gap-4">
          <!-- Info Folder -->
          <div>
            <h2 class="text-lg font-semibold text-white">Folder: {{ folderName }}</h2>
            <p class="text-white/60 text-sm">Total {{ images.length }} images</p>
          </div>

          <!-- Toolbar kanan -->
          <div class="flex flex-wrap items-center justify-end gap-3">
            <!-- Filter -->
            <button
              class="flex items-center gap-2 bg-highlight text-white rounded-lg px-4 py-2 text-sm font-medium hover:opacity-90 transition-all"
            >
              <i class="fas fa-filter text-primary"></i>
              Filter
            </button>

            <!-- Search -->
            <div class="relative w-full sm:w-64">
              <BaseInput
                v-model="searchQuery"
                :icon="mdiMagnify"
                placeholder="Search image..."
                class="w-full !rounded-lg !bg-[#5E6FAC] !border-[#2F3756] text-white placeholder-white/60 focus:ring-2 focus:ring-[#6f80c9]"
              />
            </div>
          </div>
        </div>

        <!-- Grid Gambar -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <GalleryCard
            v-for="(image, index) in filteredImages"
            :key="index"
            :src="image.src"
            :title="image.title"
          />
        </div>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import GalleryCard from '@/components/GalleryCard.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'
import { mdiPlus, mdiMagnify, mdiArrowLeft } from '@mdi/js'

const router = useRouter()
const route = useRoute()

const folderName = ref(route.params.folderName || 'My Folder')
const searchQuery = ref('')

const goBack = () => {
  router.push({ name: 'AssetsLibrary' })
}

// Dummy data
const images = ref([
  { src: '/images/logo1.png', title: 'Logo 1' },
  { src: '/images/logo2.png', title: 'Logo 2' },
  { src: '/images/logo3.png', title: 'Logo 3' },
  { src: '/images/logo4.png', title: 'Logo 4' },
  { src: '/images/logo5.png', title: 'Logo 5' },
  { src: '/images/logo6.png', title: 'Logo 6' },
])

const filteredImages = computed(() => {
  if (!searchQuery.value) return images.value
  return images.value.filter(img =>
    img.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>
