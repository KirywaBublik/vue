<script setup lang="ts">
import { useBasketStore } from "@/app/providers/stores/Basket";
import image from "@/shared/assets";
import { onMounted } from "vue";

const basket = useBasketStore();

onMounted(async () => {
  await basket.fetchData;
});
</script>

<template>
  <div
    v-for="item in basket.count"
    class="bg-white rounded-lg shadow-md overflow-hidden"
  >
    <div class="p-4">
      <h1 class="text-lg font-semibold mb-2">{{ item.title }}</h1>
      <h2 class="text-md font-medium text-gray-600 mb-2">
        {{ item.subtitle }}
      </h2>
      <img class="w-2/6 h-2/6" alt="" :src="image" />
      <p class="text-xl font-bold text-gray-800 mb-4">
        {{ item.price }}
      </p>
      <button class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
        Купить
      </button>
    </div>
  </div>
</template>
