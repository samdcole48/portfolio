<template>
  <v-container class="fill-height">
    <div class="align-centerfill-height mx-auto">
      <two-even-columns class="py-16 my-16">
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
            show-arrows="hover"
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
                :aspectHeight="8.35"
              />
            </v-carousel-item>
          </v-carousel>
        </template>
      </two-even-columns>

      <two-even-columns class="py-16 my-16">
        <template #left>
          <title-text-and-links>
            <template #title>MESS Waffles POS System</template>
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
            show-arrows="hover"
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
      </two-even-columns>

      <two-even-columns class="py-16 my-16">
        <template #left>
          <title-text-and-links>
            <template #title>64-bit x86 CPU</template>
            <template #text>
              Designed a fully functional 64-bit intel like x86 CPU from basic
              logic gates in Logism. This was the final project for my computer
              organization course, CSCE 312
            </template>
            <template #links>
              <a
                :style="{
                  color: 'var(--v-theme-primary)',
                  textDecoration: 'none',
                }"
                href="https://github.com/samdcole48/csce312-64-bit_x86_CPU"
                target="_blank"
                ><v-icon>mdi-github</v-icon>Git Repository</a
              >
            </template>
          </title-text-and-links>
        </template>
        <template #right>
          <v-carousel
            show-arrows="hover"
            delimiter-icon="mdi-square"
            hide-delimiter-background
          >
            <v-carousel-item>
              <div
                class="d-flex justify-center align-center"
                style="font-size: 150%"
              >
                CPU
              </div>
              <v-img src="@/assets/csce312/312_Main.png"></v-img>
            </v-carousel-item>
            <v-carousel-item>
              <div
                class="d-flex justify-center align-center"
                style="font-size: 150%"
              >
                Fetch
              </div>
              <v-img src="@/assets/csce312/312_Fetch.png" height="90%"></v-img>
            </v-carousel-item>
            <v-carousel-item>
              <div
                class="d-flex justify-center align-center"
                style="font-size: 150%"
              >
                Decode
              </div>
              <v-img src="@/assets/csce312/312_Decode.png" height="90%"></v-img>
            </v-carousel-item>
            <v-carousel-item>
              <div
                class="d-flex justify-center align-center"
                style="font-size: 150%"
              >
                Execute
              </div>
              <v-img
                src="@/assets/csce312/312_Execute.png"
                height="90%"
              ></v-img>
            </v-carousel-item>
            <v-carousel-item>
              <div
                class="d-flex justify-center align-center"
                style="font-size: 150%"
              >
                Memory
              </div>
              <v-img src="@/assets/csce312/312_Memory.png" height="90%"></v-img>
            </v-carousel-item>
            <v-carousel-item>
              <div
                class="d-flex justify-center align-center"
                style="font-size: 150%"
              >
                PC Update
              </div>
              <v-img
                src="@/assets/csce312/312_PCupdate.png"
                height="90%"
              ></v-img>
            </v-carousel-item>
          </v-carousel>
        </template>
      </two-even-columns>

      <two-even-columns class="py-16 my-16">
        <template #left>
          <title-text-and-links>
            <template #title>Space Traveler</template>
            <template #text>
              HowdyHack 2022 project where my team and I created a game within
              24 hours. The game is about an alien traveling through space
              dodging obstacles. We even created our very own soundtrack! This
              project was built using Python and the Pygame library.
            </template>
            <template #links>
              <a
                :style="{
                  color: 'var(--v-theme-primary)',
                  textDecoration: 'none',
                }"
                href="https://www.youtube.com/watch?v=S8zKgtNReRs&t"
                target="_blank"
                ><v-icon>mdi-youtube</v-icon>Demo Video</a
              >
              <br />
              <a
                :style="{
                  color: 'var(--v-theme-primary)',
                  textDecoration: 'none',
                }"
                href="https://github.com/spencertlogan/HH22SpaceTravelers"
                target="_blank"
                ><v-icon>mdi-github</v-icon>Git Repository</a
              >
            </template>
          </title-text-and-links>
        </template>
        <template #right>
          <v-carousel
            show-arrows="hover"
            delimiter-icon="mdi-square"
            hide-delimiter-background
          >
            <v-carousel-item>
              <v-img
                src="@/assets/space_travelers/SpaceTravelers_Game.png"
                height="90%"
              ></v-img>
            </v-carousel-item>
            <v-carousel-item>
              <v-img
                src="@/assets/space_travelers/SpaceTravelers_Menu.png"
                height="90%"
              ></v-img>
            </v-carousel-item>
            <v-carousel-item>
              <LiteYouTubeEmbed
                id="S8zKgtNReRs"
                title="Space Travelers Demo"
                :aspectHeight="8.35"
              />
            </v-carousel-item>
          </v-carousel>
        </template>
      </two-even-columns>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import TwoEvenColumns from "@/components/TwoEvenColumns.vue";
import TitleTextAndLinks from "@/components/TitleTextAndLinks.vue";
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";
</script>
