import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueAxios from "vue-axios";
import VueAuthenticate from "vue-authenticate";
import axios from "axios";

Vue.use(VueAxios, axios);
Vue.use(VueAuthenticate, {
  baseUrl: "http://localhost:3000", // Your API domain

  providers: {
    github: {
      clientId: "",
      redirectUri: "http://localhost:8080/auth/callback" // Your client app URL
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  methods: {
    login: function() {
      this.$auth.login({ email, password }).then(function() {
        // Execute application logic after successful login
      });
    },

    register: function() {
      this.$auth.register({ name, email, password }).then(function() {
        // Execute application logic after successful registration
      });
    }
  },
  render: h => h(App)
}).$mount("#app");
