<script setup>
import AsideMenuLayer from '@/components/AsideMenuLayer.vue'
import OverlayLayer from '@/components/OverlayLayer.vue'

defineProps({
  menu: Array,
  isAsideMobileExpanded: Boolean,
  isAsideLgActive: Boolean,
  class: String
})


const emit = defineEmits(['menu-click', 'aside-lg-close-click'])

const menuClick = (event, item) => {
  emit('menu-click', event, item)
}

const asideLgCloseClick = (event) => {
  emit('aside-lg-close-click', event)
}
</script>

<template>
  <!-- Sidebar utama -->
  <div
    class="w-full h-full rounded-2xl bg-surface text-white shadow-xl border border-[#223381] overflow-hidden transition-all"
  >
    <AsideMenuLayer
      :menu="menu"
      @menu-click="menuClick"
      @aside-lg-close-click="asideLgCloseClick"
    />
  </div>

  <!-- Overlay untuk mobile -->
  <OverlayLayer v-show="isAsideLgActive" z-index="z-30" @overlay-click="asideLgCloseClick" />
</template>
