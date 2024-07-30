<template>
  <v-container class="fill-height">
    <div class="align-centerfill-height mx-auto">
      <two-even-containers>
        <template #left>project description</template>
        <template #right>project media</template>
      </two-even-containers>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import TwoEvenContainers from "@/components/TwoEvenContainers.vue";
</script>
