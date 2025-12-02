import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Register from "@/components/Register.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/my-vocs", name: "myVoc", component: Register },
  { path: "/login", name: "login", component: Register },
  { path: "/register", name: "Register", component: Register },
  { path: "/voc/register", name: "VocRegister", component: Register },
  { path: "/voc/status", name: "VocStatus", component: Register },
  { path: "/voc/faq", name: "VocFaq", component: Register },
  { path: "/notice", name: "notice", component: Register },
  { path: "/faq", name: "faq", component: Register },
];

const router = createRouter({
  history: createWebHistory(), // "/" 생략
  routes,
});

export default router;
