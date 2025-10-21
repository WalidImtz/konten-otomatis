<template>
  <div class="relative w-full flex justify-between items-center">
    <!-- Garis penghubung -->
    <div class="absolute top-1/2 left-3 right-0 h-[6px] bg-[#4A4A8A] -translate-y-1/2"></div>

    <!-- Step 1 -->
    <div class="relative z-10 flex flex-col items-center">
      <div
        class="w-12 h-12 flex items-center justify-center rounded-full text-white font-semibold shadow-md"
        :class="currentStep >= 1 ? 'bg-[#F98613]' : 'bg-gray-500'"
      >
        1
      </div>
    </div>

    <!-- Step 2 -->
    <div class="relative z-10 flex flex-col items-center">
      <div
        class="w-12 h-12 flex items-center justify-center rounded-full text-white font-semibold shadow-md"
        :class="currentStep >= 2 ? 'bg-[#F98613]' : 'bg-gray-500'"
      >
        2
      </div>
    </div>

    <!-- Step 3 -->
    <div class="relative z-10 flex flex-col items-center">
      <div
        class="w-12 h-12 flex items-center justify-center rounded-full text-white font-semibold shadow-md"
        :class="currentStep >= 3 ? 'bg-[#F98613]' : 'bg-gray-500'"
      >
        3
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  currentStep: Number,
})
</script>
