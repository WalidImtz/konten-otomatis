<template>
  <div
    class="relative group overflow-hidden rounded-xl bg-[#2B3C7A] hover:bg-[#3649A3] cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg"
  >
    <img
      :src="src"
      :alt="title"
      class="w-full h-32 object-cover rounded-t-xl"
    />
    <div class="p-3 text-sm text-center font-medium truncate">{{ title }}</div>

    <!-- Hover Overlay -->
    <div
      class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <button class="bg-primary text-white text-xs px-3 py-1 rounded-lg shadow hover:opacity-90">
        View
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  src: String,
  title: String,
})
</script>
