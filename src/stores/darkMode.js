import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDarkModeStore = defineStore('darkMode', () => {
  const isEnabled = ref(false)

  function set() {
    // Nonaktifkan fungsi dark mode sepenuhnya
    isEnabled.value = false
  }

  return {
    isEnabled,
    set,
  }
})
