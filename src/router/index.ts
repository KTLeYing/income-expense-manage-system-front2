import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import UserLogin from "../components/common/UserLogin.vue"
import EditorDemo from "../components/common/EditorDemo.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/",
    name: "UserLogin",
    component: UserLogin,
  },
  {
    path: "/editorDemo",
    name: "EditorDemo",
    component: EditorDemo,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
