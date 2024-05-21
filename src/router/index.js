import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about-me',
      name: 'About',
      component: () => import('../views/AboutView.vue'),
      children: [
        {
          path: 'professional',
          name: 'Professional',
          component: () => import('../views/ProfessionalView.vue'),
          children: [
            {
              path: 'experience',
              name: 'Experience',
              component: () => import('../views/ExperienceView.vue')
            },
          ]
        },
        {
          path: 'personal',
          name: 'Personal',
          component: () => import('../views/PersonalView.vue'),
          children: [
            {
              path: 'bio',
              name: 'Bio',
              component: () => import('../views/BioView.vue')
            },
          ]
        },
        {
          path: 'hobbies',
          name: 'Hobbies',
          component: () => import('../views/HobbiesView.vue'),
          children: [
            {
              path: 'sports',
              name: 'Sports',
              component: () => import('../views/SportsView.vue')
            },
            //{
            //  path: 'gaming',
            //  name: 'Gaming',
            //  component: () => import('../views/GamingView.vue')
            //},
            //{
            //  path: 'reading',
            //  name: 'Reading',
            //  component: () => import('../views/ReadingView.vue')
            //},
            //{
            //  path: 'music',
            //  name: 'Music',
            //  component: () => import('../views/MusicView.vue')
            //}
          ]
        }
      ]
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/contact-me',
      name: 'Contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
