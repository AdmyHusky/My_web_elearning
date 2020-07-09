import Vue from 'vue'
import VueRouter from 'vue-router'
import Authen from '../views/Authen.vue'
import HomepageTeacher from '../views/HomepageTeacher.vue'
import HomeStudent from '../views/HomeStudent.vue'
import Upfile from '../views/Upfile.vue'
import Upvideo from '../views/Upvideo.vue'
import Calendar from '../views/Calendar.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Authen',
    component: Authen
  },
  {
    path: '/HomepageTeacher',
    name: 'HomepageTeacher',
    component: HomepageTeacher,
    children: [{
      path: 'Home',
      component: Home
    },{
      path: 'Upfile',
      component: Upfile
    },{
      path: 'Upvideo',
      component: Upvideo
    },{
      path: 'Calendar',
      component: Calendar
    }]
  },
  {
    path: '/HomeStudent',
    name: 'HomeStudent',
    component: HomeStudent,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
