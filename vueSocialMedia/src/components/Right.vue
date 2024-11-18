<template>
  <div>
    <h1><strong>Chat With Friends</strong></h1>
    <router-link
        v-for="friend in friends"
        :key="friend.id"
        :to="`/message/${friend.id}`"
        class="no-underline"
      >
        <FriendsVue
          :firstName="friend.first_name"
          :lastName="friend.last_name"
          :avatar="friend.avatar"
        />
      </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import FriendsVue from "./AddFriend/Friends.vue";

const friends = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    friends.value = data.data; // Assign the list of friends
  } catch (error) {
    console.error("Error fetching friends:", error);
  } finally {
    loading.value = false;
  }
});
</script>

<style>
.right-container {
  background-color: #ffffff;
  border-radius: 8px;
  min-height: 20px;
  padding: 16px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  margin-right: 15px;
}
</style>
