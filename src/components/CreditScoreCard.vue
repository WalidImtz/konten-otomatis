<template>
  <CardBox class="col-span-6 row-span-1 bg-surface text-white">
    <div class="flex justify-between items-center mb-2">
      <h3 class="text-lg font-semibold">Credit Score</h3>
      <span class="text-sm text-gray-300">{{ score }}/{{ maxScore }}</span>
    </div>

    <!-- Segmented Score Bar -->
    <div class="flex">
      <span
        v-for="i in totalSegments"
        :key="i"
        class="h-[36px] flex-1 rounded-lg transition-all duration-500 border border-[#223381]"
        :class="getSegmentColor(i)"
      ></span>
    </div>
  </CardBox>
</template>

<script setup>
import CardBox from '@/components/CardBox.vue'
import { computed, ref } from 'vue'

const score = ref(23)
const maxScore = ref(100)
const totalSegments = 100

// Hitung segment aktif berdasarkan score
const activeSegments = computed(() => Math.round((score.value / maxScore.value) * totalSegments))

// Segment warna dinamis
const getSegmentColor = (i) => {
  if (i <= activeSegments.value) {
    const colorSteps = ['bg-primary', 'bg-highlight']
    return colorSteps[Math.min(i - 1, colorSteps.length - 2)]
  }
  return 'bg-[#5E6FAC]'
}

const remaining = computed(() => totalSegments - activeSegments.value)
</script>

<style scoped>
.bg-surface {
  background-color: var(--color-surface);
}
</style>
