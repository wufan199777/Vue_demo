import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from "@/pages/Home/home"
import Audios from "@/pages/Audios/audios"
import Broadcast from "@/pages/Broadcast/broadcast"
import Group from "@/pages/Group/group"
import Mine from "@/pages/Mine/mine"

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/audios",
      name: "Audios",
      component: Audios
    },
    {
      path: "/broadcast",
      name: "Broadcast",
      component: Broadcast
    },
    {
      path: "/group",
      name: "Group",
      component: Group
    },
    {
      path: "/mine",
      name: "Mine",
      component: Mine
    }
  ]
})
