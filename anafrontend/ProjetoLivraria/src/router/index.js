import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Categorias",
      name: "categorias",
      component: () => import("../views/CategoriasView.vue"),
    },
    {
      path: "/Autores",
      name: "Autores",
      component: () => import("../views/AutoresView.vue"),
    },
    {
      path: "/Livros",
      name: "Livros",
      component: () => import("../views/LivrosView.vue"),
    },
    {
      path: "/Editoras",
      name: "Editoras",
      component: () => import("../views/EditorasView.vue"),
    },
  ],
});

export default router;
