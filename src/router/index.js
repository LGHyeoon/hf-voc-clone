import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Register from "@/components/Register.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/my-vocs", name: "myVoc", component: Register },
  { path: "/login", name: "login", component: Register },
  { path: "/register", name: "register", component: Register },
  { path: "/voc/question", name: "vocQuestion", component: Register },
  { path: "/voc/complain", name: "vocComplain", component: Register },
  { path: "/voc/praise", name: "vocPraise", component: Register },
  { path: "/notice", name: "notice", component: Register },
  { path: "/faq", name: "faq", component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
