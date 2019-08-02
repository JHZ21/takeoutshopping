import Vue from "vue";
import Router from "vue-router";
import Msite from "./views/Msite/Msite";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/miste",
    },
    {
      path: "/miste",
      name: "miste",
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: "/search",
      name: "search",
      meta: {
        showFooter: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Search/Search")
    },
    {
      path: "/profile",
      name: "profile",
      meta: {
        showFooter: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Profile/Profile")
    },
    {
      path: "/order",
      name: "order",
      meta: {
        showFooter: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Order/Order")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Login/Login")
    }
  ]
});
