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
      <!-- Title kiri atas -->
      <h1 class="text-2xl font-bold text-white mb-6">Ads Manager > Image Generator Configuration</h1>

      <CardBox
        class="relative p-6 shadow-lg border border-[#2F3756] bg-[#5E6FAC] rounded-2xl"
      >
        <!-- Tombol Edit di pojok kanan atas -->
        <BaseButton
          @click="isEditing = !isEditing"
          :label="isEditing ? 'Save' : 'Edit'"
          color="contrast"
          class="absolute top-4 right-4"
        />

        <!-- Grid dua kolom -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <!-- Kolom Kiri -->
          <div class="space-y-6">
            <!-- Main Background -->
            <div>
              <h3 class="text-white font-semibold">Main Background Size</h3>
              <p class="text-sm text-white/80 mb-2">
                Specify the maximum background image size in kilobytes (e.g., 500 KB). Keep it lightweight for faster loading.
              </p>
              <div class="flex items-center gap-2">
                <FormControl
                  v-model="form.mainBg"
                  :disabled="!isEditing"
                  placeholder="Enter size"
                  class="custom-input w-full"
                />
                <span class="text-sm font-medium text-white/90">KB</span>
              </div>
            </div>

            <!-- Title Length -->
            <div>
              <h3 class="text-white font-semibold">Title Length</h3>
              <p class="text-sm text-white/80 mb-2">
                Specify the maximum title length in characters.
              </p>
              <div class="flex items-center gap-2">
                <FormControl
                  v-model="form.titleLength"
                  :disabled="!isEditing"
                  placeholder="Enter length"
                  class="custom-input w-full"
                />
                <span class="text-sm font-medium text-white/90">characters</span>
              </div>
            </div>

            <!-- Subtitle -->
            <div>
              <h3 class="text-white font-semibold">Subtitle Length</h3>
              <p class="text-sm text-white/80 mb-2">
                Specify the maximum subtitle length in characters.
              </p>
              <div class="flex items-center gap-2">
                <FormControl
                  v-model="form.subtitle"
                  :disabled="!isEditing"
                  placeholder="Enter length"
                  class="custom-input w-full"
                />
                <span class="text-sm font-medium text-white/90">characters</span>
              </div>
            </div>
          </div>

          <!-- Kolom Kanan -->
          <div class="space-y-6">
            <!-- Description -->
            <div>
              <h3 class="text-white font-semibold">Description Length</h3>
              <p class="text-sm text-white/80 mb-8">
                Specify the maximum description length in characters.
              </p>
              <div class="flex items-center gap-2">
                <FormControl
                  v-model="form.description"
                  :disabled="!isEditing"
                  placeholder="Enter length"
                  class="custom-input w-full"
                />
                <span class="text-sm font-medium text-white/90">characters</span>
              </div>
            </div>

            <!-- Footer -->
            <div>
              <h3 class="text-white font-semibold">Footer Text Length</h3>
              <p class="text-sm text-white/80 mb-2">
                Specify the maximum footer text length in characters.
              </p>
              <div class="flex items-center gap-2">
                <FormControl
                  v-model="form.footer"
                  :disabled="!isEditing"
                  placeholder="Enter length"
                  class="custom-input w-full"
                />
                <span class="text-sm font-medium text-white/90">characters</span>
              </div>
            </div>

            <!-- Button -->
            <div>
              <h3 class="text-white font-semibold">Button Text Length</h3>
              <p class="text-sm text-white/80 mb-2">
                Specify the maximum button text length in characters.
              </p>
              <div class="flex items-center gap-2">
                <FormControl
                  v-model="form.buttonText"
                  :disabled="!isEditing"
                  placeholder="Enter length"
                  class="custom-input w-full"
                />
                <span class="text-sm font-medium text-white/90">characters</span>
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
