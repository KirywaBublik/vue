<script setup lang="ts">
import Input from "@/shared/ui/Input/ui/Input.vue";
import { data } from "@/pages/RegisterPage/model/constants";
import { dataSubmitRegister } from "@/shared/api/request/fetchDataHandler";
</script>

<template>
  <div class="flex justify-center items-center bg-gray-100 flex-grow">
    <div class="bg-white p-10 shadow-md rounded-lg w-full max-w-md text-center">
      <h2 class="text-2xl font-bold mb-5">Регистрация</h2>
      <form @submit.prevent="dataSubmitRegister()">
        <Input
          v-for="item in data"
          :key="item.id"
          :label="item.label"
          v-model="item.model"
        />
        <button
          type="submit"
          class="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Зарегистироваться
        </button>
      </form>
    </div>
  </div>
</template>
