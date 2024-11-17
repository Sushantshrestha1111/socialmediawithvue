import { createRouter, createWebHistory } from 'vue-router'


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
      path:'/notification',
      name:'notification',
      component:()=>import('../views/Notification.vue')
    }
  ],
})

export default router
