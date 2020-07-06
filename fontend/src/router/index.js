import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomepageTeacher from '../views/HomepageTeacher.vue'
import HomeStudent from '../views/HomeStudent.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/HomepageTeacher',
    name: 'HomepageTeacher',
    component: HomepageTeacher
  },
  {
    path: '/HomeStudent',
    name: 'HomeStudent',
    component: HomeStudent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
