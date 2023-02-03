import {createRouter, createWebHistory} from "vue-router";
import registerRoute from "@/register-route.js";
const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('../views/Home.vue')
    },
];

registerRoute.map( route => {
    routes.push(route[0])
})

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;