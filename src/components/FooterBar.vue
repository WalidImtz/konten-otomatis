<script setup>
import { containerMaxW } from '@/config.js'
import BaseLevel from '@/components/BaseLevel.vue'


const year = new Date().getFullYear()
</script>

<template>
  <footer class="py-2 px-6" :class="containerMaxW">
    <BaseLevel>
      <div class="text-center md:text-left">
        <b>&copy;{{ year }}, <a href="https://kontenotomatis-landingpage.vercel.app/" target="_blank">Konten Otomatis</a>.</b>
        <slot />
      </div>
      <div class="md:py-2">
        <a href="https://kontenotomatis-landingpage.vercel.app/">
          <img src="https://kontenotomatis.com/assets/icons/logo-4vm.svg" 
            alt="Four Vision Media Logo" 
            class="w-36 sm:w-44 max-w-xs h-auto">
        </a>
      </div>
    </BaseLevel>
  </footer>
</template>
