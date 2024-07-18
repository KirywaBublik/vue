<script setup lang="ts">
import Input from "@/shared/ui/Input/ui/MyInput.vue";
import { useUserStore } from "@/app/providers/stores/User";

const user = useUserStore();
</script>

<template>
  <div class="flex justify-center items-center bg-gray-100 flex-grow">
    <div class="bg-white p-10 shadow-md rounded-lg w-full max-w-md text-center">
      <h2 class="text-2xl font-bold mb-5">Вход</h2>
      <form @submit.prevent="user.login('auth')">
        <Input label="Почта" v-model="user.email" />
        <Input label="Пароль" v-model="user.password" />
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
