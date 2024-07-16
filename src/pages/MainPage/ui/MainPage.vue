<script setup lang="ts">
import Product from "@/entities/Product/";
import { useCounterStore } from "@/app/providers/stores/";
import { ref } from "vue";

const counter = useCounterStore();

const name = ref<string>("");

counter.changeName(name.value);
</script>

<template>
  <div class="flex justify-center items-center flex-col">
    <div>Current Count: {{ counter.count }}</div>
    <div>Current Name: {{ counter.name }}</div>
    <input type="text" v-model="counter.name" />
    <button @click="counter.$reset()">Reset</button>
    <br />
    <div>
      <button @click="counter.increment()">add</button>
      <br />
      <button @click="counter.decrement()">remove</button>
    </div>
  </div>
  <Product />
</template>
