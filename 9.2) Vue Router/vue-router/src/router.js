import {createRouter, createWebHistory} from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            component: () => import("@/views/Login"),
            alias: '/'
        },
        {
            path: '/forget',
            component: () => import("@/views/Forget"),
        },
        {
            path: '/dashboard',
            component: () => import("@/views/Dashboard")
        },
        {
            path: '/mail',
            component: () => import("@/views/Mail")
        }
    ],
    linkExactActiveClass: 'active',
})