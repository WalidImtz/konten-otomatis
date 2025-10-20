<script setup>
import { computed } from 'vue'
import { mdiClose } from '@mdi/js'

const props = defineProps({
  modelValue: String,
  placeholder: String,
  icon: String,
  type: {
    type: String,
    default: 'text',
  },
  clearable: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const hasValue = computed(() => props.modelValue && props.modelValue.length > 0)
</script>

<template>
  <div class="relative">
    <!-- ikon kiri -->
    <span
      v-if="icon"
      class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-400"
    >
      <svg
        v-if="icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-5 h-5"
      >
        <path :d="icon" />
      </svg>
    </span>

    <!-- input utama -->
    <input
      :type="type"
      class="w-full border border-gray-300 dark:border-slate-700 rounded-lg py-2.5 px-3 text-sm bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition pl-10 pr-8"
      :placeholder="placeholder"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />

    <!-- tombol clear -->
    <button
      v-if="clearable && hasValue"
      type="button"
      class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
      @click="emit('update:modelValue', '')"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
        <path :d="mdiClose" />
      </svg>
    </button>
  </div>
</template>
