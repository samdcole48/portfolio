<template>
  <v-container class="fill-height">
    <div class="align-centerfill-height mx-auto">
      <v-timeline direction="vertical" side="end">
        <v-timeline-item>
          <template v-slot:opposite> Opposite content </template>
          <div>
            <div class="text-h6">Content title</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </v-timeline-item>

        <v-timeline-item>
          <template v-slot:opposite> Opposite content </template>
          <div>
            <div class="text-h6">Content title</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </v-timeline-item>

        <v-timeline-item>
          <template v-slot:opposite> Opposite content </template>
          <div>
            <div class="text-h6">Content title</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
  </v-container>
</template>

<script lang="ts" setup></script>
