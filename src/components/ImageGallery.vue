<template>
  <CardBox class="px-6">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
      <!-- Stepper Kategori -->
      <div class="flex items-center gap-6 border-b border-[#2F3756] pb-2">
        <button
          v-for="(step, index) in steps"
          :key="index"
          @click="activeStep = step.value"
          :class="[
            'text-sm font-medium pb-2 transition-all duration-200',
            activeStep === step.value
              ? 'text-primary border-b-2 border-primary'
              : 'text-white/70 hover:text-white'
          ]"
        >
          {{ step.label }}
        </button>
      </div>

      <!-- Toolbar -->
      <div class="flex flex-wrap items-center justify-end gap-3 w-full md:w-auto">
        <!-- Add New -->
        <BaseButton
          :icon="mdiPlus"
          color="primary"
          label="Add New"
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
            placeholder="Search image..."
            class="w-full !rounded-lg !bg-[#5E6FAC] !border-[#2F3756] text-white placeholder-white/60 focus:ring-2 focus:ring-[#6f80c9]"
          />
        </div>
      </div>
    </div>

    <!-- Grid Gambar -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <GalleryCard
        v-for="(image, index) in paginatedImages"
        :key="index"
        :src="image.src"
        :title="image.title"
      />
    </div>

    <!-- Pagination -->
    <div class="flex justify-center mt-6 gap-3">
      <button
        class="px-3 py-1 bg-highlight text-white rounded-md text-sm hover:opacity-90"
        @click="prevPage"
        :disabled="page === 1"
      >
        Prev
      </button>
      <span class="text-white text-sm">Page {{ page }} / {{ totalPages }}</span>
      <button
        class="px-3 py-1 bg-highlight text-white rounded-md text-sm hover:opacity-90"
        @click="nextPage"
        :disabled="page === totalPages"
      >
        Next
      </button>
    </div>
  </CardBox>
</template>

<script setup>
import { ref, computed } from 'vue'
import CardBox from '@/components/CardBox.vue'
import GalleryCard from '@/components/GalleryCard.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'
import { mdiPlus, mdiMagnify } from '@mdi/js'

// Tabs
const steps = [
  { label: 'Background', value: 'background' },
  { label: 'Elements', value: 'elements' },
]

const activeStep = ref('background')
const searchQuery = ref('')
const page = ref(1)
const itemsPerPage = 8

// Dummy data
const allImages = ref({
  background: [
    { src: './images/img1.png', title: 'Background 1' },
    { src: './images/img2.png', title: 'Background 2' },
    { src: './images/img3.png', title: 'Background 3' },
    { src: './images/img4.png', title: 'Background 4' },
    { src: './images/img5.png', title: 'Background 5' },
    { src: './images/img6.png', title: 'Background 6' },
    { src: './images/img7.png', title: 'Background 7' },
    { src: './images/img8.png', title: 'Background 8' },
    { src: './images/bg9.jpg', title: 'Background 9' },
  ],
  elements: [
    { src: './images/icon1.png', title: 'Icon Pack' },
    { src: './images/decor1.png', title: 'Decoration' },
    { src: './images/shape1.png', title: 'Geometric Shape' },
    { src: './images/shape2.png', title: 'Shape 2' },
    { src: './images/shape3.png', title: 'Shape 3' },
  ],
})

// Filter dan pagination
const filteredImages = computed(() => {
  const list = allImages.value[activeStep.value]
  if (!searchQuery.value) return list
  return list.filter(i =>
    i.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const totalPages = computed(() => Math.ceil(filteredImages.value.length / itemsPerPage))

const paginatedImages = computed(() => {
  const start = (page.value - 1) * itemsPerPage
  return filteredImages.value.slice(start, start + itemsPerPage)
})

const nextPage = () => {
  if (page.value < totalPages.value) page.value++
}
const prevPage = () => {
  if (page.value > 1) page.value--
}
</script>
