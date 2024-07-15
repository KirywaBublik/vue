<script setup lang="ts">
import { onMounted, ref } from "vue";
import { fetchUserProfile } from "@/shared/api/request/fetchDataHandler";
import {
  clearToken,
  getToken,
} from "@/shared/lib/localStorageHandler/localStorageHandler";

onMounted(() => {
  fetchUserProfile("auth_me");
});

const token = ref(getToken("token"));

const name = ref(getToken("name"));

const logOutFunc = () => {
  clearToken("token");
  clearToken("name");
};
</script>

<template>
  <header class="bg-blue-600 text-white p-4 shadow-md">
    <nav class="flex justify-between items-center">
      <RouterLink to="/" class="hover:underline">
        <div class="text-lg font-bold">My Website</div>
      </RouterLink>
      <div class="space-x-4">
        <RouterLink to="/" class="hover:underline">Go to Home</RouterLink>
        <RouterLink to="/about" class="hover:underline">Go to About</RouterLink>
        <div class="space-x-4" v-if="!token">
          <RouterLink to="/login" class="hover:underline"
            >Go to Login</RouterLink
          >
          <RouterLink to="/register" class="hover:underline"
            >Go to Register</RouterLink
          >
        </div>
        <div class="space-x-4" v-else>
          {{ name }}
          <button @click="logOutFunc">LogOut</button>
        </div>
      </div>
    </nav>
  </header>
  <router-view />
</template>
