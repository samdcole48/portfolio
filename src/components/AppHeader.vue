<template>
    <v-app-bar>
        <v-container class="fill-height d-flex">
            <v-toolbar-title>
                Sam Cole
            </v-toolbar-title>
            
            <v-btn variant="text" :to="{name: 'hello'}">
                Hello
            </v-btn>
            <v-btn variant="text" :to="{name: 'aboutMe'}">
                About Me
            </v-btn>
            <v-btn variant="text" :to="{name: 'qualifications'}">
                Qualifications
            </v-btn>
            <v-btn variant="text" :to="{name: 'projects'}">
                Projects
            </v-btn>
            <v-btn variant="text" :to="{name: 'home'}">
                Home
            </v-btn>
        </v-container>
    </v-app-bar>
</template>