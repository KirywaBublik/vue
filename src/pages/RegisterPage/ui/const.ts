import { ref } from "vue";

export const data = ref([
  {
    id: 0,
    name: "username",
    model: ref(""),
    label: "Имя пользователя",
  },
  {
    id: 1,
    name: "email",
    model: ref(""),
    label: "Почта",
  },
  {
    id: 2,
    name: "password",
    model: ref(""),
    label: "Пароль",
  },
]);
