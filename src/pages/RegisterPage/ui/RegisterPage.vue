<script setup lang="ts">
import Input from "@/shared/ui/Input/ui/Input.vue";
import { useUserStore } from "@/app/providers/stores/User";
import { ref } from "vue";

const user = useUserStore();

const register = "register";
// todo
const data = ref([
  {
    id: 0,
    name: "username",
    model: (user.fullName = ref("")),
    label: "Имя пользователя",
  },
  {
    id: 1,
    name: "email",
    model: (user.email = ref("")),
    label: "Почта",
  },
  {
    id: 2,
    name: "password",
    model: (user.password = ref("")),
    label: "Пароль",
  },
]);
</script>

<template>
  <div class="flex justify-center items-center bg-gray-100 flex-grow">
    <div class="bg-white p-10 shadow-md rounded-lg w-full max-w-md text-center">
      <h2 class="text-2xl font-bold mb-5">Регистрация</h2>
      <form @submit.prevent="user.register(register)">
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
