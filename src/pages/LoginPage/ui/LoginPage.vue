<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import Input from "@/shared/ui/Input/Input.vue";

let username = ref<string>("");
let email = ref<string>("");
let pass = ref<string>("");



const dataSubmit = async () => {
  await axios.post("https://affdf12e9349600c.mokky.dev/register",{
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    fullName: username.value,
    email: email.value,
    password: pass.value
  })
};


const data = [
  {
    id:0,
    name: username.value,
    nameInput: "fullName",
    label: "Имя пользователя"
  },
  {
    id:1,
    name: email.value,
    nameInput: "email",
    label: "Почта"
  },
  {
    id:2,
    name: pass.value,
    nameInput: "password",
    label: "Пароль"
  },

]




</script>

<template>
  <div class="flex justify-center items-center bg-gray-100 flex-grow">
    <div class="bg-white p-10 shadow-md rounded-lg w-full max-w-md text-center">
      <h2 class="text-2xl font-bold mb-5">Вход</h2>
      <form @submit.prevent="dataSubmit">
        <Input
            v-for="item in data"
            :key="item.id"
            :name="item.nameInput"
            v-model="item.name"
            :label="item.label"
        />
        <button type="submit" class="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">Войти</button>
      </form>
    </div>
  </div>
</template>
