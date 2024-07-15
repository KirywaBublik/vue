<script setup lang="ts">
import { dataSubmit } from "@/shared/api/request/fetchDataHandler";
import { ref } from "vue";
import Input from "@/shared/ui/Input/ui/Input.vue";
// TODO
const auth = "auth";
// TODO
const data = ref({
  email: ref<string>(""),
  password: ref<string>(""),
});
</script>

<template>
  <div class="flex justify-center items-center bg-gray-100 flex-grow">
    <div class="bg-white p-10 shadow-md rounded-lg w-full max-w-md text-center">
      <h2 class="text-2xl font-bold mb-5">Вход</h2>
      <form @submit.prevent="dataSubmit(auth, data)">
        <Input label="Почта" v-model="data.email" />
        <Input label="Пароль" v-model="data.password" />
        <button
          type="submit"
          class="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Войти
        </button>
      </form>
    </div>
  </div>
</template>
