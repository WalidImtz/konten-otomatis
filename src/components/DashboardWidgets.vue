<template>
  <div
    class="grid grid-cols-1 md:grid-cols-8 gap-6 auto-rows-[minmax(25px,auto)]"
  >
    <!-- Kartu Skor Kredit -->
    <div
      @click="navigateTo('/credit')"
      class="md:col-span-6 row-span-1 cursor-pointer hover:scale-[1.01] transition-all"
    >
      <CreditScoreCard />
    </div>

    <!-- Kartu Ads Group -->
    <CardBox
      @click="navigateTo('/ads/group')"
      class="col-span-2 row-span-3 bg-[#2E3FA5] text-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.01] transition-all cursor-pointer flex flex-col"
    >
      <!-- Header -->
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-semibold text-lg">Ads Group</h3>
        <button
          class="text-xs bg-primary px-2 py-1 rounded-md hover:opacity-90 transition-all"
        >
          Lihat Semua
        </button>
      </div>

      <!-- Tabel Mini -->
      <div class="flex-1 overflow-y-auto">
        <table
          class="w-full text-sm text-left border-separate border-spacing-y-2"
        >
          <thead>
            <tr class="text-white/70">
              <th class="px-2 py-1">Nama Grup</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(group, index) in adsGroups"
              :key="index"
              class="bg-[#394CA8] hover:bg-[#4256B5] transition-colors rounded-md"
            >
              <td class="px-2 py-2 rounded-md truncate">{{ group.name }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Footer Info -->
      <div class="text-xs text-white/60 mt-4">
        Menampilkan {{ adsGroups.length }} dari 5 grup
      </div>
    </CardBox>

    <!-- Kartu Asset Library -->
    <CardBox
      @click="navigateTo('/assets')"
      class="col-span-4 row-span-2 bg-[#243A8A] text-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.01] transition-all cursor-pointer"
    >
      <div class="flex justify-between items-center mb-3">
        <h3 class="font-semibold text-lg">Assets Library</h3>
        <button
          class="text-xs bg-primary px-2 py-1 rounded-md hover:opacity-90 transition-all"
        >
          Kelola
        </button>
      </div>

      <p class="text-sm text-white/80 mb-4">
        Lihat dan kelola gambar serta elemen desain yang telah kamu unggah.
      </p>

      <!-- Galeri Aset -->
      <div
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 rounded-md overflow-hidden"
      >
        <img
          v-for="(img, idx) in assetImages"
          :key="idx"
          :src="img"
          class="aspect-square object-cover rounded-md hover:opacity-80 transition-all"
          alt="Aset"
        />
      </div>
    </CardBox>

    <!-- Kartu Content Overview -->
      <ContentOverviewChart />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import CardBox from '@/components/CardBox.vue'
import CreditScoreCard from './CreditScoreCard.vue'
import ContentOverviewChart from './ContentOverviewChart.vue'

const router = useRouter()

// Fungsi navigasi untuk shortcut antar halaman
const navigateTo = (path) => {
  router.push(path)
}

// Data dummy untuk tabel mini Ads Group
const adsGroups = [
  { name: 'Promo 11.11', status: 'Aktif' },
  { name: 'Penjualan Akhir Tahun', status: 'Aktif' },
  { name: 'Peluncuran Produk Baru', status: 'Jeda' },
  { name: 'Brand Awareness', status: 'Draf' },
  { name: 'Acara Clearance', status: 'Aktif' },
]

// Data dummy untuk galeri aset
const assetImages = [
  './images/img1.png',
  './images/img2.png',
  './images/img3.png',
  './images/img4.png',
]
</script>

<style scoped>
.bg-surface {
  background-color: var(--color-surface);
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
