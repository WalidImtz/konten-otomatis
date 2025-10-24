<template>
  <LayoutAuthenticated>
    <SectionMain>
      <h1 class="text-2xl font-bold text-white mb-6">Create Content</h1>

      <!-- Wizard Progress -->
      <div class="mb-8">
        <CardBox class="px-6">
          <WizardProgressBar :current-step="currentStep" />
        </CardBox>
      </div>

      <!-- Step Content -->
      <div class="space-y-8">
        <Step1Resolution v-if="currentStep === 1" />
        <Step2MainContent v-else-if="currentStep === 2" />
        <Step3Background v-else />
      </div>

      <!-- Navigation Buttons -->
      <div class="flex justify-end gap-4 mt-6 pb-10">
        <!-- Cancel (Step 1 only) -->
        <button
          v-if="currentStep === 1"
          @click="cancel"
          class="px-8 py-3 bg-red-500 hover:bg-red-600 text-white text-base font-semibold rounded-xl shadow-md transition-all duration-200"
        >
          Cancel
        </button>

        <!-- Back (Step 2 & 3) -->
        <button
          v-if="currentStep > 1"
          @click="prevStep"
          class="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white text-base font-semibold rounded-xl shadow-md transition-all duration-200"
        >
          Back
        </button>

        <!-- Next / Finish -->
        <button
          :id="getNextButtonId"
          @click="nextStep"
          class="px-10 py-3 bg-[#F98613] hover:bg-[#ff9f3d] text-white text-base font-semibold rounded-xl shadow-md transition-all duration-200"
        >
          {{ currentStep < 3 ? 'Next' : 'Finish' }}
        </button>
      </div>
    </SectionMain>
  </LayoutAuthenticated>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import WizardProgressBar from '@/components/WizardProgressBar.vue'
import Step1Resolution from '@/components/Step1Resolution.vue'
import Step2MainContent from '@/components/Step2MainContent.vue'
import Step3Background from '@/components/Step3Background.vue'
import { useOnboardingStore } from '@/stores/useOnboardingStore'

const router = useRouter()
const onboarding = useOnboardingStore()
const currentStep = ref(1)

const nextStep = () => {
  if (currentStep.value < 3) {
    currentStep.value++
  } else {
    router.push({ name: 'view-content' })
  }
}

const prevStep = () => {
  if (currentStep.value > 1) currentStep.value--
}

const cancel = () => {
  router.push({ name: 'dashboard' })
}

onMounted(() => {
  onboarding.$subscribe((_, state) => {
    const id = state.currentStep
    if (id >= 3 && id <= 5) currentStep.value = 1
    else if (id >= 6 && id <= 7) currentStep.value = 2
    else if (id >= 8 && id <= 10) currentStep.value = 3
  })
})


const getNextButtonId = computed(() => {
  if (currentStep.value === 1) return 'onboarding-next-1'
  if (currentStep.value === 2) return 'onboarding-next-2'
  if (currentStep.value === 3) return 'onboarding-finish'
  return null
})

watch(
  () => router.currentRoute.value.name,
  (newRoute) => {
    if (newRoute === 'create-content' && onboarding.isActive) {
      setTimeout(() => onboarding.showCurrentStep(), 300)
    }
  },
  { immediate: true }
)
</script>
