<template>
  <v-container class="fill-height">
    <div class="mx-auto">
      <v-timeline direction="vertical" side="end">
        <v-timeline-item icon="mdi-school" icon-color="black" fill-dot>
          <template v-slot:opposite>
            <div style="font-size: 150%">May 2025</div>
          </template>
          <div class="py-16">
            <title-subtitle-text-and-links>
              <template #title>College Graduation</template>
              <template #subtitle>
                @ Texas A&M University, College Station TX
              </template>
              <template #text>
                I am expected to graduate in May of 2025 with a Bachelors of
                Science in Computer Science.
              </template>
            </title-subtitle-text-and-links>
          </div>
        </v-timeline-item>

        <v-timeline-item icon="mdi-briefcase" icon-color="black" fill-dot>
          <template v-slot:opposite>
            <div style="font-size: 150%">
              May 2024 - <br />
              July 2024
            </div>
          </template>
          <div class="py-16">
            <two-even-rows>
              <template #top>
                <title-subtitle-text-and-links>
                  <template #title>Software Developement Intern</template>
                  <template #subtitle>
                    @ Labatt Food Service, San Antonio TX
                  </template>
                  <template #text>
                    Served as a Full Stack Developer creating new tools to
                    overhaul the existing short-dated receiving process with
                    automation and streamlining. These include a short-dated
                    task dashboard for buyers to quickly make informed decisions
                    regarding their product and a tool for analysts to review
                    detailed receiving simulation results. I Created the
                    frontends with Vue.js and Typescript and the backends with
                    C#, .NET, and SQL.
                  </template>
                  <template #links>
                    <a
                      :style="{
                        color: 'var(--v-theme-primary)',
                        textDecoration: 'none',
                      }"
                      href="https://www.linkedin.com/feed/update/urn:li:activity:7222320405535977472/"
                      target="_blank"
                      ><v-icon>mdi-linkedin</v-icon>LinkedIn Post</a
                    >
                  </template>
                </title-subtitle-text-and-links>
              </template>
              <template #bottom>
                <div style="max-width: 80%" class="mx-auto">
                  <v-carousel
                    show-arrows="hover"
                    delimiter-icon="mdi-square"
                    hide-delimiter-background
                  >
                    <v-carousel-item>
                      <v-img
                        src="@/assets/labatt/Labatt_NewProcess.png"
                        height="100%"
                      ></v-img>
                    </v-carousel-item>
                    <v-carousel-item>
                      <v-img
                        src="@/assets/labatt/Labatt_CurrentProcess.png"
                        height="100%"
                      ></v-img>
                    </v-carousel-item>
                    <v-carousel-item>
                      <v-img
                        src="@/assets/labatt/Labatt_TaskDashboard.png"
                        height="100%"
                      ></v-img>
                    </v-carousel-item>
                    <v-carousel-item>
                      <v-img
                        src="@/assets/labatt/Labatt_TaskDetails.png"
                        height="100%"
                      ></v-img>
                    </v-carousel-item>
                    <v-carousel-item>
                      <v-img
                        src="@/assets/labatt/Labatt_PurchaseOrderDetails.png"
                        height="100%"
                      ></v-img>
                    </v-carousel-item>
                    <v-carousel-item>
                      <v-img
                        src="@/assets/labatt/Labatt_PalletDetails.png"
                        height="100%"
                      ></v-img>
                    </v-carousel-item>
                  </v-carousel>
                </div>
              </template>
            </two-even-rows>
          </div>
        </v-timeline-item>

        <v-timeline-item
          class="py-16 my-16"
          icon="mdi-briefcase"
          icon-color="black"
          fill-dot
        >
          <template v-slot:opposite>
            <div style="font-size: 150%">
              May 2023 - <br />
              August 2023
            </div>
          </template>
          <div class="py-16">
            <two-even-rows>
              <template #top>
                <title-subtitle-text-and-links>
                  <template #title>Firmware Engineering Intern</template>
                  <template #subtitle> @ Analog Devices, San Jose CA </template>
                  <template #text>
                    Served as a Software Developer focused on enhancing our
                    team's workflow through automated firmware testing. The
                    final product is a system that performs static and
                    compilation checks on the source code, compiles the
                    firmware, executes comprehensive simulations, and runs
                    scripts on a physical FPGA board. This entire process is
                    seamlessly triggered with every pull request and the results
                    are reported in the comment section of that pull request,
                    streamlining our development cycle. I created this process
                    using Jenkins, Python, and Groovy.
                  </template>
                  <template #links>
                    <a
                      :style="{
                        color: 'var(--v-theme-primary)',
                        textDecoration: 'none',
                      }"
                      href="https://www.youtube.com/watch?v=y6ZddWSTpBc"
                      target="_blank"
                      ><v-icon>mdi-youtube</v-icon>Demo Video</a
                    >
                    <br />
                    <a
                      :style="{
                        color: 'var(--v-theme-primary)',
                        textDecoration: 'none',
                      }"
                      href="https://www.linkedin.com/feed/update/urn:li:activity:7095822935445147648/"
                      target="_blank"
                      ><v-icon>mdi-linkedin</v-icon>LinkedIn Post</a
                    >
                  </template>
                </title-subtitle-text-and-links>
              </template>
              <template #bottom>
                <div style="max-width: 80%" class="mx-auto">
                  <v-carousel
                    show-arrows="hover"
                    delimiter-icon="mdi-square"
                    hide-delimiter-background
                  >
                    <v-carousel-item>
                      <v-img
                        src="@/assets/adi/Adi_Diagram.png"
                        height="100%"
                      ></v-img>
                    </v-carousel-item>
                    <v-carousel-item>
                      <LiteYouTubeEmbed
                        id="y6ZddWSTpBc"
                        title="ADI Intern Project Demo"
                        :aspectHeight="8.35"
                      />
                    </v-carousel-item>
                  </v-carousel>
                </div>
              </template>
            </two-even-rows>
          </div>
        </v-timeline-item>

        <v-timeline-item icon="mdi-briefcase" icon-color="black" fill-dot>
          <template v-slot:opposite>
            <div style="font-size: 150%">
              December 2022 - <br />
              January 2023
            </div>
          </template>
          <div class="py-16">
            <title-subtitle-text-and-links>
              <template #title>Deployment Tech</template>
              <template #subtitle>
                @ GTS Technology Solutions, Georgetown TX
              </template>
              <template #text>
                Served as Deployment Technician Installing over 500 document
                cameras in live Georgetown ISD classrooms.
              </template>
            </title-subtitle-text-and-links>
          </div>
        </v-timeline-item>

        <v-timeline-item icon="mdi-hand-extended" icon-color="black" fill-dot>
          <template v-slot:opposite>
            <div style="font-size: 150%">
              December 2021 - <br />
              July 2022
            </div>
          </template>
          <div class="py-16">
            <title-subtitle-text-and-links>
              <template #title>Logistics Volunteer</template>
              <template #subtitle>
                @ Northpoint Church, Cedar Park TX
              </template>
              <template #text>
                Served as the head of logistics for Camp75. Organized and
                executed multiple large-scale events involving over 600 students
                and volunteers. Mentored a group of 10 high school students and
                a group of 20 7th-grade boys.
              </template>
              <template #links>
                <a
                  :style="{
                    color: 'var(--v-theme-primary)',
                    textDecoration: 'none',
                  }"
                  href="https://www.camp75.org/"
                  target="_blank"
                  ><v-icon>mdi-web</v-icon>Camp75 Website</a
                >
              </template>
            </title-subtitle-text-and-links>
          </div>
        </v-timeline-item>

        <v-timeline-item icon="mdi-school" icon-color="black" fill-dot>
          <template v-slot:opposite>
            <div style="font-size: 150%">May 2021</div>
          </template>
          <div class="py-16">
            <title-subtitle-text-and-links>
              <template #title>High School Graduation</template>
              <template #subtitle> @ Rouse High School, Leander TX </template>
            </title-subtitle-text-and-links>
          </div>
        </v-timeline-item>

        <v-timeline-item icon="mdi-food" icon-color="black" fill-dot>
          <template v-slot:opposite>
            <div style="font-size: 150%">
              January 2021 - <br />
              May 2021
            </div>
          </template>
          <div class="py-16">
            <title-subtitle-text-and-links>
              <template #title>Team Member</template>
              <template #subtitle> @ Chick-fil-a, Cedar Park TX </template>
            </title-subtitle-text-and-links>
          </div>
        </v-timeline-item>

        <v-timeline-item icon="mdi-food" icon-color="black" fill-dot>
          <template v-slot:opposite>
            <div style="font-size: 150%">
              March 2019 - <br />
              August 2019
            </div>
          </template>
          <div class="py-16">
            <title-subtitle-text-and-links>
              <template #title>Team Member</template>
              <template #subtitle> @ Whataburger, Cedar Park TX </template>
            </title-subtitle-text-and-links>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import TwoEvenRows from "@/components/TwoEvenRows.vue";
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";
</script>
