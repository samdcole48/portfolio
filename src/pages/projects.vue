<template>
  <v-container class="fill-height">
    <div class="align-centerfill-height mx-auto">
      <two-even-containers>
        <template #left></template>
        <template #right></template>
      </two-even-containers>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import TwoEvenContainers from "@/components/TwoEvenContainers.vue";
</script>
