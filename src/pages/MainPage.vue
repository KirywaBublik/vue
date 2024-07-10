<script>
import Todos from "@/components/Todos.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {Todos}
})

</script>

<template>
  <h1>MainPage</h1>
  <Todos/>
</template>