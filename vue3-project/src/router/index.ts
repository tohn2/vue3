import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Login from "@/components/Login.vue"
import Home from "@/components/Home.vue"
const routes: Array<RouteRecordRaw> = [
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/home",
        name: "Home",
        component: Home
    }, {
        path: "/",
        redirect: "/home"
    }
]
const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router