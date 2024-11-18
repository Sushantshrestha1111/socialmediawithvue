<template>
  <div class="flex flex-col rounded-md shadow-md bg-white my-4">
    <!-- Post Detail -->
    <div class="flex flex-row p-4">
      <img
        class="w-12 h-12 rounded-full"
        src="../assets/images/my.jpg"
        alt="Profile"
      />
      <div class="pl-4 pt-2 flex flex-col">
        <span class="text-black text-xl italic"
          ><strong>Sushant Shreshta</strong></span
        >
        <span><strong>Feb</strong> 12</span>
      </div>
    </div>

    <!-- Delete Button -->
    <div>
      <Popover>
        <PopoverTrigger>
          <button>...</button>
        </PopoverTrigger>
        <PopoverContent>
          <div>
            <button
              class="text-red-500 hover:text-red-700"
              @click="deletePost"
            >
              Delete Post
            </button>
          </div>
        </PopoverContent>
      </Popover>
    </div>

    <!-- Description -->
    <div class="text-gray-600 mx-4 my-2 font-serif text-lg leading-relaxed">
      {{ description }}
    </div>

    <!-- Shared Image -->
    <div class="bg-gray-50">
      <a>
        <img
          class="object-contain w-full h-full p-2 pl-2 pr-2"
          :src="postImage"
          alt="Shared"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

defineProps({
  id: Number, // Unique ID for the post
  description: String,
  postImage: String,
});

const emit = defineEmits(["delete-post"]); // Define the delete-post event

// Emit delete-post event with the post's ID
const deletePost = () => {
  emit("delete-post", id);
};
</script>

<style scoped>
/* No additional styles; everything is handled by Tailwind */
</style>
