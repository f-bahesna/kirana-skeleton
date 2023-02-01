import {createRouter, createWebHistory} from "vue-router";
import registerRoute from "@/register-route.js";

const env = import.meta.env

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('../views/Home.vue')
    },
    ...registerRoute[0]
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;