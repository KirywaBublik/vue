import {createRouter, createWebHistory} from 'vue-router'
import AboutPage from "@/pages/AboutPage.vue";
import MainPage from "@/pages/MainPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";


const routes = [
    { path: '/', component: MainPage },
    { path: '/about', component: AboutPage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router