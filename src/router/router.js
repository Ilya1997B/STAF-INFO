import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '../pages/Main';
import About from '../pages/About';
import StaffIdPage from '../pages/StaffIdPage';
import StaffPage from '../pages/StaffPage';
import ComparePage from '../pages/ComparePage';

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: StaffIdPage
    },
    {
        path: '/staffpage',
        component: StaffPage,
    },
    {
        path: '/comparePage',
        component: ComparePage,
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL),
})

export default router;