<template>
  <div class="messaging-app h-screen flex flex-col bg-gray-100">
    <!-- Header -->
    <div class="header bg-blue-600 text-white sticky top-0 flex items-center px-4 py-2 shadow-md">
      <img 
        :src="receiverProfilePicture" 
        alt="Receiver Profile" 
        class="h-12 w-12 rounded-full border-2 border-white"
      />
      <h1 class="ml-4 text-lg font-bold">{{ receiverName }}</h1>
    </div>

    <!-- Message List -->
    <div class="messages flex-1 overflow-y-auto p-4 space-y-4">
      <div v-for="(message, index) in messages" :key="index" class="message">
        <!-- Sent Message -->
        <div 
          v-if="message.sender === 'me'" 
          class="sent bg-blue-500 text-white px-4 py-2 rounded-lg max-w-xs ml-auto"
        >
          {{ message.text }}
        </div>
        <!-- Received Message -->
        <div 
          v-else 
          class="received bg-gray-300 px-4 py-2 rounded-lg max-w-xs"
        >
          {{ message.text }}
        </div>
      </div>
    </div>

    <!-- Message Input -->
    <div class="input-bar bg-white p-4 shadow-md">
      <div class="flex items-center space-x-2">
        <input 
          v-model="newMessage" 
          @keyup.enter="sendMessage" 
          type="text" 
          placeholder="Type a message..." 
          class="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          @click="sendMessage" 
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// State for receiver details
const receiverName = ref("");
const receiverProfilePicture = ref("");

// State for messages
const messages = ref([
  { text: "Hi there!", sender: "receiver" },
  { text: "Hello! How are you?", sender: "me" },
]);

// State for new message input
const newMessage = ref("");

// Get the dynamic route parameter (friend's ID) from the URL
const route = useRoute();
const receiverId = route.params.id; // This will get the ID from the URL (e.g., /message/6)

// Fetch user data based on the ID from the API
const fetchUserData = async () => {
  try {
    const response = await fetch(`https://reqres.in/api/users/${receiverId}`);
    const data = await response.json();
    if (data.data) {
      receiverName.value = `${data.data.first_name} ${data.data.last_name}`;
      receiverProfilePicture.value = data.data.avatar; // Use the profile picture URL
    } else {
      console.error("User not found!");
      receiverName.value = "Unknown User";
      receiverProfilePicture.value = "https://via.placeholder.com/150"; // Default placeholder image
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    receiverName.value = "Error Loading";
    receiverProfilePicture.value = "https://via.placeholder.com/150"; // Default placeholder image
  }
};

// Function to send a new message
const sendMessage = () => {
  if (newMessage.value.trim()) {
    messages.value.push({ text: newMessage.value, sender: "me" });
    newMessage.value = ""; // Clear input
  }
};

// Fetch the user data when the component is mounted
onMounted(() => {
  fetchUserData();
});
</script>

<style scoped>

.messages::-webkit-scrollbar {
  width: 6px;
}
.messages::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}


.header {
  z-index: 10;
}
</style>
