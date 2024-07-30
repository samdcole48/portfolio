<template>
  <v-container class="fill-height">
    <div class="align-centerfill-height mx-auto">
      <two-even-containers class="py-16 my-16">
        <template #left>
          <title-text-and-links>
            <template #title>TAMU BLSA Alumni Tracker</template>
            <template #text
              >Developed an alumni tracker for the Texas A&M Black Law Student
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
            <v-carousel-item>
              <LiteYouTubeEmbed
                id="3WuS_1eirq0"
                title="CSCE431 BLSA Alumni Tracker Product Demo"
                aspectHeight="8.35"
              />
            </v-carousel-item>
          </v-carousel>
        </template>
      </two-even-containers>

      <two-even-containers class="py-16 my-16">
        <template #left>
          <title-text-and-links>
            <template #title>MESS Waffles P.O.S. System</template>
            <template #text>
              Developed a point of sales web app for MESS Waffles, a restraunt
              in College Station. Throughout this project I served as the Lead
              Backend Developer as well as the Database Architect. As a Backend
              Developer I learned how to write API calls using RESTFUL
              practices. As a Database Architect I learned how to manage an ever
              changing database. This project was built primarily using React,
              Express, and PostgreSQL.
            </template>
            <template #links>
              <a
                :style="{
                  color: 'var(--v-theme-primary)',
                  textDecoration: 'none',
                }"
                href="https://www.youtube.com/live/rpiew1YNxf4"
                target="_blank"
                ><v-icon>mdi-youtube</v-icon>Presentation Video</a
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
              <v-img src="@/assets/mess/MESS_SignIn.png" height="100%"></v-img>
            </v-carousel-item>
            <v-carousel-item>
              <v-img src="@/assets/mess/MESS_Cashier.png" height="90%"></v-img>
            </v-carousel-item>
            <v-carousel-item>
              <v-img
                src="@/assets/mess/MESS_CustomerKiosk.png"
                height="90%"
              ></v-img>
            </v-carousel-item>
            <v-carousel-item>
              <v-img src="@/assets/mess/MESS_Orders.png" height="90%"></v-img>
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
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";
</script>
