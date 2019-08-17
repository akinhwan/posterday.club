<template>
  <v-app>
    <!-- <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>-->

    <v-content>
      <!-- <HelloWorld/> -->
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>|
        <router-link to="/dashboard">Dashboard</router-link>
      </div>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {},
  data: () => ({
    //
  })
};
</script>
<style lang="scss">
:root {
  --offwhite: #f6f3e5;
  --crimson: #540000;
  --red: #840000;
}

* {
  background-color: var(--offwhite);
}

h1 {
  font-family: "Sorts Mill Goudy", serif;
}

p {
  font-family: "Open Sans", sans-serif;
  font-weight: lighter;
}
</style>
