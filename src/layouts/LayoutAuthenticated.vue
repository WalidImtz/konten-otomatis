<template>
  <div class="relative min-h-screen bg-background text-text transition-all">

    <!-- Sidebar -->
    <AsideMenu
      :menu="menuAside"
      :is-aside-mobile-expanded="isAsideMobileExpanded"
      :is-aside-lg-active="isAsideLgActive"
      class="z-40 w-60 rounded-2xl shadow-xl bg-surface overflow-hidden"
      @menu-click="menuClick"
      @aside-lg-close-click="isAsideLgActive = false"
    />

    <!-- Konten utama -->
    <main class="pl-8">
      <slot />
    </main>

    <!-- Onboarding Overlay -->
    <OnboardingOverlay />

    <!-- Footer -->
    <FooterBar class="mt-10 text-center">
      Get more with
      <a
        href="https://tailwind-vue.justboil.me/"
        target="_blank"
        class="text-primary font-semibold"
      >
        Premium version
      </a>
    </FooterBar>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import menuAside from '@/menuAside.js'
import AsideMenu from '@/components/AsideMenu.vue'
import FooterBar from '@/components/FooterBar.vue'
import OnboardingOverlay from '@/components/OnboardingOverlay.vue'
import { eventBus } from '@/utils/eventBus.js'

const router = useRouter()

const isAsideMobileExpanded = ref(false)
const isAsideLgActive = ref(false)
const onboardingRef = ref(null)

router.beforeEach(() => {
  isAsideMobileExpanded.value = false
  isAsideLgActive.value = false
})

onMounted(() => {
  const alreadySeen = localStorage.getItem('onboardingDone')
  if (!alreadySeen) onboardingRef.value?.openOnboarding()

  eventBus.on('open-onboarding', () => {
    onboardingRef.value?.openOnboarding()
  })
})

onBeforeUnmount(() => {
  eventBus.off('open-onboarding')
})
</script>
