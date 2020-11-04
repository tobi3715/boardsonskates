import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Items from '../views/Items.vue'
import Basket from '../views/Basket.vue'
import Admin from '../views/Admin.vue'
import AddNewItems from '../components/admin/AddNewItems.vue'
import Login from '../components/admin/Login.vue'
import Orders from '../views/Orders.vue'

import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/items',
    name: 'Items',
    component: Items
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin, 
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/addNew',
    name: 'addNew',
    component: AddNewItems,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some( record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else next()
});

 