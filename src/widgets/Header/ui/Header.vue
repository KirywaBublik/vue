<template>
  <header class="bg-blue-600 text-white p-4 shadow-md">
    <nav class="flex justify-between items-center">
      <RouterLink to="/" class="hover:underline">
      <div class="text-lg font-bold">My Website</div>
      </RouterLink>
      <div class="space-x-4">
        <RouterLink to="/" class="hover:underline">Go to Home</RouterLink>
        <RouterLink to="/about" class="hover:underline">Go to About</RouterLink>
        <RouterLink to="/login" class="hover:underline">Go to Login</RouterLink>
        <RouterLink to="/register" class="hover:underline">Go to Register</RouterLink>
      </div>
    </nav>
  </header>
    <router-view/>
</template>

<script setup lang="ts">
</script>