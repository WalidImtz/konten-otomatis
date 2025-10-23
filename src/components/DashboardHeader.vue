<template>
  <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
    <h1 class="text-2xl font-bold text-white">What do you want to create?</h1>

    <div class="flex items-center gap-3">
      <BaseButton
        id="dashboard-add-new-btn"
        label="Add New"
        color="primary"
        class="!rounded-lg px-4 py-2 font-semibold text-sm"
        @click="handleAdd"
      />
      <div class="relative">
        <input
          v-model="search"
          type="text"
          placeholder="Search..."
          class="bg-[#1B256B] text-white rounded-lg px-4 py-2 pl-10 w-48 md:w-64 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        />
        <span class="absolute left-3 top-2.5 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/BaseButton.vue'

const search = ref('')

const handleAdd = () => {
  console.log('Add new content')
}
</script>
