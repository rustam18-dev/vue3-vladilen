import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/HomePage";
import Reusable from "@/Reusable";
import VuexPage from "@/VuexPage";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/reusable',
            component: Reusable,
        },
        {
            path: '/vuex',
            component: VuexPage,
        }

    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
})
