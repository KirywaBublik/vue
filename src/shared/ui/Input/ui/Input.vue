<script setup lang="ts">
// TODO варн без ?
defineProps<{
  label?: string;
  modelValue?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const updateEvent = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="mb-5">
    <label class="block mb-2 font-semibold">{{ label }}</label>
    <input
      :value="modelValue"
      @input="updateEvent"
      class="w-full p-2 border-2 border-gray-300 rounded border-solid focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</template>
