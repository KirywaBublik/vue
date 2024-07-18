<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from "vue";
import type { dataProp } from "@/shared/api";
import { dataFetch } from "@/shared/api/request/fetchDataHandler";
import Loading from "@/pages/Loading/Loading.vue";
import Error from "@/pages/Error/Error.vue";
import { useBasketStore } from "@/app/providers/stores/Basket";

// todo - isLoading
// todo - hook
const ProductList = defineAsyncComponent({
  loader: () => import("@/features/Product/ProductList/ui/ProductList.vue"),

  loadingComponent: Loading,
  delay: 200,

  errorComponent: Error,
  timeout: 2000,
});

const basket = useBasketStore();

let data = ref<dataProp[]>([]);
let currentPage = ref(1);
let totalPages = ref(1);

async function fetchData(page: number) {
  const response = await dataFetch(`products?page=${page}&limit=8`);
  if (response) {
    data.value = response.items;
    totalPages.value = response.meta.total_pages;
  }
} // todo в стор

onMounted(() => {
  fetchData(currentPage.value);
});

function deleteItem(id: number) {
  data.value = data.value?.filter((item: dataProp) => item.id !== id);
}

function changePage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    fetchData(currentPage.value);
  }
}

function addToBasket(id: number) {
  basket.addToBasket(id);
}
</script>

<template>
  <div class="container mx-auto p-4">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <ProductList
        :addToBasket="addToBasket"
        :data="data"
        :delete-item="deleteItem"
      />
    </div>
    <div class="container text-center p-10">
      <button @click="changePage(currentPage - 1)">Prev page</button>
      <button @click="changePage(currentPage + 1)">Next page</button>
    </div>
  </div>
</template>
