<script setup lang="ts">
import { useUserStore } from "@/app/providers/stores/User";
import Basket from "@/entities/Basket/Basket.vue";
import { getToken } from "@/shared/lib";
import { onMounted } from "vue";
import { useBasketStore } from "@/app/providers/stores/Basket";

const user = useUserStore();
const basket = useBasketStore();

const token = getToken("token");

if (token) {
  onMounted(async () => {
    await user.getUserInfo("auth_me", token);
  });
}
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
        <div class="space-x-4" v-if="!user.isAuth">
          <RouterLink to="/login" class="hover:underline"
            >Go to Login</RouterLink
          >
          <RouterLink to="/register" class="hover:underline"
            >Go to Register</RouterLink
          >
        </div>
        <div class="space-x-4" v-else>
          {{ user.fullName }}
          <button @click="user.logout()">LogOut</button>
          <br /><br />
          <RouterLink v-if="basket.items.length" to="/basket">
            <Basket />
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>
  <router-view />
</template>
