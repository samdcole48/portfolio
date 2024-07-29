<template>
    <v-app-bar>
        <v-container class="fill-height d-flex">
            <v-app-bar-title>
                <img height="30" src="@/assets/my-logo.png"></img>
            </v-app-bar-title>
            
            <v-btn variant="text" :to="{name: '/about-me'}">
                About Me
            </v-btn>
            <v-btn variant="text" :to="{name: '/qualifications'}">
                Qualifications
            </v-btn>
            <v-btn variant="text" :to="{name: '/projects'}">
                Projects
            </v-btn>
            <v-btn variant="text" :to="{name: '/'}">
                Home
            </v-btn>
        </v-container>
    </v-app-bar>
</template>