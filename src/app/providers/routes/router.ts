import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/pages/MainPage/ui/MainPage.vue") },
  {
    path: "/:id",
    component: () =>
      import("@/features/Product/ProductCard/ui/ProductCard.vue"),
  },
  {
    path: "/about",
    component: () => import("@/pages/AboutPage/ui/AboutPage.vue"),
  },
  {
    path: "/login",
    component: () => import("@/pages/LoginPage/ui/LoginPage.vue"),
  },
  {
    path: "/register",
    component: () => import("@/pages/RegisterPage/ui/RegisterPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
