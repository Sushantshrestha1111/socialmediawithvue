import { createRouter, createWebHistory } from 'vue-router'

import singleMessage from "../views/Chat.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    
    {
      path:'/',
      name:'main',
      component:()=>import('../views/Main.vue')
    },
    {
      path:'/profile',
      name:'profile',
      component:()=>import('../views/Profile.vue')

     },
    
  
    {
      path:'/message',
      name:'message',
      component:()=>import('../views/Chat.vue')

    },
    {
      path:'/message/:id',
      name:'singleMessage',
      component:singleMessage

    },
    {
      path:'/notification',
      name:'notification',
      component:()=>import('../views/Notification.vue')
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('../views/Login.vue')
    },
  ],
})

export default router
