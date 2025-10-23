<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import {
  mdiChevronLeft,
  mdiChevronRight,
  mdiAccountCircle,
  mdiStarCircle,
  mdiMenu,
} from '@mdi/js'
import AsideMenuList from '@/components/AsideMenuList.vue'
import BaseIcon from '@/components/BaseIcon.vue'

const props = defineProps({
  menu: { type: Array, required: true },
})
const emit = defineEmits(['menu-click', 'aside-lg-close-click'])

/* STATES */
const isCollapsed = ref(false)
const isHovered = ref(false)
const isMobile = ref(false)
const isDrawerOpen = ref(false)    
const route = useRoute()

/* helper */
const desktopBreakpoint = 768

const checkMobile = () => {
  isMobile.value = window.innerWidth <= desktopBreakpoint
  if (!isMobile.value) {
    isDrawerOpen.value = false
    document.body.style.overflow = ''
  }
}

/* lifecycle */
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})

/* actions */
const toggleCollapse = () => {
  if (isMobile.value) return
  isCollapsed.value = !isCollapsed.value
}

const toggleDrawer = () => {
  if (!isMobile.value) return
  isDrawerOpen.value = !isDrawerOpen.value
  document.body.style.overflow = isDrawerOpen.value ? 'hidden' : ''
}

const closeDrawer = () => {
  if (!isMobile.value) return
  isDrawerOpen.value = false
  document.body.style.overflow = ''
}

const menuClick = (event, item) => {
  emit('menu-click', event, item)
  if (isMobile.value) closeDrawer()
}

const handleMouseEnter = () => {
  if (!isMobile.value) isHovered.value = true
}
const handleMouseLeave = () => {
  if (!isMobile.value) isHovered.value = false
}

</script>

<template>
  <!-- MOBILE: toggle button -->
  <button
    v-if="isMobile"
    class="fixed top-4 left-4 z-[60] p-2 bg-[#223381] text-white rounded-md shadow-lg"
    @click="toggleDrawer"
    aria-label="Toggle menu"
  >
    <BaseIcon :path="mdiMenu" :size="20" />
  </button>

  <!-- MOBILE: overlay saat drawer terbuka -->
  <div
    v-if="isMobile && isDrawerOpen"
    class="fixed inset-0 bg-black/50 z-[59]"
    @click="closeDrawer"
  ></div>

  <!-- ASIDE -->
  <aside
    id="aside"
    class="fixed top-4 z-[70] transition-all duration-300"
    :class="[
      // MOBILE behavior:
      isMobile
        ? (isDrawerOpen ? 'translate-x-0 w-64 left-0' : '-translate-x-full w-64 left-0')
        // DESKTOP behavior:
        : ((isCollapsed && !isHovered)
            ? 'w-12 left-4'
            : 'w-60 left-4'),
    ]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    aria-hidden="false"
  >
    <div
      class="bg-surface text-white shadow-2xl rounded-2xl flex flex-col h-[calc(100vh-2rem)] border border-[#223381] overflow-hidden"
    >
      <!-- Header -->
      <div class="flex items-center justify-between h-14 px-4 border-b border-[#223381]">
        <div v-if="!isCollapsed || isHovered || isMobile && isDrawerOpen" class="flex items-center space-x-2 transition-all mt-2">
          <div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">K</div>
          <h1 class="font-normal text-lg leading-tight ml-2">
            Konten<span class="font-bold"> Otomatis</span> 
          </h1>
        </div>

        <!-- Collapse button: hanya berfungsi di desktop  -->
        <button
          v-if="!isMobile"
          class="rounded-md hover:bg-[#223381] transition-colors ml-auto"
          @click="toggleCollapse"
          :title="isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'"
        >
          <BaseIcon :path="isCollapsed ? mdiChevronRight : mdiChevronLeft" :size="20" class="text-white" />
        </button>
      </div>

      <!-- Menu utama: important -> gunakan collapsed hanya saat DESKTOP collapsed & NOT hovered -->
      <div class="flex-1 py-3 px-2 select-none">
        <AsideMenuList
          :menu="menu"
          :collapsed="(isMobile ? false : (isCollapsed && !isHovered))"
          @menu-click="menuClick"
        />
      </div>

      <!-- Pemisah -->
      <div class="mx-4 my-2"><div class="border-t border-2 rounded-lg border-[#FFD180]"></div></div>

      <!-- Menu bawah: tampilkan label saat expanded/hover/drawer open --> 
      <div class="p-3 space-y-1">
        <router-link
          to="/profile"
          class="flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200"
          :class="[
            (route.path === '/profile') ? 'bg-[#223381]/60 text-primary' : 'hover:bg-[#223381] hover:text-primary',
            (isMobile ? (isDrawerOpen ? '' : 'hidden') : (isCollapsed && !isHovered ? 'justify-center' : ''))
          ]"
          :title="(isMobile ? 'Profile' : (isCollapsed && !isHovered ? 'Profile' : ''))"
          @click.native="menuClick($event, { to: '/profile' })"
        >
          <BaseIcon :path="mdiAccountCircle" />
          <span v-if="(!isCollapsed && !isMobile) || (isHovered && !isMobile) || (isMobile && isDrawerOpen)">Profile</span>
        </router-link>

        <router-link
          to="/upgrade"
          class="flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200"
          :class="[
            (route.path === '/upgrade') ? 'bg-[#223381]/60 text-primary' : 'hover:bg-[#223381] hover:text-primary',
            (isMobile ? (isDrawerOpen ? '' : 'hidden') : (isCollapsed && !isHovered ? 'justify-center' : ''))
          ]"
          :title="(isMobile ? 'Upgrade Plan' : (isCollapsed && !isHovered ? 'Upgrade Plan' : ''))"
          @click.native="menuClick($event, { to: '/upgrade' })"
        >
          <BaseIcon :path="mdiStarCircle" />
          <span v-if="(!isCollapsed && !isMobile) || (isHovered && !isMobile) || (isMobile && isDrawerOpen)">Upgrade Plan</span>
        </router-link>
      </div>
    </div>
  </aside>
</template>
