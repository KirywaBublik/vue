<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import router from "@/app/routes/router";
import image from "@/shared/assets";
import { dataFetch } from "@/shared/api/request/fetchDataHandler";

const route = useRoute();
const result = ref();

onMounted(async () => {
  result.value = await dataFetch(`products${route.path}`);
});
</script>
<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <div class="p-4" v-if="result">
      <button @click="router.go(-1)">Prev page</button>
      <h1 class="text-lg font-semibold mb-2">{{ result.title }}</h1>
      <h2 class="text-md font-medium text-gray-600 mb-2">
        {{ result.subtitle }}
      </h2>
      <img class="w-2/6 h-2/6" alt="" :src="image" />
      <p class="text-xl font-bold text-gray-800 mb-4">{{ result.price }}</p>
      <button class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
        Купить
      </button>
    </div>
  </div>
</template>
