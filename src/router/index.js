import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from "../views/ProfileView.vue"
import FormView from "../views/FormView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        layout: "ProfilePage"
      }
    },
    {
      path: "/profile",
      name:"profile",
      component: ProfileView,
      meta:{
        layout: "Default"
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/form",
      name: "form",
      component: FormView,
      meta:{
        layout: "Default"
      }
    }
  ]
})

export default router
