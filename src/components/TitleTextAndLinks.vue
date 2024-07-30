<template>
  <div style="font-size: 400%">
    <slot name="title"></slot>
  </div>
  <div style="font-size: 150%">
    <slot name="text"></slot>
  </div>
  <br />
  <div style="font-size: 150%">
    <!--make sur eto make all icons :style="{ color: 'var(--v-theme-primary)' }"-->
    <slot name="links"></slot>
  </div>
</template>
