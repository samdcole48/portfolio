<template>
  <v-container class="fill-height">
    <div class="mx-auto mb-8">
      <div style="font-size: 900%">
        Hello, I'm <br>
        <router-link :to="{name: '/about-me'}"><img height="150" src="@/assets/my-logo.png"></router-link>
      </div>
      <div style="font-size: 400%">An Aspiring Software Developer</div>
    </div>
  </v-container>
</template>

<script lang="ts" setup></script>
