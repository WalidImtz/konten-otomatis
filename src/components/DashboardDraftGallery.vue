<template>
  <!-- Header -->
  <div class="flex items-center justify-between mb-4">
    <h2 class="text-lg font-semibold text-white">Draft</h2>

    <!-- Toolbar kanan -->
    <div class="flex flex-wrap items-center justify-end gap-3 w-full md:w-auto">
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
          placeholder="Search..."
          class="w-full !rounded-lg !bg-[#5E6FAC] !border-[#2F3756] text-white placeholder-white/60 focus:ring-2 focus:ring-[#6f80c9]"
        />
      </div>
    </div>
  </div>

  <!-- Grid Drafts -->
  <div
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
  >
    <div
      v-for="(draft, index) in drafts"
      :key="index"
      @click="openDraft(draft.id)"
      class="relative group overflow-hidden rounded-xl bg-[#2B3C7A] hover:bg-[#3649A3] cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg"
    >
      <img
        :src="draft.src"
        :alt="draft.title"
        class="w-full h-32 object-cover"
      />
      <div class="p-3 text-sm text-center font-medium truncate text-white/90">
        {{ draft.title }}
      </div>

      <!-- Hover Overlay -->
      <div
        class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <button
          class="bg-primary text-white text-xs px-3 py-1 rounded-lg shadow hover:opacity-90"
        >
          Open Draft
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import BaseInput from './BaseInput.vue'

const router = useRouter()

// Gambar dummy dari ImageGallery.vue
const drafts = [
  { id: 1, src: '/images/img1.png', title: 'Background 1' },
  { id: 2, src: '/images/img2.png', title: 'Background 2' },
  { id: 3, src: '/images/bg3.jpg', title: 'Background 3' },
  { id: 4, src: '/images/bg4.jpg', title: 'Background 4' },
  { id: 5, src: '/images/bg5.jpg', title: 'Background 5' },
  { id: 6, src: '/images/bg6.jpg', title: 'Background 6' },
  { id: 7, src: '/images/bg7.jpg', title: 'Background 7' },
  { id: 8, src: '/images/bg8.jpg', title: 'Background 8' },
]

const openDraft = (id) => {
  router.push({ name: 'view-content', params: { id } })
}

const goToAllDrafts = () => {
  router.push({ name: 'AssetsLibrary' })
}
</script>
