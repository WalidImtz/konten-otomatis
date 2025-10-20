<script setup>
import { computed, useSlots } from 'vue'

defineProps({
  label: {
    type: String,
    default: null,
  },
  labelFor: {
    type: String,
    default: null,
  },
  help: {
    type: String,
    default: null,
  },
})

const slots = useSlots()

const wrapperClass = computed(() => {
  const base = []
  const slotsLength = slots.default()?.length || 0

  if (slotsLength > 1) {
    base.push('grid grid-cols-1 gap-3')
  }

  if (slotsLength === 2) {
    base.push('md:grid-cols-2')
  }

  return base
})
</script>

<template>
  <div class="mb-6 last:mb-0">
    <!-- Label -->
    <label
      v-if="label"
      :for="labelFor"
      class="block font-bold mb-2 text-white text-base"
    >
      {{ label }}
    </label>

    <!-- Help / Description -->
    <div
      v-if="help"
      class="text-sm text-gray-300 mb-2 leading-snug"
    >
      {{ help }}
    </div>

    <!-- Form Input -->
    <div :class="wrapperClass">
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* =========================================
   FORM FIELD GLOBAL STYLE OVERRIDE
   ========================================= */
:deep(input),
:deep(textarea),
:deep(select) {
  background-color: #5E6FAC !important;
  border: 1px solid #2F3756 !important;
  color: #ffffff !important;
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  width: 100%;
  transition: all 0.2s ease;
  font-size: 0.95rem;
}

/* Placeholder color */
:deep(input::placeholder),
:deep(textarea::placeholder),
:deep(select::placeholder) {
  color: rgba(255, 255, 255, 0.6);
}

/* Focus effect */
:deep(input:focus),
:deep(textarea:focus),
:deep(select:focus) {
  outline: none;
  border-color: #6f80c9 !important;
  box-shadow: 0 0 0 2px rgba(95, 110, 172, 0.3);
}

/* Disabled state */
:deep(input:disabled),
:deep(textarea:disabled),
:deep(select:disabled) {
  background-color: #4d5a86 !important;
  opacity: 0.7;
  cursor: not-allowed;
}

/* Dropdown option text */
:deep(select option) {
  color: #000; /* agar teks dropdown terbaca */
}
</style>
