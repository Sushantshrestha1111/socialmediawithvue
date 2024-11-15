<template>
    <div class="flex flex-col  rounded-md shadow-md bg-white my-4">
      <!-- Post Detail -->
      <div class="flex flex-row p-4">
        <img
          class="w-12 h-12 rounded-full"
          src="../assets/images/my.jpg"
          alt="Profile"
        />
        <div class="pl-4 pt-2 flex flex-col">
          <span class="text-black text-xl italic"><strong>Sushant Shreshta</strong></span>
          <span><strong>Feb</strong> 12</span>
        </div>
      </div>
  
      <!-- Description -->
      <div class="text-black mx-4 my-2">
        Here goes the description about the post some one says bla bla bal Here goes the description about the post some one says bla bla bal Here goes the description about the post some one says bla bla bal Here goes the description about the post some one says bla bla bal Here goes the description about the post some one says bla bla bal Here goes the description about the post some one says bla bla bal Here goes the description about the post some one says bla bla bal Here goes the description about the post some one says bla bla bal Here goes the description about the post some one says bla bla bal Here goes the description about the post some one says bla bla bal 
      </div>
  
      <!-- Shared Image -->
      <div class="bg-gray-50">
        <a>
          <img
            class="object-contain w-full h-full p-9"
            src="../assets/images/meamido.jpg"
            alt="Shared"
          />
        </a>
      </div>
  
      <!-- Reaction Count -->
      <div class="flex ml-6 mb-2 space-x-4">
        <button class="flex items-center space-x-2">
          <img
            class="w-6 h-6"
            src="../assets/images/like.png"
            alt="Like Icon"
          />
          <img
            class="w-6 h-6"
            src="../assets/images/down-icon.svg"
            alt="Down Icon"
          />
          <span>70</span>
        </button>
        <button>
          <span>comments</span>
        </button>
      </div>
  
      <!-- Reaction Buttons -->
      <div class="flex justify-around mt-2 pb-4">
        <button class="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
          Like
        </button>
        <button class="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
          Comment
        </button>
        <button class="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
          Share
        </button>
      </div>
  
      <!-- Comment Section -->
      <div class="p-4">
        <!-- Add your comment components here -->
      </div>
    </div>
  </template>
  
  <script setup>
  // No logic required in this example
  </script>
  
  <style scoped>
  /* No additional styles; everything is handled by Tailwind */
  </style>
  