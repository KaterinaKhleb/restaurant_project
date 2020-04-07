import Vue from 'vue'
import VueRouter from  'vue-router'
import Home from "../components/home"
import Menu from "../components/menu"
import Locations from "../components/locations"
import Contacts from "../components/contacts"


Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Locations
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router