import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/booking",
    name: "Booking",
    component: () => import("../views/Booking.vue"),
  },
  {
    path: "/metasearch",
    name: "MetaSearch",
    component: () => import("../views/MetaSearch.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
