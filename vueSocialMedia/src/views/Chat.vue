<template>
    <div class="app-container relative flex-row pt-10">
      
    <!-- Right Section -->
    <div class="right-container sticky top-4 st "> <div class="sticky top-16">
        <RightVue />
      </div></div>
  
      <!-- Post Section -->
      <div class="Notification-content">
       <MessageCardVue/>
      </div>
  
      
     
    </div>
  </template>
  
  <script setup>
  import LeftVue from "../components/Left.vue";
  
  
  import RightVue from "../components/Right.vue";
import NotificationCardVue from "../components/Cards/NotificationCard.vue";
import MessageCardVue from "../components/Cards/MessageCard.vue";
  </script>
  
  <style scoped>
  .app-container {
    display: flex; /* Use Flexbox for layout */
   
    min-height: 100vh; /* Full viewport height */
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
  