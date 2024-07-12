
<script setup lang="ts">
  import {onMounted, ref} from "vue";
  import dataFetch from "@/shared/api";

  let imageUrl = ref()

  onMounted(() => {
    dataFetch("/photos/1", imageUrl)
  })

</script>


<template>
    <main class="flex-grow p-8 bg-gray-100">
      <div class="container mx-auto">
        <h1 class="text-4xl font-bold text-center mb-8">About Us</h1>
        <div class="flex flex-col md:flex-row md:space-x-8">
          <div class="md:w-1/2">
            <img :src="imageUrl?.url" alt="About Us" class="rounded-lg shadow-md mb-8 md:mb-0" />
          </div>
          <div class="md:w-1/2">
            <p class="mb-4">
              Welcome to My Website! We are dedicated to providing you with the best service possible. Our team works tirelessly to
              ensure your satisfaction.
            </p>
            <p class="mb-4">
              Our mission is to deliver high-quality products and services that meet your needs and exceed your expectations. We
              believe in innovation, excellence, and commitment to our customers.
            </p>
            <p class="mb-4">
              Thank you for choosing us. We look forward to serving you and helping you achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </main>
</template>
