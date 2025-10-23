<script setup>
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import BaseButton from '@/components/BaseButton.vue'
import {
  mdiImageMultiple,
  mdiFormatText,
  mdiUndo,
  mdiRedo,
  mdiRefresh,
  mdiUploadMultiple,
  mdiDownload,
} from '@mdi/js'
import { ref, onMounted } from 'vue'

const title = ref('Untitled Design')

// Zoom & Pan Canvas
const scale = ref(1)
const translate = ref({ x: 0, y: 0 })
let isPanning = false
let start = { x: 0, y: 0 }

onMounted(() => {
  const workspace = document.getElementById('workspace')

  workspace.addEventListener('wheel', (e) => {
    e.preventDefault()
    const delta = e.deltaY * -0.001
    scale.value = Math.min(Math.max(0.2, scale.value + delta), 3)
  })

  workspace.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return
    isPanning = true
    start = { x: e.clientX - translate.value.x, y: e.clientY - translate.value.y }
  })

  workspace.addEventListener('mousemove', (e) => {
    if (!isPanning) return
    translate.value = { x: e.clientX - start.x, y: e.clientY - start.y }
  })

  workspace.addEventListener('mouseup', () => (isPanning = false))
  workspace.addEventListener('mouseleave', () => (isPanning = false))
})
</script>

<template>
  <LayoutAuthenticated>
    <div class="relative h-screen bg-background text-white overflow-hidden">
      <!-- Workspace interaktif -->
      <div
        id="workspace"
        class="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
      >
        <div
          class="flex items-center justify-center w-full h-full transition-transform duration-75"
          :style="{
            transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
          }"
        >
          <div
            class="bg-white rounded-xl shadow-2xl border border-gray-300"
            style="width: 900px; height: 500px;"
          >
            <!-- Area Canvas -->
             <img
                src="/images/img1.png"
                class="w-full h-full object-cover"
                alt="asset"
              />
          </div>
        </div>
      </div>

      <!-- Toolbar kanan atas -->
      <aside
        class="fixed right-4 top-4 w-60 h-[60vh]
               bg-surface/95 backdrop-blur-xl border border-[#2F3756]
               shadow-2xl rounded-2xl p-5 flex flex-col justify-between z-50"
      >
        <div>
          <!-- Edit Title -->
          <div class="mb-5">
            <label class="block text-sm mb-1 opacity-80">Title</label>
            <input
              v-model="title"
              class="w-full rounded-lg px-3 py-2 bg-[#2F3C7E] border border-[#3D4B90] 
                     focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              placeholder="Masukkan judul gambar"
            />
          </div>

          <!-- Tools -->
          <div class="space-y-3">
            <div class="flex flex-wrap gap-2">
              <BaseButton icon="mdiImageMultiple" color="white" small outline label="Assets" />
              <BaseButton icon="mdiFormatText" color="white" small outline label="Text" />
            </div>

            <div class="flex flex-wrap gap-2">
              <BaseButton icon="mdiUndo" color="white" small outline label="Undo" />
              <BaseButton icon="mdiRedo" color="white" small outline label="Redo" />
              <BaseButton icon="mdiRefresh" color="white" small outline label="Reset" />
            </div>
          </div>
        </div>

        <!-- Tombol utama -->
        <div class="mt-6 flex flex-col gap-3">
          <BaseButton
            icon="mdiUploadMultiple"
            color="primary"
            label="Upload Bulk Content"
            class="w-full"
            @click="$router.push('/bulk-content')"
          />

          <BaseButton
            icon="mdiDownload"
            color="white"
            outline
            label="Download"
            class="w-full"
          />
        </div>
      </aside>
    </div>
  </LayoutAuthenticated>
</template>

<style scoped>
@media (max-width: 1024px) {
  aside {
    position: static !important;
    width: 100% !important;
    height: auto !important;
    border: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    margin: 0 !important;
    backdrop-filter: none !important;
  }
}
</style>
