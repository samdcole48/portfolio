<template>
  <v-container class="fill-height">
    <div class="align-centerfill-height mx-auto">
      <two-even-containers class="py-16 my-16">
        <template #left>
          <title-text-and-links>
            <template #title>TAMU BLSA Alumni Tracker</template>
            <template #text
              >Developer an alumni tracker for the Texas A&M Black Law Student
              Association. Throughout this project I served as the Product Owner
              and Lead Developer. As Product Owner I gained valuable skills in
              communicating with an actual customer, one of which was the
              ability to understand our customer's needs and translate them into
              tangible user stories. As Lead Developer I took charge of the user
              entity as well as the user interface. This project was built
              primarily using Ruby On Rails and Tailwind.
            </template>
            <template #links>
              <a
                :style="{
                  color: 'var(--v-theme-primary)',
                  textDecoration: 'none',
                }"
                href="https://youtu.be/3WuS_1eirq0"
                target="_blank"
                ><v-icon>mdi-youtube</v-icon>Demo Video</a
              >
              <br />
              <a
                :style="{
                  color: 'var(--v-theme-primary)',
                  textDecoration: 'none',
                }"
                href="https://www.linkedin.com/feed/update/urn:li:activity:7183885303575707650/"
                target="_blank"
                ><v-icon>mdi-linkedin</v-icon>LinkedIn Post</a
              >
            </template>
          </title-text-and-links>
        </template>
        <template #right>
          <v-carousel
            :show-arrows="false"
            delimiter-icon="mdi-square"
            hide-delimiter-background
          >
            <v-carousel-item>
              <v-img
                src="@/assets/tamu_blsa/TAMU_BLSA_SignIn.png"
                height="100%"
              ></v-img>
            </v-carousel-item>
            <v-carousel-item>
              <v-img
                src="@/assets/tamu_blsa/TAMU_BLSA_Search.png"
                height="100%"
              ></v-img>
            </v-carousel-item>
            <v-carousel-item>
              <v-img
                src="@/assets/tamu_blsa/TAMU_BLSA_Profile.png"
                height="100%"
              ></v-img>
            </v-carousel-item>
          </v-carousel>
        </template>
      </two-even-containers>

      <two-even-containers class="py-16 my-16">
        <template #left>
          <title-text-and-links>
            <template #title>TAMU BLSA Alumni Tracker</template>
            <template #text
              >Developer an alumni tracker for the Texas A&M Black Law Student
              Association. Throughout this project I served as the Product Owner
              and Lead Developer. As Product Owner I gained valuable skills in
              communicating with an actual customer, on eof which was the
              ability to understand our customer's needs and translate them into
              tangible user stories. As Lead Developer I took charge of the user
              entity as well as the user interface. This project was built
              primarily using Ruby On Rails and Tailwind.
            </template>
            <template #links>
              <a
                :style="{
                  color: 'var(--v-theme-primary)',
                  textDecoration: 'none',
                }"
                href="https://youtu.be/3WuS_1eirq0"
                target="_blank"
                ><v-icon>mdi-youtube</v-icon>Demo Video</a
              >
              <br />
              <a
                :style="{
                  color: 'var(--v-theme-primary)',
                  textDecoration: 'none',
                }"
                href="https://www.linkedin.com/feed/update/urn:li:activity:7183885303575707650/"
                target="_blank"
                ><v-icon>mdi-linkedin</v-icon>LinkedIn Post</a
              >
            </template>
          </title-text-and-links>
        </template>
        <template #right>
          <v-carousel
            :show-arrows="false"
            delimiter-icon="mdi-square"
            hide-delimiter-background
          >
            <v-carousel-item>
              <v-img
                src="@/assets/tamu_blsa/TAMU_BLSA_SignIn.png"
                height="100%"
              ></v-img>
            </v-carousel-item>
            <v-carousel-item>
              <v-img
                src="@/assets/tamu_blsa/TAMU_BLSA_Search.png"
                height="100%"
              ></v-img>
            </v-carousel-item>
            <v-carousel-item>
              <v-img
                src="@/assets/tamu_blsa/TAMU_BLSA_Profile.png"
                height="100%"
              ></v-img>
            </v-carousel-item>
          </v-carousel>
        </template>
      </two-even-containers>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import TwoEvenContainers from "@/components/TwoEvenContainers.vue";
import TitleTextAndLinks from "@/components/TitleTextAndLinks.vue";
</script>
