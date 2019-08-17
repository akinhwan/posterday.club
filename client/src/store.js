import Vue from "vue";
import Vuex from "vuex";
import VueAxios from "vue-axios";
import { VueAuthenticate } from "vue-authenticate";
import axios from "axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const vueAuth = new VueAuthenticate(Vue.prototype.$http, {
  baseUrl: "http://localhost:4000"
});

Vue.use(Vuex);

export default new Vuex.Store({
  // You can use it as state property
  state: {
    isAuthenticated: false
  },

  // You can use it as a state getter function (probably the best solution)
  getters: {
    isAuthenticated() {
      return vueAuth.isAuthenticated();
    }
  },

  // Mutation for when you use it as state property
  mutations: {
    isAuthenticated(state, payload) {
      state.isAuthenticated = payload.isAuthenticated;
    }
  },

  actions: {
    // Perform VueAuthenticate login using Vuex actions
    login(context, payload) {
      vueAuth.login(payload.user, payload.requestOptions).then(response => {
        context.commit("isAuthenticated", {
          isAuthenticated: vueAuth.isAuthenticated()
        });
      });
    }
  }
});
