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

        <Popover>
          <PopoverTrigger>
            <!-- Button takes full width -->
            <button class="w-full p-3 rounded-full border pl-9 ml-4 pr-52 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Write New Content
            </button>
          </PopoverTrigger>
          <PopoverContent class="p-4 bg-white shadow-lg rounded-lg border border-gray-300 w-100">

            <form id="form" @submit.prevent="onSubmit">
              <div class="flex flex-col mt-8 mb-5">
                <div class="flex flex-col">
                  <span class="ml-5 mb-2">Write a New Post</span>
              <input
                type="text"
                placeholder="Write a new post"
                v-model="description"
                class="flex-1  p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
  
                </div>
  
                <div class="flex flex-col mt-5">
                  <span class="ml-5 mb-2">Image Url</span>
                  <input
                    type="text"
                    v-model="imageUrl"
                    placeholder="Image url"
                    class="flex-1 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  /></div>
                  <div class="mt-4 items-center justify-center">
                    <Button class="" type="submit">Post</Button>
  
                  </div>
                  
                
              
              </div>
            </form>
            
            
          </PopoverContent>
        </Popover>
      </div>



      <!-- Post Options -->
      <div class="flex space-x-4 pl-16 pb-4">
        <div class="flex items-center p-2 cursor-pointer rounded-md hover:bg-gray-200">
          <img class="w-8 h-8" src="../assets/images/my.jpg" alt="Media Icon" />
          <span class="ml-2 text-gray-700">Media</span>
        </div>
        <div class="flex items-center p-2 cursor-pointer rounded-md hover:bg-gray-200">
          <img class="w-8 h-8" src="../assets/images/my.jpg" alt="Photo Icon" />
          <span class="ml-2 text-gray-700">Photo</span>
        </div>
        <div class="flex items-center p-2 cursor-pointer rounded-md hover:bg-gray-200">
          <img class="w-8 h-8" src="../assets/images/my.jpg" alt="Photo Icon" />
          <span class="ml-2 text-gray-700">Photo</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast();

const description = ref('');
const imageUrl = ref('');

const emit = defineEmits(['post-submitted']);

const onSubmit = () => {
  if (!description.value) {
    toast.error('Please enter a description.');
    return;
  }

  const newPost = {
    description: description.value,
    imageUrl: imageUrl.value,
  };

  emit('post-submitted', newPost); // Emit new post to the parent
  toast.success('Post added successfully!');

  // Reset form fields
  description.value = '';
  imageUrl.value = '';
};
</script>




<style scoped>
</style>
