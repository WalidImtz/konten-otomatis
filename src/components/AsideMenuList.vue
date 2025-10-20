<script setup>
import AsideMenuItem from '@/components/AsideMenuItem.vue'

const props = defineProps({
  isDropdownList: Boolean,
  menu: { type: Array, required: true },
  collapsed: { type: Boolean, default: false },
})

const emit = defineEmits(['menu-click'])
const menuClick = (event, item) => emit('menu-click', event, item)
</script>

<template>
  <ul
    :class="[
      'transition-all duration-300',
      isDropdownList ? 'pl-2' : 'pl-0',
      collapsed ? 'space-y-2' : 'space-y-1',
    ]"
  >
    <AsideMenuItem
      v-for="(item, index) in menu"
      :key="index"
      :item="item"
      :is-dropdown-list="isDropdownList"
      :collapsed="collapsed"
      @menu-click="menuClick"
    />
  </ul>
</template>
