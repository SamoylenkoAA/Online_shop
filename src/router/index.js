import { createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    base: __dirname,
    routes: [
        {
            path: '/',
            name: 'Products',
            component: () => import('@/views/Products/Index')
        }
    ]
})
export default router