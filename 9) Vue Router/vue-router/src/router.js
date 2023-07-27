import {createRouter, createWebHistory} from "vue-router";
import Login from "@/views/Login";
import Forget from "@/views/Forget"
import Dashboard from "@/views/Dashboard";
// import Mail from "@/views/Mail";
import AppEmailBody from "@/components/AppEmailBody";
import NotFound from "@/views/NotFound";

const Mail = () => import('./views/Mail')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            component: Login,
            alias: '/',
        },
        {
            path: '/forget',
            component: Forget,
            meta: {
                cantEnter: true,
            }
        },
        {
            path: '/dashboard',
            component: Dashboard,
            name: 'home',
            beforeEnter() {
                console.log('beforeEnter')
            }
        },
        {
            path: '/mail',
            component: Mail,
            children: [
                {
                    path: ':mailId?',
                    component: AppEmailBody,
                    props: true,
                }
            ],
            name: 'email',
        },
        {
            path: '/:notFound(.*)', component: NotFound
        }
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
})

router.beforeEach((to, from, next) => {
    console.log('beforeEach')
    if (to.meta.cantEnter) {
        next({
            name: 'home'
        })
    } else {
        next()
    }
});

router.afterEach((to, from) => {

})

export default router
