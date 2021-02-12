import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserProfile from '../views/UserProfile'
import Admin from '../views/Admin'
import store from '../store'
import {users} from '../assets/users.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId', // : is used to declare variable.
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async(to, from, next) => {
  const user = store.state.User.user

  if(!user) {
    // Don't forget to add the User before actions that we trying to commit
    await store.dispatch('User/setuser', users[0]) // Dispatch is used to call the actions in vuex
  }

  const isAdmin = true;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin); // Require the admin but you are not an Admin
  if ( requiresAdmin && !isAdmin ) next({ name: 'Home' });
  else next();
})

export default router
