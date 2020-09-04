import "@/assets/css/reset.css";
import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import "lib-flexible";
Vue.config.productionTip = false;

import { Circle } from "vant";
Vue.use(Circle);

import newDate from "@/filter/_date.js";
Vue.prototype.$newDate = newDate;
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
