import Vue from "vue";
import Router from "vue-router";
import Weather from "@/components/weather/Weather.vue";
import DailyForecast from "@/components/daily/DailyForecast.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "weather",
      component: Weather
    },
    {
      path: "/daily/:city",
      name: "daily",
      component: DailyForecast
    }
  ]
});
