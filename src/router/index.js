import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
  },
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
