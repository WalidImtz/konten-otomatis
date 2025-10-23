import { defineStore } from 'pinia'
import steps from '@/data-source/onboardingSteps'
import router from '@/router'

export const useOnboardingStore = defineStore('onboarding', {
  state: () => ({
    isActive: false,
    currentStep: 1,
    steps
  }),

  getters: {
    currentStepData: (state) => state.steps[state.currentStep - 1],
    isLastStep: (state) => state.currentStep >= state.steps.length
  },

  actions: {
    start() {
      this.isActive = true
      this.currentStep = 1
      this.navigateIfNeeded()
    },

    nextStep() {
      if (this.isLastStep) {
        this.isActive = false
        return
      }
      this.currentStep++
      this.navigateIfNeeded()
    },

    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--
        this.navigateIfNeeded()
      }
    },

    navigateIfNeeded() {
      const step = this.steps[this.currentStep - 1]
      if (step?.route && router.currentRoute.value.path !== step.route) {
        router.push(step.route)
      }
    }
  }
})
