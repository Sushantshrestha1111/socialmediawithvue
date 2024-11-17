<template>
    <header class="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div class="flex items-center max-w-6xl mx-auto px-6 h-14">
        <!-- Logo -->
        <div class="mr-4">
          <a href="/">
            <img src="" alt="Logo" class="h-8" />
          </a>
        </div>
  
        <!-- Search -->
        <div class="flex-grow relative max-w-md">
          <input
            type="text"
            placeholder="Search"
            class="w-full h-10 pl-10 pr-3 bg-gray-100 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div class="absolute inset-y-0 left-2 flex items-center">
            <div class="absolute inset-y-0 left-2 flex items-center">
                <!-- Using VIcon with IoSearchOutline -->
                <img
                class=""
                src="../assets/images/search-icon.svg"
                alt="Profile"
              />
              </div>
          </div>
        </div>
  
        <!-- Navigation -->
        <nav class="ml-auto hidden md:flex space-x-6">
            <v-icon name="IoSearchOutline" class="text-xl text-blue-500" />
            <RouterLink to="/message" class="text-black"><div>
              <img
              class=""
              src="../assets/images/nav-messaging.svg"
              alt="Profile"
            /></div></RouterLink>
    <RouterLink to="/notification" class="text-black"><div>
      <img
          class=""
          src="../assets/images/nav-notifications.svg"
          alt="Profile"
        />
    </div></RouterLink>

    <RouterLink to="/" class="text-black"><div>
      <img
          class="w-8 h-8 rounded full"
          src="../assets/images/user.svg"
          alt="Profile"
        />
    </div></RouterLink>
         
        </nav>
      </div>
    </header>
  </template>
  
  <script setup>

import { IoSearchOutline } from "oh-vue-icons/icons";

 
  </script>
  