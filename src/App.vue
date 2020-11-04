<template>
  <v-app id="app">
    <navigation/>
    <v-main>
      <v-container class="fill-height" fluid>
        <router-view></router-view>

      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<style lang="scss">
main {
  background-image: url('./assets/pic2.jpg');
  background-size: cover;
}
</style>

<style lang="scss">

</style>


<script>

import Navigation from './components/Navigation';

  export default {
    components: {
      Navigation
    },
    name: 'App',
    props: {
      source: String,
    },
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>
