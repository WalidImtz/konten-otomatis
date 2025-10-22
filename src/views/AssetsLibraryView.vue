<template>
  <LayoutAuthenticated>
    <SectionMain>
      <div class="space-y-8">
        <!-- ✅ Folder Section -->
        <FolderList />

        <!-- ✅ Gallery Section -->
        <ImageGallery />
      </div>
    </SectionMain>
  </LayoutAuthenticated>
</template>

<script setup>
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionMain from '@/components/SectionMain.vue'
import FolderList from '@/components/FolderList.vue'
import ImageGallery from '@/components/ImageGallery.vue'
</script>
