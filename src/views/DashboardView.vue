<template>
  <LayoutAuthenticated>
    <SectionMain>
      <!-- Header -->
      <DashboardHeader />

      <!-- Widgets -->
      <DashboardWidgets class="mb-8" />

      <!-- Draft Gallery -->
      <DashboardDraftGallery />
      <BaseButton
        @click="openOnboardingManual"
        icon="mdi-help-circle"
        class="fixed bottom-6 right-6 bg-[#F98613] hover:bg-[#ff9f3d] text-white rounded-full shadow-lg p-4"
      />

    </SectionMain>
  </LayoutAuthenticated>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionMain from '@/components/SectionMain.vue'
import DashboardHeader from '@/components/DashboardHeader.vue'
import DashboardWidgets from '@/components/DashboardWidgets.vue'
import DashboardDraftGallery from '@/components/DashboardDraftGallery.vue'
import { useOnboardingStore } from '@/stores/useOnboardingStore.js'
const onboardingStore = useOnboardingStore()

function openOnboardingManual() {
  onboardingStore.start()
}
</script>
