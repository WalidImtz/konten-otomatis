<script setup>
import { ref } from 'vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import FormControl from '@/components/FormControl.vue'
import BaseButton from '@/components/BaseButton.vue'

const form = ref({
  mainBg: '',
  titleLength: '',
  subtitle: '',
  description: '',
  footer: '',
  buttonText: ''
})

const isEditing = ref(false)
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <!-- Title -->
      <h1 class="text-2xl font-bold text-white mb-6">Ads Manager > Image Generator Configuration</h1>

      <CardBox
        class="relative p-6 shadow-lg border border-[#2F3756] bg-[#5E6FAC] rounded-2xl"
      >
        <!-- Tombol Edit -->
        <BaseButton
          @click="isEditing = !isEditing"
          :label="isEditing ? 'Simpan' : 'Edit'"
          color="contrast"
          class="absolute top-4 right-4"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div class="space-y-6">
            <!-- Main Background -->
            <div>
              <h3 class="text-white font-semibold">Ukuran Background Utama</h3>
              <p class="text-sm text-white/80 mb-2">
                Tentukan ukuran maksimum gambar background dalam kilobyte (misal: 500 KB). Gunakan ukuran ringan agar loading lebih cepat.
              </p>
              <div class="flex items-center gap-2">
                <FormControl
                  v-model="form.mainBg"
                  :disabled="!isEditing"
                  placeholder="Masukkan ukuran"
                  class="custom-input w-full"
                />
                <span class="text-sm font-medium text-white/90">KB</span>
              </div>
            </div>

            <!-- Title Length -->
            <div>
              <h3 class="text-white font-semibold">Panjang Judul</h3>
              <p class="text-sm text-white/80 mb-2">
                Tentukan panjang maksimum judul dalam jumlah karakter.
              </p>
              <div class="flex items-center gap-2">
                <FormControl
                  v-model="form.titleLength"
                  :disabled="!isEditing"
                  placeholder="Masukkan panjang"
                  class="custom-input w-full"
                />
                <span class="text-sm font-medium text-white/90">karakter</span>
              </div>
            </div>

            <!-- Subtitle -->
            <div>
              <h3 class="text-white font-semibold">Panjang Subjudul</h3>
              <p class="text-sm text-white/80 mb-2">
                Tentukan panjang maksimum subjudul dalam jumlah karakter.
              </p>
              <div class="flex items-center gap-2">
                <FormControl
                  v-model="form.subtitle"
                  :disabled="!isEditing"
                  placeholder="Masukkan panjang"
                  class="custom-input w-full"
                />
                <span class="text-sm font-medium text-white/90">karakter</span>
              </div>
            </div>
          </div>

      
          <div class="space-y-6">
            <!-- Description -->
            <div>
              <h3 class="text-white font-semibold">Panjang Deskripsi</h3>
              <p class="text-sm text-white/80 mb-8">
                Tentukan panjang maksimum deskripsi dalam jumlah karakter.
              </p>
              <div class="flex items-center gap-2">
                <FormControl
                  v-model="form.description"
                  :disabled="!isEditing"
                  placeholder="Masukkan panjang"
                  class="custom-input w-full"
                />
                <span class="text-sm font-medium text-white/90">karakter</span>
              </div>
            </div>

            <!-- Footer -->
            <div>
              <h3 class="text-white font-semibold">Panjang Teks Footer</h3>
              <p class="text-sm text-white/80 mb-2">
                Tentukan panjang maksimum teks footer dalam jumlah karakter.
              </p>
              <div class="flex items-center gap-2">
                <FormControl
                  v-model="form.footer"
                  :disabled="!isEditing"
                  placeholder="Masukkan panjang"
                  class="custom-input w-full"
                />
                <span class="text-sm font-medium text-white/90">karakter</span>
              </div>
            </div>

            <!-- Button -->
            <div>
              <h3 class="text-white font-semibold">Panjang Teks Tombol</h3>
              <p class="text-sm text-white/80 mb-2">
                Tentukan panjang maksimum teks tombol dalam jumlah karakter.
              </p>
              <div class="flex items-center gap-2">
                <FormControl
                  v-model="form.buttonText"
                  :disabled="!isEditing"
                  placeholder="Masukkan panjang"
                  class="custom-input w-full"
                />
                <span class="text-sm font-medium text-white/90">karakter</span>
              </div>
            </div>
          </div>
        </div>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>


<style scoped>
.custom-input input,
.custom-input textarea,
.custom-input select {
  background-color: #5E6FAC !important;
  border: 1px solid #2F3756 !important;
  color: #ffffff !important;
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  width: 100%;
  transition: all 0.2s ease;
}

.custom-input input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.custom-input input:focus {
  outline: none;
  border-color: #6f80c9;
  box-shadow: 0 0 0 2px rgba(95, 110, 172, 0.3);
}
</style>
