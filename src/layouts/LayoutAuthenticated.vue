<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import menuAside from '@/menuAside.js'
import { useDarkModeStore } from '@/stores/darkMode.js'
import AsideMenu from '@/components/AsideMenu.vue'
import FooterBar from '@/components/FooterBar.vue'

const darkModeStore = useDarkModeStore()
const router = useRouter()

const isAsideMobileExpanded = ref(false)
const isAsideLgActive = ref(false)

router.beforeEach(() => {
  isAsideMobileExpanded.value = false
  isAsideLgActive.value = false
})

const menuClick = (event, item) => {
  if (item.isToggleLightDark) {
    darkModeStore.set()
  }
  if (item.isLogout) {
    // aksi logout di sini
  }
}
</script>

<template>
  <div class="relative min-h-screen bg-background text-text transition-all">

    <!-- ✅ Sidebar floating -->
    <AsideMenu
      :menu="menuAside"
      :is-aside-mobile-expanded="isAsideMobileExpanded"
      :is-aside-lg-active="isAsideLgActive"
      class="z-40 w-60 rounded-2xl shadow-xl bg-surface overflow-hidden"
      @menu-click="menuClick"
      @aside-lg-close-click="isAsideLgActive = false"
    />

    <!-- ✅ Konten utama -->
    <main class="pl-8">
      <slot />
    </main>

    <!-- ✅ Footer -->
    <FooterBar class="mt-10 text-center">
      Get more with
      <a href="https://tailwind-vue.justboil.me/" target="_blank" class="text-primary font-semibold">
        Premium version
      </a>
    </FooterBar>
  </div>
</template>
