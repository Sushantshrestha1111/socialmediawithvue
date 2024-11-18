<template>
  <div>
    <!-- Share Component -->
    <Share @post-submitted="addPost" />

    <!-- List of Posts -->
    <div>
      <Post
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :description="post.description"
      :postImage="post.imageUrl"
      @delete-post="removePost"
    />
    </div>
  </div>
</template>

<script setup>
import Post from './Post.vue';
import Share from './Share.vue';
import { ref, onMounted } from 'vue';

// Reactive state for posts
const posts = ref([]);

// Function to load posts from local storage
const loadPostsFromLocalStorage = () => {
  const storedPosts = localStorage.getItem('posts');
  if (storedPosts) {
    posts.value = JSON.parse(storedPosts);
  }
};



// Function to get the next unique ID
const getNextId = () => {
  const storedId = localStorage.getItem('postIdCounter');
  const nextId = storedId ? parseInt(storedId) + 1 : 1;
  localStorage.setItem('postIdCounter', nextId);
  return nextId;
};

// Function to add a new post
const addPost = (newPost) => {
  const postWithId = { id: getNextId(), ...newPost }; // Add unique ID to the post
  posts.value.unshift(postWithId); // Add the new post at the top
  localStorage.setItem('posts', JSON.stringify(posts.value)); // Update local storage
};

// Load posts on component mount
onMounted(() => {
  loadPostsFromLocalStorage();
});

const removePost = (postId) => {
  posts.value = posts.value.filter((post) => post.id !== postId); // Remove the post with the given ID
};
</script>

<style>
/* Optional custom styles */
</style>
