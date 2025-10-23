<template>
  <div class="grid md:grid-cols-2 gap-6">
    <!-- Card Resolution -->
    <CardBox id="step1-resolution" class="px-6">
      <h3 class="text-lg font-semibold text-white mb-1">Resolution</h3>
      <p class="text-sm text-gray-300 mb-4">
        Choose the desired output resolution (e.g., 1080x1080, 1920x1080).
      </p>
      <input
        v-model="resolution"
        type="text"
        placeholder="Enter resolution"
        class="w-full p-2 rounded bg-[#5E6FAC] border border-[#2F3756] text-white focus:outline-none focus:ring-2 focus:ring-[#F98613]"
      />
    </CardBox>

    <!-- Card Layout -->
    <CardBox id="step1-layout" class="px-6">
      <h3 class="text-lg font-semibold text-white mb-1">Layout</h3>
      <p class="text-sm text-gray-300 mb-4">
        Select a layout style that fits your content composition.
      </p>
      <select
        v-model="layout"
        class="w-full p-2 rounded bg-[#5E6FAC] border border-[#2F3756] text-white focus:outline-none focus:ring-2 focus:ring-[#F98613]"
      >
        <option value="">Select layout</option>
        <option value="square">Square</option>
        <option value="wide">Wide</option>
        <option value="portrait">Portrait</option>
      </select>
    </CardBox>

    <!-- Card for Title, Subtitle, etc. -->
    <CardBox class="px-6 md:col-span-2">
      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="(field, index) in fields" :key="index">
          <h3 class="text-lg font-semibold text-white mb-1">{{ field.label }}</h3>
          <input
            v-model="field.model"
            type="text"
            :placeholder="field.placeholder"
            class="w-full p-2 rounded bg-[#5E6FAC] border border-[#2F3756] text-white focus:outline-none focus:ring-2 focus:ring-[#F98613]"
          />
        </div>
      </div>
    </CardBox>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CardBox from '@/components/CardBox.vue'

const resolution = ref('')
const layout = ref('')
const title = ref('')
const subtitle = ref('')
const buttonText = ref('')
const footerText = ref('')

const fields = [
  { label: 'Title', model: title, placeholder: 'Enter title' },
  { label: 'Subtitle', model: subtitle, placeholder: 'Enter subtitle' },
  { label: 'Button Text', model: buttonText, placeholder: 'Enter button text' },
  { label: 'Footer Text', model: footerText, placeholder: 'Enter footer text' },
]
</script>
