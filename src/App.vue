
<script setup lang="ts">

import {onUpdated, ref} from "vue";

  let counter = ref<number>(0)

  onUpdated(() => {
    if(counter.value < 0){
      counter.value = 0
    }
  })

</script>

<template>
  <div v-if="counter >= 10">
    counter >= 10 | error
  </div>
  <div v-else>
    <h1>{{ counter }}</h1>
    <div>
      <button @click="counter++">Increment</button>
      <button @click="counter--">Decrement</button>
    </div>
  </div>

</template>
