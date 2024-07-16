import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/app/providers/stores/User";

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
    path: "/basket",
    component: () => import("@/pages/BasketPage/BasketPage.vue"),
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

router.beforeEach((to, from, next) => {
  const user = useUserStore();
  const publicPages = ["/login", "/register", "/"];
  const dynamicPublicPagePattern = /^\/\d+$/;

  const isPublicPage =
    publicPages.includes(to.path) || dynamicPublicPagePattern.test(to.path);

  if (!isPublicPage && !user.isAuth) {
    return next("/login");
  }

  next();
});

export default router;
