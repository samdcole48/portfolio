<template>
  <v-container class="fill-height">
    <div class="mx-auto my-16 py-16">
      <two-even-columns>
        <template #left
          ><img height="100" src="@/assets/my-logo.png" />
          <div style="font-size: 150%; max-width: 600px">
            I am a computer science student at Texas A&M University. I am
            actively involved in both the Roundnet and Pickleball Clubs and
            enjoy competing in tournaments. In my free time, I like to unwind by
            watching sports, playing video games, and joking around with
            friends. My favorite form of vacation is visiting and hiking through
            national parks.
          </div>
          <br />
          <div style="font-size: 150%">
            <!--look into mailto, removed because it was not working-->
            <a :style="{ color: 'var(--v-theme-primary)' }"
              ><v-icon>mdi-gmail</v-icon>samdcole48@gmail.com</a
            >
            <br />
            <a
              href="https://www.linkedin.com/in/samdcole48/"
              target="_blank"
              :style="{ color: 'var(--v-theme-primary)' }"
              ><v-icon>mdi-linkedin</v-icon></a
            >
            <a
              href="https://github.com/samdcole48"
              target="_blank"
              :style="{ color: 'var(--v-theme-primary)' }"
              ><v-icon>mdi-github</v-icon></a
            >
            <a
              href="Cole_Sam.pdf"
              target="_blank"
              :style="{
                color: 'var(--v-theme-primary)',
                textDecoration: 'none',
              }"
              ><v-icon>mdi-file</v-icon>Resume</a
            >
          </div>
        </template>
        <template #right>
          <img
            style="display: block; margin-left: auto; margin-right: auto"
            height="500"
            src="@/assets/headshot-no-bg.png"
          />
        </template>
      </two-even-columns>
    </div>

    <two-even-columns class="py-16 my-16">
      <template #left>
        <title-text-and-links>
          <template #title>Texas A&M</template>
          <template #text>
            Throughout my time at Texas A&M, I have maintained a 4.0 major GPA
            and a 3.95+ general GPA. I was born and raised an Aggie and have
            loved being a student here. I am an avid Aggie Sports fan, but
            football will always be my favorite. I am a member of the Aggie
            Coding Club, Roundnet Club, and Pickleball Club. Since my Junior Year,
            I have had the opportunity to serve as the Roundnet Club President.
          </template>
          <template #links>
            <a
              :style="{
                color: 'var(--v-theme-primary)',
                textDecoration: 'none',
              }"
              href="https://www.usaroundnet.org/what-is-roundnet#:~:text=Roundnet%20is%20typically%20played%20with,ball%20back%20onto%20the%20net."
              target="_blank"
              ><v-icon>mdi-web</v-icon>What is Roundnet?</a
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
            <v-img src="@/assets/tamu/TAMU_Logo.png" height="100%"></v-img>
          </v-carousel-item>
          <v-carousel-item>
            <v-img src="@/assets/tamu/TAMU_Ring.jpg" height="100%"></v-img>
          </v-carousel-item>
          <v-carousel-item>
            <v-img src="@/assets/tamu/TAMU_Football.jpg" height="100%"></v-img>
          </v-carousel-item>
          <v-carousel-item>
            <v-img src="@/assets/tamu/TAMU_Roundnet.jpg" height="100%"></v-img>
          </v-carousel-item>
        </v-carousel>
      </template>
    </two-even-columns>

    <two-even-columns class="py-16 my-16">
      <template #left>
        <v-carousel
          show-arrows="hover"
          delimiter-icon="mdi-square"
          hide-delimiter-background
        >
          <v-carousel-item>
            <v-img
              src="@/assets/hiking/Hiking_YosemiteYosemiteFallsFar.jpg"
              height="100%"
            ></v-img>
          </v-carousel-item>
          <v-carousel-item>
            <v-img
              src="@/assets/hiking/Hiking_YosemiteYosemiteFallsClose.jpg"
              height="100%"
            ></v-img>
          </v-carousel-item>
          <v-carousel-item>
            <v-img
              src="@/assets/hiking/Hiking_YosemiteHalfDome.jpg"
              height="100%"
            ></v-img>
          </v-carousel-item>
          <v-carousel-item>
            <v-img
              src="@/assets/hiking/Hiking_YosemiteMistTrail.jpg"
              height="100%"
            ></v-img>
          </v-carousel-item>
          <v-carousel-item>
            <v-img
              src="@/assets/hiking/Hiking_LakeTahoe.jpg"
              height="100%"
            ></v-img>
          </v-carousel-item>
          <v-carousel-item>
            <v-img
              src="@/assets/hiking/Hiking_LakeTahoeSmallLake.jpg"
              height="100%"
            ></v-img>
          </v-carousel-item>
          <v-carousel-item>
            <v-img
              src="@/assets/hiking/Hiking_SequoiaTree.jpg"
              height="100%"
            ></v-img>
          </v-carousel-item>
          <v-carousel-item>
            <v-img
              src="@/assets/hiking/Hiking_MuirWoodsBridge.jpg"
              height="100%"
            ></v-img>
          </v-carousel-item>
        </v-carousel>
      </template>
      <template #right>
        <title-text-and-links>
          <template #title>Hiking</template>
          <template #text>
            Hiking is one of my favorite things to do, I have gone on many
            hiking trips and have many more planned for the future! During the
            summer of 2023, while living in San Jose CA, I was within driving
            distance of many national and state parks. I took full advantage of
            this and visited a different one every other weekend! The most
            notable include Yosemite, Lake Tahoe, Sequoia, and Muir Woods.
          </template>
        </title-text-and-links>
      </template>
    </two-even-columns>
  </v-container>
</template>

<script lang="ts" setup></script>
