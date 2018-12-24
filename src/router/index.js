
// import Store from '@/components/Store'
// import ProductDetail from '@/components/ProductDetail'
// import ShoppingCart from '@/components/ShoppingCart'
// import ProductCategory from '@/components/ProductCategory'
// import Blog from '@/components/Blog'
// import BlogDetail from '@/components/subs/BlogDetail'
// import Login from '@/components/Login'
// import Logout from '@/components/Logout'

import Main from '@/components/Main.vue'
import Courses from '@/components/Courses.vue'

export const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/courses',
        name: 'Courses',
        component: Courses
    }
]
// export const routes = [
// 	{
// 		path: '/',
// 		name: 'Store',
// 		component: Store
// 	},
// 	{
// 		path: '/store/:id',
// 		name: 'ProductDetail',
// 		component: ProductDetail
// 	},
// 	{
// 		path: '/cart',
// 		name: 'ShoppingCart',
// 		component: ShoppingCart
// 	},
// 	{
// 		path: '/category/:id',
// 		name: 'ProductCategory',
// 		component: ProductCategory
// 	},
// 	{
// 		path: '/blog',
// 		name: 'Blog',
// 		component: Blog
// 	},
// 	{
// 		path: '/blog/:id',
// 		name: BlogDetail,
// 		component: BlogDetail
// 	},
// 	{
// 		path: '/login',
// 		name: Login,
// 		component: Login
// 	},
// 	{
// 		path: '/logout',
// 		name: Logout,
// 		component: Logout
// 	}
// ]