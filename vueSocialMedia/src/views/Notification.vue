<template>
    <div class="app-container relative flex-row pt-10">
      
      <!-- Left Section -->
      <div class="left-container sticky top-16">
        <div class="sticky top-16"><LeftVue /></div>
        
      </div>
  
      <!-- Post Section -->
      <div class="Notification-content">
        
        <NotificationCardVue/>
      </div>
  
      <!-- Right Section -->
       <div class="right-container sticky top-4 st "> <div class="sticky top-16">
        <RightVue />
      </div></div>
     
    </div>
  </template>
  
  <script setup>
  import LeftVue from "../components/Left.vue";
  
  
  import RightVue from "../components/Right.vue";
import NotificationCardVue from "../components/Cards/NotificationCard.vue";
  </script>
  
  <style scoped>
  .app-container {
    display: flex; /* Use Flexbox for layout */
   
    min-height: 100vh; /* Full viewport height */
  }
  
  /* Left Section */
  .left-container {
    flex: 1; /* Take up smaller space */
   
    padding: 10px;
  }
  
  /* Post Section */
  .Notification-content {
    flex: 2; /* Take up more space */
    padding: 10px;
  }
  
  /* Right Section */
  .right-container {
    flex: 1; /* Take up smaller space */
  
    padding: 10px;
  }
  </style>
  