<template>
    <div>
      <!-- ShareBox -->
      <div class="flex flex-col bg-white shadow-md rounded-md mb-2">
        <!-- Profile Section -->
        <div class="flex items-center p-4">
          <img
            class="w-12 h-12 rounded-full"
            src="../assets/images/my.jpg"
            alt="Profile"
          />
          <input
            type="text"
            placeholder="Write something"
            class="flex-1 ml-4 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
  
        <!-- Post Options -->
        <div class="flex space-x-4 pl-16 pb-4">
          <div
            class="flex items-center p-2 cursor-pointer rounded-md hover:bg-gray-200"
          >
            <img class="w-8 h-8" src="../assets/images/my.jpg" alt="Media Icon" />
            <span class="ml-2 text-gray-700">Media</span>
          </div>
          <div
            class="flex items-center p-2 cursor-pointer rounded-md hover:bg-gray-200"
          >
            <img class="w-8 h-8" src="../assets/images/my.jpg" alt="Photo Icon" />
            <span class="ml-2 text-gray-700">Photo</span>
          </div>
          <div
            class="flex items-center p-2 cursor-pointer rounded-md hover:bg-gray-200"
          >
            <img
              class="w-8 h-8"
              src="../assets/images/my.jpg"
              alt="New Article Icon"
            />
            <span class="ml-2 text-gray-700">New Article</span>
          </div>
        </div>
      </div>
  
      
    </div>
  </template>
  
  <script setup>
 
  </script>
  
  <style scoped>
  /* No additional styles needed; Tailwind CSS handles all the styling */
  </style>
  