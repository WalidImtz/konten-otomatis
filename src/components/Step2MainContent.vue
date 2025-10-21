<template>
  <div class="space-y-8">
    <!-- Form Area -->
    <div class="grid md:grid-cols-3 gap-6">
      <!-- Card Main Content (2/3) -->
      <CardBox class="px-6 md:col-span-2">
        <h3 class="text-lg font-semibold text-white mb-1">Main Content</h3>
        <p class="text-sm text-gray-300 mb-4">
          Write the main text that will appear in your generated content.
        </p>
        <textarea
          v-model="mainContent"
          rows="8"
          placeholder="Type your main content here..."
          class="w-full p-3 rounded bg-[#5E6FAC] border border-[#2F3756] text-white 
                 focus:outline-none focus:ring-2 focus:ring-[#F98613] resize-none"
        ></textarea>
      </CardBox>

      <!-- Card Ads Group (1/3) -->
      <CardBox class="px-6">
        <h3 class="text-lg font-semibold text-white mb-1">Ads Group</h3>
        <p class="text-sm text-gray-300 mb-4">
          Select an Ads Group to categorize this content.
        </p>
        <select
          v-model="adsGroup"
          class="w-full p-2 rounded bg-[#5E6FAC] border border-[#2F3756] text-white 
                 focus:outline-none focus:ring-2 focus:ring-[#F98613]"
        >
          <option value="">Select Ads Group</option>
          <option v-for="group in adsGroups" :key="group.id" :value="group.name">
            {{ group.name }}
          </option>
        </select>
      </CardBox>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CardBox from '@/components/CardBox.vue'

// Form state
const mainContent = ref('')
const adsGroup = ref('')

// Dummy ads group list
const adsGroups = ref([
  { id: 1, name: 'Promo Campaign' },
  { id: 2, name: 'Brand Awareness' },
  { id: 3, name: 'Product Launch' },
])
</script>
