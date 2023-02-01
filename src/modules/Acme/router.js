const Module = () => import('./Module.vue')
const Acme = () => import('./views/Acme.vue')

const routes = [
    {
        path: "/acme",
        name: "Acme",
        component: Module,
        children: [
            {
                path: "",
                component: Acme
            }
        ]
    }
];

export default routes



