<template>
  <!-- <HelloWorld /> -->

  <div id="home">
    <h1>Posterday.club</h1>
    <p>Share and View Academic Research Posters from around the world!</p>
    <button class="start">Start</button>
    <br />
    <button class="linkedin" type="submit" @click="authenticate('linkedin')"></button>
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld';

export default {
  components: {
    // HelloWorld
  },
  data: {
    user,
    requestOptions
  },
  store,
  computed: {
    isAuthenticated: function() {
      return this.$store.getters.isAuthenticated();
    }
  },
  methods: {
    authenticate: function(provider) {
      this.$auth.authenticate(provider).then(function() {
        // Execute application logic after successful social authentication
      });
    },
    login() {
      this.$store.dispatch("login", { user, requestOptions });
    }
  }
};
</script>
<style lang="scss" scoped>
#home {
  margin: auto;
  text-align: center;
}

h1 {
  font-size: 5rem;
}

.start {
  background-color: var(--red);
  width: 10rem;
  height: 3rem;
  font-size: 2rem;
  color: white;
  border: none;

  &:hover {
    background-color: var(--crimson);
  }
}

.linkedin {
  width: 18.3rem;
  height: 2.6rem;
  background-image: url("../assets/Sign-In-Small---Default.png");
}

div {
  // background-color: blue;

  h1 {
    // font-size: 10rem;
  }
}
</style>