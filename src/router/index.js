import { createRouter, createWebHistory } from "vue-router";
import SearchView from "../views/SearchView.vue";
import ResultsView from "../views/ResultsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: { path: "/search" },
    },
    {
      path: "/search",
      component: SearchView,
      children: [
        {
          path: "results",
          component: ResultsView,
        },
      ],
    },
  ],
});

export default router;
