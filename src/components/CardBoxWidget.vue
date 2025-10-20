<script setup>
import { mdiCog } from '@mdi/js'
import CardBox from '@/components/CardBox.vue'
import NumberDynamic from '@/components/NumberDynamic.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import PillTagTrend from '@/components/PillTagTrend.vue'
import BaseButton from '@/components/BaseButton.vue'

defineProps({
  number: Number,
  icon: String,
  prefix: String,
  suffix: String,
  label: String,
  color: String,
  trend: String,
  trendType: String,
})
</script>

<template>
  <CardBox is-hoverable>
    <BaseLevel v-if="trend" class="mb-3" mobile>
      <PillTagTrend :trend="trend" :trend-type="trendType" small />
      <BaseButton :icon="mdiCog" icon-w="w-4" icon-h="h-4" color="contrast" small />
    </BaseLevel>
    <BaseLevel mobile>
      <div>
        <h3 class="text-lg leading-tight opacity-80">
          {{ label }}
        </h3>
        <h1 class="text-3xl leading-tight font-semibold text-[#F98613]">
          <NumberDynamic :value="number" :prefix="prefix" :suffix="suffix" />
        </h1>
      </div>
      <BaseIcon v-if="icon" :path="icon" size="48" class="text-white opacity-90" />
    </BaseLevel>
  </CardBox>
</template>
