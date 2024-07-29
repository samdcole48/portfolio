<template>
    <v-app-bar>
        <v-container class="fill-heeight d-flex">
            <v-toolbar-title>
                Sam Cole
            </v-toolbar-title>
            
            <v-btn variant="text" :to="{name: 'hello'}">
                Hello
            </v-btn>
            <v-btn variant="text">
                About Me
            </v-btn>
            <v-btn variant="text">
                Qualifications
            </v-btn>
            <v-btn variant="text">
                Projects
            </v-btn>
            <v-btn variant="text" :to="{name: 'home'}">
                Home
            </v-btn>
        </v-container>
    </v-app-bar>
</template>