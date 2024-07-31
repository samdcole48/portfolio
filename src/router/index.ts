/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import home from '@/pages/home.vue'
import aboutMe from '@/pages/about-me.vue'
import experience from '@/pages/experience.vue'
import projects from '@/pages/projects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/about-me', name: '/about-me', component: aboutMe },
    { path: '/experience', name: '/experience', component: experience },
    { path: '/projects', name: '/projects', component: projects },
    { path: '/', name: '/', component: home },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
