<template>
    <v-app-bar>
        <v-container class="fill-height d-flex">
            <v-toolbar-title>
                Sam Cole
            </v-toolbar-title>
            
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