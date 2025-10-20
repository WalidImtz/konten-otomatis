<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { mdiAccount, mdiAsterisk, mdiEmail } from '@mdi/js'

const router = useRouter()
const isLoading = ref(false)

const form = reactive({
  username: '',
  email: '',
  password: '',
  confirm: '',
})

const submit = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    router.push('/login')
  }, 800)
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

      <!-- KANAN: Form Register -->
      <div class="lg:w-1/2 w-full bg-surface/80 backdrop-blur-md p-10 flex flex-col justify-center">
        <h2 class="text-2xl font-semibold mb-6 text-center lg:text-left">Buat Akun Baru</h2>

        <form @submit.prevent="submit" class="space-y-5">
          <div>
            <label class="block text-sm font-medium mb-1">Username</label>
            <input
              v-model="form.username"
              type="text"
              required
              class="w-full bg-background border border-white/20 rounded-xl py-2.5 px-3 focus:outline-none focus:border-primary text-sm placeholder-white/40"
              placeholder="Masukkan username"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Email</label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full bg-background border border-white/20 rounded-xl py-2.5 px-3 focus:outline-none focus:border-primary text-sm placeholder-white/40"
              placeholder="Masukkan email"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Kata sandi</label>
            <input
              v-model="form.password"
              type="password"
              required
              class="w-full bg-background border border-white/20 rounded-xl py-2.5 px-3 focus:outline-none focus:border-primary text-sm placeholder-white/40"
              placeholder="Masukkan kata sandi"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Konfirmasi kata sandi</label>
            <input
              v-model="form.confirm"
              type="password"
              required
              class="w-full bg-background border border-white/20 rounded-xl py-2.5 px-3 focus:outline-none focus:border-primary text-sm placeholder-white/40"
              placeholder="Ulangi kata sandi"
            />
          </div>

          <button
            type="submit"
            :disabled="isLoading"
            class="w-full mt-6 bg-primary hover:bg-[#ff9f40] transition-colors text-white font-semibold py-2.5 rounded-xl"
          >
            {{ isLoading ? 'Mendaftar...' : 'Daftar' }}
          </button>
        </form>

        <p class="text-center text-sm text-white/70 mt-6">
          Sudah punya akun?
          <button @click="router.push('/login')" class="text-primary hover:underline font-medium">
            Masuk di sini
          </button>
        </p>
      </div>
    </div>
  </div>
</template>
