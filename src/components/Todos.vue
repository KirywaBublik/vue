
<script setup lang="ts">

import {onMounted, ref} from "vue";
import axios from "axios";

interface dataProp {
  userId: number
  id: number
  title: string
  completed: boolean
}

let data = ref<dataProp[]>()

const dataFetch = async () => {
  const response = await axios.get<dataProp[]>("https://jsonplaceholder.typicode.com/todos")
  data.value = response.data
}
onMounted(() => {
  dataFetch()
})

function deleteItem(id: number){
  data.value =  data.value?.filter((item: dataProp) => item.id !== id)
}

</script>

<template>
  <div :key="item.id" v-for="item in data">
    <h1>
      {{item.title}}
      <button @click="deleteItem(item.id)">delete item</button>
    </h1>
  </div>
</template>
