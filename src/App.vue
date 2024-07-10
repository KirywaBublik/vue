<script setup lang="ts">

</script>

<template>

  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
    <RouterLink to="/login">Go to login</RouterLink>
    <RouterLink to="/register">Go to register</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>