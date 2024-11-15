<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import Main from './views/Main.vue';
</script>

<template>
 <div class="flex flex-col ">
  <NavBar/> 
  <div class="mt-12">
    <RouterView/>

  </div>
 

 </div>
 






</template>

<style scoped>
.app-container {
  background-color: #f5f5f5; /* Set the background color to white */
  min-height: 100vh;      /* Ensure it covers the full viewport height */
}
</style>