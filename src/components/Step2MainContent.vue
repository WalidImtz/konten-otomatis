<template>
  <div class="space-y-8">
    <!-- Area Form -->
    <div class="grid md:grid-cols-3 gap-6">
      <!-- Kartu Konten Utama -->
      <CardBox class="px-6 md:col-span-2">
        <h3 class="text-lg font-semibold text-white mb-1">Konten Utama</h3>
        <p class="text-sm text-gray-300 mb-4">
          Tulis teks utama yang akan muncul di konten yang dihasilkan.
        </p>
        <textarea
          v-model="mainContent"
          rows="8"
          placeholder="Ketik konten utama Anda di sini..."
          class="w-full p-3 rounded bg-[#5E6FAC] border border-[#2F3756] text-white 
                 focus:outline-none focus:ring-2 focus:ring-[#F98613] resize-none"
        ></textarea>
      </CardBox>

      <!-- Kartu Grup Iklan -->
      <CardBox id="ads-group-select" class="px-6">
        <h3 class="text-lg font-semibold text-white mb-1">Grup Iklan</h3>
        <p class="text-sm text-gray-300 mb-4">
          Pilih Grup Iklan untuk mengkategorikan konten ini.
        </p>
        <select
          v-model="adsGroup"
          class="w-full p-2 rounded bg-[#5E6FAC] border border-[#2F3756] text-white 
                 focus:outline-none focus:ring-2 focus:ring-[#F98613]"
        >
          <option value="">Pilih Grup Iklan</option>
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

const mainContent = ref('')
const adsGroup = ref('')

// Daftar grup iklan dummy
const adsGroups = ref([
  { id: 1, name: 'Kampanye Promo' },
  { id: 2, name: 'Brand Awareness' },
  { id: 3, name: 'Peluncuran Produk' },
])
</script>
