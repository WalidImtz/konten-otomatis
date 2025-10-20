<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { mdiAccount, mdiAsterisk } from '@mdi/js'

const router = useRouter()
const form = reactive({
  login: '',
  pass: '',
  remember: false,
})
const isLoading = ref(false)

const submit = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    router.push('/dashboard')
  }, 800)
}

const goToRegister = () => {
  router.push('/register')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-background text-text">
    <div class="flex flex-col lg:flex-row w-full max-w-5xl rounded-3xl overflow-hidden shadow-xl border border-white/10">

      <!-- KIRI: Gambar + Nama Aplikasi -->
      <div
        class="relative lg:w-1/2 w-full h-56 lg:h-auto bg-cover bg-center flex items-center justify-center"
        style="background-image: url('/images/login-illust.svg');"
      >
        <div class="absolute inset-0 bg-black/40"></div>
        <h1 class="relative text-3xl font-bold text-white tracking-wide">
          Konten Otomatis
        </h1>
      </div>

      <!-- KANAN: Form Login -->
      <div class="lg:w-1/2 w-full bg-surface/80 backdrop-blur-md p-10 flex flex-col justify-center">
        <h2 class="text-2xl font-semibold mb-6 text-center lg:text-left">Masuk ke Akun</h2>

        <form @submit.prevent="submit" class="space-y-5">
          <div>
            <label for="login" class="block text-sm font-medium mb-1">Username</label>
            <div class="relative">
              <svg class="w-5 h-5 absolute left-3 top-3 text-white/50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path :d="mdiAccount" />
              </svg>
              <input
                v-model="form.login"
                id="login"
                type="text"
                required
                autocomplete="username"
                class="w-full bg-background border border-white/20 rounded-xl py-2.5 pl-10 pr-3 focus:outline-none focus:border-primary text-sm placeholder-white/40"
                placeholder="Masukkan username"
              />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium mb-1">Kata sandi</label>
            <div class="relative">
              <svg class="w-5 h-5 absolute left-3 top-3 text-white/50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path :d="mdiAsterisk" />
              </svg>
              <input
                v-model="form.pass"
                id="password"
                type="password"
                required
                autocomplete="current-password"
                class="w-full bg-background border border-white/20 rounded-xl py-2.5 pl-10 pr-3 focus:outline-none focus:border-primary text-sm placeholder-white/40"
                placeholder="Masukkan kata sandi"
              />
            </div>
          </div>

          <div class="flex items-center justify-between text-sm mt-4">
            <label class="flex items-center space-x-2 cursor-pointer select-none">
              <input v-model="form.remember" type="checkbox" class="accent-primary rounded" />
              <span>Ingat saya</span>
            </label>
            <a href="#" class="text-primary hover:underline">Lupa sandi?</a>
          </div>

          <button
            type="submit"
            :disabled="isLoading"
            class="w-full mt-6 bg-primary hover:bg-[#ff9f40] transition-colors text-white font-semibold py-2.5 rounded-xl"
          >
            {{ isLoading ? 'Masuk...' : 'Masuk' }}
          </button>
        </form>

        <p class="text-center text-sm text-white/70 mt-6">
          Belum punya akun?
          <button @click="goToRegister" class="text-primary hover:underline font-medium">
            Daftar di sini
          </button>
        </p>
      </div>
    </div>
  </div>
</template>
