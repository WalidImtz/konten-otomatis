<template>
  <LayoutAuthenticated>
    <SectionMain>
      <h1 class="text-2xl font-bold text-white mb-6">Create Content</h1>
      <!-- Wizard -->
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
        <!-- Cancel (Step 1) -->
        <button
          v-if="currentStep === 1"
          @click="cancel"
          class="px-8 py-3 bg-highlight hover:highlight text-white text-base font-semibold rounded-xl shadow-md transition-all duration-200"
        >
          Cancel
        </button>

        <!-- Back (Step 2 & 3) -->
        <button
          v-if="currentStep > 1"
          @click="prevStep"
          class="px-8 py-3 bg-highlight hover:bg-highlight text-white text-base font-semibold rounded-xl shadow-md transition-all duration-200"
        >
          Back
        </button>

        <!-- Next / Finish -->
        <button
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
import { ref } from 'vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionMain from '@/components/SectionMain.vue'
import BaseButton from '@/components/BaseButton.vue'
import CardBox from '@/components/CardBox.vue'
import WizardProgressBar from '@/components/WizardProgressBar.vue'
import Step1Resolution from '@/components/Step1Resolution.vue'
import Step2MainContent from '@/components/Step2MainContent.vue'
import Step3Background from '@/components/Step3Background.vue'

const currentStep = ref(1)

const nextStep = () => {
  if (currentStep.value < 3) currentStep.value++
}

const prevStep = () => {
  if (currentStep.value > 1) currentStep.value--
}

const cancel = () => {
  currentStep.value = 1
}
</script>
