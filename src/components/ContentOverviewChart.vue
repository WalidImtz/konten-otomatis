<template>
  <CardBox
    class="col-span-2 row-span-2 bg-[#243A8A] text-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-between"
  >
    <!-- Judul -->
    <div class="self-start">
      <h3 class="font-semibold text-lg mb-1">Content Overview</h3>
      <p class="text-sm opacity-80">Lihat statistik konten Anda secara keseluruhan.</p>
    </div>

    <!-- Diagram -->
    <div class="relative w-full max-w-[220px] h-[120px] mt-6">
      <canvas ref="chartCanvas"></canvas>

      <!-- Total -->
      <div class="absolute inset-0 flex items-center justify-center text-center mt-6">
        <div>
          <p class="text-sm text-white/60">Total</p>
          <p class="text-2xl font-semibold">{{ totalContent }}</p>
        </div>
      </div>
    </div>

    <!-- Keterangan -->
    <div class="flex justify-around w-full mt-2 text-sm">
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 rounded-full bg-[#F98613]"></span>
        <span>Aktif: {{ stats.active }}</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 rounded-full bg-[#FFB265]"></span>
        <span>Dibuat: {{ stats.created }}</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 rounded-full bg-[#FFD180]"></span>
        <span>Dihapus: {{ stats.deleted }}</span>
      </div>
    </div>
  </CardBox>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from 'chart.js'
Chart.register(ArcElement, Tooltip, Legend, DoughnutController)
import CardBox from '@/components/CardBox.vue'

// Data dummy
const stats = {
  active: 12,
  created: 8,
  deleted: 3,
}
const totalContent = stats.active + stats.created + stats.deleted

const chartCanvas = ref(null)

onMounted(() => {
  const ctx = chartCanvas.value.getContext('2d')

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Aktif', 'Dibuat', 'Dihapus'],
      datasets: [
        {
          data: [stats.active, stats.created, stats.deleted],
          backgroundColor: ['#F98613', '#FFB265', '#FFD180'],
          borderWidth: 0,
          cutout: '70%',
          circumference: 180,
          rotation: 270,
        },
      ],
    },
    options: {
      plugins: {
        tooltip: { enabled: true },
        legend: { display: false },
      },
      rotation: 270,
      circumference: 180,
      responsive: true,
      maintainAspectRatio: false,
    },
  })
})
</script>
