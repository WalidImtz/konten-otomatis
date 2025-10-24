<template>
  <transition name="fade">
    <div
      v-if="onboarding.isActive"
      class="fixed inset-0 z-[100] pointer-events-none"
    >
      <!-- Overlay utama dengan mask -->
      <svg class="absolute inset-0 w-full h-full z-[100]" style="pointer-events: none;">
        <defs>
          <mask id="hole-mask">
            <!-- Lapisan gelap seluruh layar -->
            <rect width="100%" height="100%" fill="white" />
            <!-- Lubang transparan untuk highlight -->
            <rect
              v-if="highlightRect"
              :x="highlightRect.left"
              :y="highlightRect.top"
              :width="highlightRect.width"
              :height="highlightRect.height"
              rx="10"
              ry="10"
              fill="black"
            />
          </mask>
        </defs>

        <!-- Lapisan blur gelap di luar lubang -->
        <rect
          width="100%"
          height="100%"
          fill="rgba(0,0,0,0.6)"
          style="backdrop-filter: blur(6px);"
          mask="url(#hole-mask)"
        />

        <!-- Border glowing di sekitar target -->
        <rect
          v-if="highlightRect"
          :x="highlightRect.left - 4"
          :y="highlightRect.top - 4"
          :width="highlightRect.width + 8"
          :height="highlightRect.height + 8"
          rx="12"
          ry="12"
          stroke="#F98613"
          stroke-width="3"
          fill="none"
          style="filter: drop-shadow(0 0 12px rgba(249,134,19,0.7)); transition: all 0.2s ease;"
        />
      </svg>

      <!-- Popup onboarding -->
      <div
        v-if="stepData"
        class="fixed z-[101] max-w-md bg-[#1b2042] text-white rounded-xl shadow-xl p-6 text-center pointer-events-auto"
        :style="popupStyle"
      >
        <h3 class="text-xl font-bold mb-3">{{ stepData.title }}</h3>
        <p class="text-gray-300 mb-6">{{ stepData.description }}</p>
        <div class="flex justify-center gap-4">
          <button
            v-if="onboarding.currentStep > 1"
            @click="onboarding.prevStep"
            class="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-all"
          >
            Kembali
          </button>
          <button
            @click="onboarding.nextStep"
            class="px-4 py-2 bg-[#F98613] hover:bg-[#ff9f3d] rounded-lg transition-all"
          >
            {{ onboarding.isLastStep ? 'Selesai' : 'Lanjut' }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useOnboardingStore } from '@/stores/useOnboardingStore'

const onboarding = useOnboardingStore()
const stepData = computed(() => onboarding.currentStepData)

const highlightRect = ref(null)
const popupStyle = ref({})

const updateHighlight = async () => {
  await nextTick()

  const targetId = stepData.value?.targetId
  const targetEl = targetId ? document.getElementById(targetId) : null

  if (!targetEl) {
    highlightRect.value = null
    popupStyle.value = centerPopup()
    return
  }

  const rect = targetEl.getBoundingClientRect()

  highlightRect.value = {
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height,
  }

  if (stepData.value?.id === 8) {
    popupStyle.value = {
      top: `${rect.bottom + 20}px`,
      left: `${rect.left + rect.width / 2}px`,
      transform: 'translateX(-50%)',
    }
  } else {
    popupStyle.value = centerPopup()
  }
}

const centerPopup = () => ({
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})

const handleScrollOrResize = () => updateHighlight()

onMounted(() => {
  updateHighlight()
  window.addEventListener('scroll', handleScrollOrResize, { passive: true })
  window.addEventListener('resize', handleScrollOrResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScrollOrResize)
  window.removeEventListener('resize', handleScrollOrResize)
})

watch(() => onboarding.currentStep, updateHighlight)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
