<template>
  <div class="grid grid-cols-8 grid-rows-3 gap-6 auto-rows-[minmax(25px,auto)]">
    <!-- Credit Score -->
    <CreditScoreCard />

    <!-- Ads Group -->
    <CardBox
      class="col-span-2 row-span-3 bg-[#2E3FA5] text-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col"
    >
      <!-- Header -->
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-semibold text-lg">Ads Group</h3>
        <button
          class="text-xs bg-primary px-2 py-1 rounded-md hover:opacity-90 transition-all"
        >
          View All
        </button>
      </div>

      <!-- Tabel Mini -->
      <div class="flex-1 overflow-y-auto">
        <table class="w-full text-sm text-left border-separate border-spacing-y-2">
          <thead>
            <tr class="text-white/70">
              <th class="px-2 py-1">Name</th>
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
        Showing {{ adsGroups.length }} of 5 groups
      </div>
    </CardBox>

    <!-- Asset Library -->
    <CardBox
      class="col-span-4 row-span-2 bg-[#243A8A] text-white rounded-xl shadow-md hover:shadow-lg transition-all"
    >
      <h3 class="font-semibold text-lg mb-2">Asset Library</h3>
      <p class="text-sm opacity-80">View and manage uploaded assets.</p>
      <div class="flex items-center gap-3 mt-3">
        <img
          src="/images/img1.png"
          class="w-48 h-27 z-10 object-cover"
          alt="asset"
        />
        <img
          src="/images/img2.png"
          class="w-48 h-27 z-20 object-cover"
          alt="asset"
        />
      </div>
    </CardBox>

    <!-- Content Overview -->
    <ContentOverviewChart />
  </div>
</template>

<script setup>
import CardBox from '@/components/CardBox.vue'
import ContentOverviewChart from './ContentOverviewChart.vue';
import CreditScoreCard from './CreditScoreCard.vue';

// Dummy data untuk tabel mini Ads Group
const adsGroups = [
  { name: 'Promo 11.11', status: 'Active' },
  { name: 'Christmas Sale', status: 'Active' },
  { name: 'New Product Launch', status: 'Paused' },
  { name: 'Brand Awareness', status: 'Draft' },
  { name: 'Clearance Event', status: 'Active' },
]
</script>
