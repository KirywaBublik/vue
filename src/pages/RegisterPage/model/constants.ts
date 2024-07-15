import { ref } from "vue";

// TODO улучшить
export const data = ref([
  {
    id: 0,
    name: "username",
    model: ref<string>(""),
    label: "Имя пользователя",
  },
  {
    id: 1,
    name: "email",
    model: ref<string>(""),
    label: "Почта",
  },
  {
    id: 2,
    name: "password",
    model: ref<string>(""),
    label: "Пароль",
  },
]);
