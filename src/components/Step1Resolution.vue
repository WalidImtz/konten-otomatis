<template>
  <div class="grid md:grid-cols-2 gap-6">
    <!-- Kartu Resolusi -->
    <CardBox id="step1-resolution" class="px-6">
      <h3 class="text-lg font-semibold text-white mb-1">Resolusi</h3>
      <p class="text-sm text-gray-300 mb-4">
        Pilih resolusi output yang diinginkan (misal: 1080x1080, 1920x1080).
      </p>
      <input
        v-model="resolution"
        type="text"
        placeholder="Masukkan resolusi"
        class="w-full p-2 rounded bg-[#5E6FAC] border border-[#2F3756] text-white focus:outline-none focus:ring-2 focus:ring-[#F98613]"
      />
    </CardBox>

    <!-- Kartu Layout -->
    <CardBox id="step1-layout" class="px-6">
      <h3 class="text-lg font-semibold text-white mb-1">Tata Letak</h3>
      <p class="text-sm text-gray-300 mb-4">
        Pilih gaya tata letak yang sesuai dengan komposisi konten Anda.
      </p>
      <select
        v-model="layout"
        class="w-full p-2 rounded bg-[#5E6FAC] border border-[#2F3756] text-white focus:outline-none focus:ring-2 focus:ring-[#F98613]"
      >
        <option value="">Pilih tata letak</option>
        <option value="square">Persegi</option>
        <option value="wide">Lebar</option>
        <option value="portrait">Potret</option>
      </select>
    </CardBox>

    <!-- Kartu untuk Judul, Subjudul, dll. -->
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
  { label: 'Judul', model: title, placeholder: 'Masukkan judul' },
  { label: 'Subjudul', model: subtitle, placeholder: 'Masukkan subjudul' },
  { label: 'Teks Tombol', model: buttonText, placeholder: 'Masukkan teks tombol' },
  { label: 'Teks Footer', model: footerText, placeholder: 'Masukkan teks footer' },
]
</script>
