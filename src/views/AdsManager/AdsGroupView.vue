<script setup>
import { ref, computed } from 'vue'
import { mdiMagnify, mdiPlus, mdiPencil, mdiTrashCan } from '@mdi/js'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionMain from '@/components/SectionMain.vue'
import BaseButton from '@/components/BaseButton.vue'
import CardBox from '@/components/CardBox.vue'
import BaseInput from '@/components/BaseInput.vue'

const searchQuery = ref('')

const adsgroup = ref([
  { id: 1, name: '1080p'},
  { id: 2, name: '720p',},
  { id: 3, name: '4K UHD'},
  { id: 4, name: 'Square'},
  { id: 5, name: 'Vertical'},
])

const filteredResolutions = computed(() => {
  if (!searchQuery.value) return adsgroup.value
  return adsgroup.value.filter(r =>
    r.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <!-- Judul Halaman -->
      <h1 class="text-2xl font-bold text-white mb-6">
        Ads Manager › Resolution Configuration
      </h1>

      <!-- Header: Add New & Search -->
      <div
        class="flex flex-col sm:flex-row justify-between sm:justify-end items-stretch sm:items-center gap-3 mb-6"
      >
        <BaseButton
          :icon="mdiPlus"
          color="primary"
          label="Add New Config"
          class="!rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
        />

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
        class="overflow-hidden rounded-2xl shadow-lg border border-[#2F3756] bg-[#223381]"
        has-table
      >
        <div class="overflow-x-auto">
          <table
            class="min-w-full border-collapse text-sm text-white"
          >
            <thead class="bg-[#2F3D79] text-white uppercase tracking-wide">
              <tr>
                <th class="px-5 py-3 text-center whitespace-nowrap">No</th>
                <th class="px-5 py-3 text-center whitespace-nowrap">Name</th>
                <th class="px-5 py-3 text-center whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(r, index) in filteredResolutions"
                :key="r.id"
                class="border-t border-[#2F3756] hover:bg-[#2C3B82] transition-colors"
              >
                <td class="px-5 py-3 text-center">{{ index + 1 }}</td>
                <td class="px-5 py-3 text-center">{{ r.name }}</td>
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
        </div>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
