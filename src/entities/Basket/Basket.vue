<script setup lang="ts">
import { useBasketStore } from "@/app/providers/stores/Basket";

const basket = useBasketStore();
</script>

<template>
  <div v-if="basket.items.length">Basket: {{ basket.items.length }}</div>
</template>
