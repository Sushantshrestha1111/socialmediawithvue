<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import Main from './views/Main.vue';
</script>

<template>
 
 <NavBar/> <div class="bg- #fff mt-40">
  <RouterView/>

 </div>




</template>

<style scoped>
.app-container {
  background-color: #fff; /* Set the background color to white */
  min-height: 100vh;      /* Ensure it covers the full viewport height */
}
</style>