<template>
<div>
    <v-navigation-drawer v-model="drawer" app clipped> 
      <div v-if="currentUser">
        <v-card
    class="mx-auto"
    max-width="200"
    tile
  >
    <v-img
      height="100%"
      src="../assets/business.jpg"
    >
      <v-row
        align="end"
        class="fill-height"
      >
        <v-col
          align-self="start"
          class="pa-0"
          cols="12"
        >
          <v-avatar
            class="profile"
            color="grey"
            size="65"
            tile
          >
            <v-img src="../assets/mig.jpg"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="rgba(0, 0, 0, .4)"
            dark
          >
            <v-list-item-content>
              <v-list-item-title class="title">
                {{ currentUser.email }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>






      </div>
    <ul>
        <router-link tag="li" to="/"><v-icon>home</v-icon>Home</router-link>
        <router-link tag="li" to="/items"><v-icon>view_agenda</v-icon>Items</router-link>
        <router-link tag="li" to="/basket"><v-icon>shopping_basket</v-icon>Basket</router-link>
        <router-link tag="li" to="/login"><v-icon>login</v-icon>Login</router-link>
        <router-link tag="li" to="/about"><v-icon>info</v-icon>About</router-link>
        <router-link tag="li" v-if="currentUser" to="/orders"><v-icon color="green">assignment</v-icon>Orders</router-link>
        <router-link tag="li" to="/admin"><v-icon color="orange">lock</v-icon>Admin</router-link>

    </ul>

    </v-navigation-drawer>

    <v-app-bar app clipped-left color="secondary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline">
          <span class="font-weight-bold"><h3>Boards</h3></span>
          <span>On</span>
          <span class="font-weight-bold">Skates</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <router-link id="menu" to="/items" class="mr-2"><v-icon>view_agenda</v-icon></router-link>
          <router-link id="shopping_basket" to="/basket"><v-icon>shopping_basket</v-icon></router-link>
          <v-btn v-if="currentUser" color="red" @click.prevent="signOut()">
             Sign Out
          </v-btn>
          <router-link to="/login"><v-btn v-if="!currentUser" color="green">
             Log In
          </v-btn></router-link>
    </v-app-bar>
</div>
</template>

<style lang="scss">
nav ul {
  padding: 0;
  margin-top: 20px;
  text-decoration: none;
}

#menu, #shopping_basket, #sign_out {
  list-style: none;
  text-decoration: none;
  padding-right: 20px;
}

nav li {
  /*color:map-get($colorz, white);*/
  color: white;
  margin-left: 15%;
  padding: 5px 20px;
  list-style: none;
  cursor: pointer;
}

nav li i {
  margin-right: 10px;
  margin-bottom: 5px;
}

nav li:last-child {
  position: absolute;
  bottom: 40px;
  color: orange;
}
</style>


<script>
/*eslint-disable*/
import { db } from '../../firebase';
import firebase from 'firebase';
import 'firebase/firestore';
import store from '../store/index.js';

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch("setUser", user);
  } else {
    store.dispatch("setUser", null);
  }
});

export default {
  data: () => ({
    drawer: null
  }),
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Logged Out");
          this.$router.replace("/");
        })
        .catch(error => {
          alert(error);
        });
    }
  }
};
</script>
