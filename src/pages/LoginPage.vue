

<script setup lang="ts">
  import {ref} from "vue";

  let name = ref<string>("")
  let pass = ref<string>("")

  const dataSubmit = () => {
    console.log(name.value, pass.value)
  }

</script>



<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Вход</h2>
        <div class="input-group">
          <label for="username">Имя пользователя</label>
          <input v-model="name" type="text" name="name" required />
        </div>
        <div class="input-group">
          <label for="password">Пароль</label>
          <input v-model="pass" type="password" name="pass" required />
        </div>
        <button @click="dataSubmit" type="submit">Войти</button>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.login-box {
  background: #fff;
  padding: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>

