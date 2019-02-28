import Vue from "vue";
import Vuex from "vuex";
import App from "./App";

Vue.use(Vuex);

Vue.config.productionTip = false;
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});
/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  template: "<App/>",
  components: { App }
});
