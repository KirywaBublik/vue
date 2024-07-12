
<script setup lang="ts">

import {onMounted, ref} from "vue";
import type {dataProp} from "@/entities/Todo/model/TodosType";
import {dataFetch} from "@/shared/api/fetchDataHandler";


let data = ref()

onMounted(() => {
  dataFetch("todos", data)
})

function deleteItem(id: number){
  data.value =  data.value?.filter((item: dataProp) => item.id !== id)
}

</script>

<template>
  <div :key="item.id" v-for="item in data">
    <h1>
      {{item.title}}
      <button class="bg-red-500 text-white" @click="deleteItem(item.id)">delete item</button>
    </h1>
  </div>
</template>
