import {createRouter, createWebHistory} from 'vue-router'
import MainPage from "@/pages/MainPage/ui/MainPage.vue";


const routes = [
    { path: '/', component: MainPage },
    { path: '/about', component: () => import('./../../pages/AboutPage/ui/AboutPage.vue') },
    { path: '/login', component: () => import('./../../pages/LoginPage/ui/LoginPage.vue') },
    { path: '/register', component: () => import('./../../pages/RegisterPage/ui/RegisterPage.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router