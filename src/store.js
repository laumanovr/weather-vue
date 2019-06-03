import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather: {}
  },
  mutations: {
    setWeatherForecast(state, response) {
      state.weather = response.data;
    }
  },
  actions: {
    async getWeatherForecast({ commit }, city) {
      try {
        const response = await axios.get(`http://localhost:3000/${city}`);
        commit("setWeatherForecast", response);
      } catch (err) {
        console.log(err);
      }
    }
  },
  getters: {
    showCurrentForecast(state) {
      return state.weather.current;
    },
    showDailyForecast(state) {
      return state.weather.forecast;
    }
  }
});
