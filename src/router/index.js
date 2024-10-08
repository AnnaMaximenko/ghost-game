import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../page/HomeView.vue";
import GameView from "../page/GameView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/game",
    name: "game",
    component: GameView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
