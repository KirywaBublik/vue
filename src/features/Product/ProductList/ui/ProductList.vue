<script setup lang="ts">
import image from "@/shared/assets";
import type { dataProp } from "@/shared/api";
import { useUserStore } from "@/app/providers/stores/User";
import router from "@/app/providers/routes/router";

defineProps<{
  data: dataProp[];
  deleteItem: (id: number) => void;
  addToBasket: (id: number) => void;
}>();

const user = useUserStore();

function navigate() {
  !user.isAuth && router.push("/login");
}
</script>

<template>
  <div
    v-for="item in data"
    :key="item.id"
    class="bg-white rounded-lg shadow-md overflow-hidden"
  >
    <RouterLink :to="String(item.id)">
      <div class="p-4">
        <h1 class="text-lg font-semibold mb-2">{{ item.title }}</h1>
        <h2 class="text-md font-medium text-gray-600 mb-2">
          {{ item.subtitle }}
        </h2>
        <img alt="" :src="image" />
        <p class="text-xl font-bold text-gray-800 mb-4">{{ item.price }}</p>
      </div>
    </RouterLink>
    <button
      class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      @click="deleteItem(item.id)"
    >
      Delete Item
    </button>
    <button
      v-if="user.isAuth"
      class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      @click="addToBasket(item.id)"
    >
      Add to basket
    </button>
    <button
      @click="navigate"
      v-else
      class="bg-gray-500 text-white py-2 px-4 rounded"
    >
      Add to basket
    </button>
  </div>
</template>
