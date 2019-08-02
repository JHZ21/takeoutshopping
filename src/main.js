import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/common/stylus/mixins.styl";
import "./components/components";
import FastClick from "fastclick";
FastClick.attach(document.body);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
