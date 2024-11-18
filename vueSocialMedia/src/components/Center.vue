<template>
    <div>
      <!-- Share Component -->
      <Share @post-submitted="addPost" />
  
      <!-- List of Posts -->
      <div>
        <Post
          v-for="(post, index) in posts"
          :key="index"
          :description="post.description"
          :postImage="post.imageUrl"
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
  
  // Function to add a new post
  const addPost = (newPost) => {
    posts.value.unshift(newPost); // Add the new post at the top
    localStorage.setItem('posts', JSON.stringify(posts.value)); // Update local storage
  };
  
  // Load posts on component mount
  onMounted(() => {
    loadPostsFromLocalStorage();
  });
  </script>
  
  <style>
  /* Optional custom styles */
  </style>
  