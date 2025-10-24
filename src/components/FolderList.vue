<template>
  <div class="space-y-6">
    <!-- Header -->
    <div
      class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
    >
      <h2 class="text-lg font-semibold text-white">Folder</h2>

      <!-- Toolbar -->
      <div class="flex flex-wrap items-center justify-end gap-3 w-full md:w-auto">
        <!-- Add Folder -->
        <BaseButton
          :icon="mdiPlus"
          color="primary"
          label="Tambah Folder Baru"
          class="!rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all"
        />

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
            placeholder="Cari folder..."
            class="w-full !rounded-lg !bg-[#5E6FAC] !border-[#2F3756] text-white placeholder-white/60 focus:ring-2 focus:ring-[#6f80c9]"
          />
        </div>
      </div>
    </div>

    <!-- Folder Grid -->
    <div
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 w-full"
    >
      <div
        v-for="(folder, index) in filteredFolders"
        :key="index"
        @click="$router.push({ name: 'FolderGallery', params: { folderName: folder.name } })"
        class="flex items-center gap-3 px-5 py-2 bg-surface text-white border-[#33468E] hover:bg-[#2d4080] rounded-xl cursor-pointer transition-all duration-200 min-w-[180px]"
      >
        <div class="text-2xl">📁</div>
        <p class="font-medium truncate">{{ folder.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { mdiMagnify, mdiPlus } from '@mdi/js'
import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'

const searchQuery = ref('')

const folders = ref([
  { name: 'Favorit' },
  { name: 'Logo' },
  { name: 'Latar Belakang' },
  { name: 'Ikon' },
  { name: 'Spanduk' },
  { name: 'Thumbnail' },
  { name: 'Lainnya' },
  { name: 'Template' },
  { name: 'Ekspor' },
  { name: 'Unggahan' },
])

const filteredFolders = computed(() => {
  if (!searchQuery.value) return folders.value
  return folders.value.filter(folder =>
    folder.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>
