<template>
  <v-container class="fill-height">
    <div class="align-centerfill-height mx-auto">
      <v-row>
        <v-col>
          <img height="100" src="@/assets/my-logo.png" />
          <div style="font-size: 150%; max-width: 600px">
            I am a computer science student at Texas A&M University. I am
            actively involved in both the Roundnet and Pickleball Clubs and
            enjoy competing in tournaments. In my free time I like to unwind by
            watching sports, playing video games, and joking around with
            friends. My favorite form of vacation is visiting and hiking through
            national parks.
          </div>
          <br />
          <div style="font-size: 150%">
            <!--on click open up an email page-->
            <a
              href="mailto:samdcole48@gmail.com" target="blank"
              :style="{ color: 'var(--v-theme-primary)' }"
              ><v-icon>mdi-gmail</v-icon>samdcole48@gmail.com</a
            >
          </div>
          <div style="font-size: 150%">
            <a
              href="https://www.linkedin.com/in/samdcole48/"
              target="blank"
              :style="{ color: 'var(--v-theme-primary)' }"
              ><v-icon>mdi-linkedin</v-icon></a
            >
            <a
              href="https://github.com/samdcole48"
              target="blank"
              :style="{ color: 'var(--v-theme-primary)' }"
              ><v-icon>mdi-github</v-icon></a
            >
          </div>
        </v-col>
        <v-col>
          <img height="500" src="@/assets/headshot-no-bg.png" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts" setup>

</script>
