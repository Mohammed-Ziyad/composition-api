import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    mate: { title: "about" },
  },
  {
    path: "/directive",
    name: "directive",
    component: () => import("../views/DirectiveView.vue"),
    mate: { title: "directive" },
  },
  {
    path: "/lessons",
    name: "lessons",
    component: () => import("../views/AdvancedView.vue"),
    mate: { title: "lessons" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
