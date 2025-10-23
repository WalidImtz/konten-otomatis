<template>
  <CardBox
    class="col-span-2 row-span-2 bg-[#243A8A] text-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-between"
  >
    <h3 class="font-semibold text-lg mb-2 self-start">Content Overview</h3>
    <p class="text-sm opacity-80">See how many content you’ve created.</p>

    <!-- Chart -->
    <div class="relative mx-auto w-full max-w-[180px] h-[100px]">
      <canvas ref="chartCanvas"></canvas>
      <div class="absolute inset-0 flex items-center justify-center text-center mt-4">
        <div>
          <p class="text-sm text-white/60">Total</p>
          <p class="text-xl font-semibold">{{ totalContent }}</p>
        </div>
      </div>
    </div>
  </CardBox>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from 'chart.js'
Chart.register(ArcElement, Tooltip, Legend, DoughnutController)
import CardBox from '@/components/CardBox.vue'


// Dummy data
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
      labels: ['Active', 'Created', 'Deleted'],
      datasets: [
        {
          data: [stats.active, stats.created, stats.deleted],
          backgroundColor: ['#F98613', '#F98613', '#FFD180'],
          borderWidth: 0,
          cutout: '70%',
          circumference: 180,
          rotation: 270,
        },
      ],
    },
    options: {
      plugins: {
        tooltip: { enabled: false },
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
