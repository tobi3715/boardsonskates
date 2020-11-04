<template>
    <v-container>
        <v-row>
            <v-col offset-md="3" md="6" xs="12">
                <h1>Administrator login</h1>
                <div  class="pa-2" >
                    <v-simple-table id="info">
          <v-text-field
                    v-model="email"
                    label="Email"
                    required
                    >
                    </v-text-field>
                    <v-text-field
                    v-model="password"
                    label="Password"
                    required
                    >
                    </v-text-field>
                    <v-btn color="green" class="mr-2" @click.prevent="signIn()">
                        Login
                    </v-btn>
                    <v-btn color="red" class="ml-2" @click.prevent="signOut()">
                        Sign Out
                    </v-btn>
                    </v-simple-table>
        </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore'

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signIn() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
                this.$router.replace('/admin')
            })
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert("Wrong Password")
                } else {errorMessage}
                console.log(error)
            })
        },
        signOut() {
            firebase.auth().signOut().then(() => {
                alert('Logged Out');
                this.$router.replace('/')
            })
            .catch(error => {
                alert(error)
            })
        }
    },
}
</script>

<style lang="scss" scoped>
#info {
    padding: 10px;
    border-radius: 5px 5px 5px 5px;
  }

  h1 {
    text-shadow: 3px 3px 3px black;
    font-size: 40px;
  }
</style>
