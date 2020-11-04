import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBdWhysmSx_oaTADwXizL9YhuLvv4BnK8s",
    authDomain: "boardsonskates.firebaseapp.com",
    databaseURL: "https://boardsonskates.firebaseio.com",
    projectId: "boardsonskates",
    storageBucket: "boardsonskates.appspot.com", 
    messagingSenderId: "196508084554",
    appId: "1:196508084554:web:da8164c723dbbb8bdeb9b3"
  };
  // Initialize Firebase
  export const fb = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const dbMenuAdd = db.collection('menuItems');
export const dbOrders = db.collection('orderItems');