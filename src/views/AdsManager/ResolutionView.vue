<script setup>
import { ref, computed } from 'vue'
import { mdiMagnify, mdiPlus, mdiPencil, mdiTrashCan } from '@mdi/js'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionMain from '@/components/SectionMain.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import CardBox from '@/components/CardBox.vue'
import BaseInput from '@/components/BaseInput.vue'

const searchQuery = ref('')

const resolutions = ref([
  { id: 1, name: '1080p', ratio: '16:9', width: 1920, height: 1080 },
  { id: 2, name: '720p', ratio: '16:9', width: 1280, height: 720 },
  { id: 3, name: '4K UHD', ratio: '16:9', width: 3840, height: 2160 },
  { id: 4, name: 'Square', ratio: '1:1', width: 1080, height: 1080 },
  { id: 5, name: 'Vertical', ratio: '9:16', width: 1080, height: 1920 },
])

const filteredResolutions = computed(() => {
  if (!searchQuery.value) return resolutions.value
  return resolutions.value.filter(r =>
    r.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    r.ratio.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <!-- Judul Halaman -->
      <h1 class="text-2xl font-bold text-white mb-6">Ads Manager > Resolution Configuration</h1>

      <!-- Header: Add New & Search -->
      <div class="flex flex-col sm:flex-row justify-end items-center gap-3 mb-6">
        <BaseButtons>
          <BaseButton
            :icon="mdiPlus"
            color="primary"
            label="Add New Config"
            class="!rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all"
          />
        </BaseButtons>
        <div class="relative w-full sm:w-64">
          <BaseInput
            v-model="searchQuery"
            :icon="mdiMagnify"
            placeholder="Search resolution..."
            class="w-full !rounded-lg !bg-[#5E6FAC] !border-[#2F3756] text-white placeholder-white/60 focus:ring-2 focus:ring-[#6f80c9]"
          />
        </div>
      </div>

      <!-- Card Tabel -->
      <CardBox
        class="overflow-hidden rounded-2xl shadow-lg border border-[#2F3756]"
        has-table
      >
        <table class="w-full border-collapse overflow-hidden rounded-2xl">
          <thead class="bg-[#2F3D79] text-white text-sm uppercase tracking-wide">
            <tr>
              <th class="px-5 py-3 text-center">No</th>
              <th class="px-5 py-3 text-center">Ratio</th>
              <th class="px-5 py-3 text-center">Width</th>
              <th class="px-5 py-3 text-center">Height</th>
              <th class="px-5 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
            v-for="(r, index) in filteredResolutions"
            :key="r.id"
            class="border-t border-[#2F3756] hover:bg-[#2C3B82] transition-colors"
            >
            <td class="px-5 py-3 text-center">{{ index + 1 }}</td>
            <td class="px-5 py-3 text-center">{{ r.ratio }}</td>
            <td class="px-5 py-3 text-center">{{ r.width }}</td>
            <td class="px-5 py-3 text-center">{{ r.height }}</td>

                <td class="px-5 py-3 text-center align-middle">
                    <div class="flex justify-center items-center gap-2">
                    <BaseButton
                        :icon="mdiPencil"
                        color="info"
                        small
                        class="hover:scale-105 transition-transform"
                    />
                    <BaseButton
                        :icon="mdiTrashCan"
                        color="danger"
                        small
                        class="hover:scale-105 transition-transform"
                    />
                    </div>
                </td>
            </tr>


            <tr v-if="filteredResolutions.length === 0">
              <td colspan="5" class="text-center py-6 text-gray-400">
                No results found.
              </td>
            </tr>
          </tbody>
        </table>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
