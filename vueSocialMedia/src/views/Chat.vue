<template>
  <div class="app-container relative flex-row pt-10">
    
    <!-- Right Section -->
    <div class="right-container">
      <div class="sticky top-16">
        <RightVue />
      </div>
    </div>

    <!-- Post Section -->
    <div class="Notification-content">
      <div class="sticky top-16">
        <MessageCardVue
          :receiverName="'Sushant'" 
          :receiverProfilePicture="'https://via.placeholder.com/150'"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import RightVue from "../components/Right.vue";
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
