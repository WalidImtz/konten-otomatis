<script setup>
import { ref, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { mdiChevronDown, mdiChevronUp } from '@mdi/js'
import BaseIcon from '@/components/BaseIcon.vue'
import AsideMenuList from '@/components/AsideMenuList.vue'

const props = defineProps({
  item: Object,
  isDropdownList: Boolean,
  collapsed: Boolean,
})
const emit = defineEmits(['menu-click'])
const route = useRoute()

const isActive = computed(() => {
  if (!props.item.to) return false
  return route.path === props.item.to || route.path.startsWith(props.item.to + '/')
})

const isDropdownActive = ref(false)
const hasDropdown = computed(() => !!props.item.menu)

const toggleDropdown = () => {
  if (hasDropdown.value) isDropdownActive.value = !isDropdownActive.value
}

const menuClick = (event) => {
  emit('menu-click', event, props.item)
  toggleDropdown()
}
</script>

<template>
  <li>
    <!-- Item utama -->
    <component
      :is="item.to ? RouterLink : 'div'"
      :to="item.to ?? null"
      class="flex items-center cursor-pointer rounded-lg px-3 py-2 transition-all duration-200"
      :class="[
        props.collapsed ? 'justify-center' : '',
        isActive
          ? 'bg-[#223381]/60 text-primary'
          : 'text-white hover:bg-[#223381] hover:text-primary',
      ]"
      @click="menuClick"
      :title="props.collapsed ? item.label : ''"
    >
      <!-- Icon -->
      <BaseIcon
        v-if="item.icon"
        :path="item.icon"
        class="flex-none transition-all duration-200"
        :class="[
          isActive
            ? 'text-primary bg-[#223381]/40 rounded-md p-1'
            : 'text-white',
        ]"
        w="w-6"
        :size="20"
      />

      <!-- Label -->
      <span
        v-if="!collapsed"
        class="grow text-ellipsis line-clamp-1 transition-all duration-200 ml-3"
        :class="[
          isActive
            ? 'text-primary font-semibold'
            : 'text-white hover:text-[#F98613]',
        ]"
      >
        {{ item.label }}
      </span>

      <!-- Dropdown Arrow -->
      <BaseIcon
        v-if="hasDropdown && !collapsed"
        :path="isDropdownActive ? mdiChevronUp : mdiChevronDown"
        class="ml-auto transition-transform duration-200"
        :class="isDropdownActive ? 'rotate-180 text-primary' : 'text-white'"
      />
    </component>

    <!-- Dropdown -->
    <transition name="fade">
      <!-- Dropdown List -->
      <AsideMenuList
        v-if="hasDropdown"
        :menu="item.menu"
        :collapsed="props.collapsed"
        is-dropdown-list
        class="overflow-hidden transition-all duration-300"
        :class="[
          isDropdownActive ? 'max-h-[500px]' : 'max-h-0',
          props.collapsed
            ? 'pl-0 border-l-0'
            : 'pl-6 border-l border-[#223381] bg-[#34458E]'
        ]"
      />
    </transition>
  </li>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
