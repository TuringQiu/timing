import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/index",
    },
    {
      path: "/index",
      component: () => import("@/view/home"),
    },
  ],
});

export default router;
