<template>
  <transition name="fade">
    <div
      v-if="onboarding.isActive"
      class="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center"
    >
      <!-- Highlight -->
      <div
        v-if="highlight && highlightStyle"
        :style="highlightStyle"
        class="absolute border-4 border-[#F98613] rounded-xl transition-all duration-300"
      ></div>

      <!-- Pop-up -->
      <div
        class="relative z-[101] bg-[#1b2042] text-white rounded-xl shadow-xl p-6 max-w-md text-center"
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
import { computed, ref, watch, onMounted, nextTick } from 'vue'
import { useOnboardingStore } from '@/stores/useOnboardingStore'

const onboarding = useOnboardingStore()
const stepData = computed(() => onboarding.currentStepData)

const highlight = ref(null)
const highlightStyle = ref(null)

const updateHighlight = async () => {
  await nextTick() // pastikan elemen sudah render
  const targetId = stepData.value?.targetId
  if (!targetId) {
    highlight.value = null
    return
  }
  const element = document.getElementById(targetId)
  if (element) {
    const rect = element.getBoundingClientRect()
    highlight.value = element
    highlightStyle.value = {
      top: `${rect.top + window.scrollY - 6}px`,
      left: `${rect.left + window.scrollX - 6}px`,
      width: `${rect.width + 12}px`,
      height: `${rect.height + 12}px`
    }
  } else {
    highlight.value = null
  }
}

onMounted(updateHighlight)
watch(() => onboarding.currentStep, updateHighlight)
watch(() => onboarding.currentStepData?.route, updateHighlight)
</script>
