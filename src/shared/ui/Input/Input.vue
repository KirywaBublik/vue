<template>
  <div class="mb-5">
    <label class="block mb-2 font-semibold">{{ label }}</label>
    <input
        :v-model="inputValue"
        :name="name"
        class="w-full p-2 border-2 border-gray-300 rounded border-solid
             focus:outline-none focus:ring-2 focus:ring-blue-500"
     />
  </div>
</template>

<script setup lang="ts">
import type {Ref} from "vue";

defineProps<{
  name: string
  inputValue: Ref
  label:string
}>()
</script>
