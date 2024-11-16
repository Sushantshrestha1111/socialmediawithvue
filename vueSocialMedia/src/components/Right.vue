<template>
   <div class="">
    <h1><strong>Chat With Friends</strong> </h1> 
    <FriendsVue/>
    <FriendsVue/>
    <FriendsVue/>
    <FriendsVue/>
    <FriendsVue/>
    <FriendsVue/>
   </div>

</template>
<script setup>
import FriendsVue from "./AddFriend/Friends.vue";

</script>
<style>

.right-container {
    background-color: #ffffff; /* White background */
    border-radius: 8px; /* Rounded corners */
    min-height: 20px; /* Minimum height */
    padding: 16px; /* Padding inside the component */
    border: 1px solid #e0e0e0; /* Soft border */
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1); /* Soft shadow */
    margin-right: 15px;
  }
    
</style>