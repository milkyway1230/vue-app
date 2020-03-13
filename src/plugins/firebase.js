import Vue from "vue";
import * as firebase from "firebase/app";
import firebaseConfig from "../../firebaseConfig";
import "firebase/firestore";

// Add the Firebase products that you want to use
// import "firebase/auth";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase
//   .firestore()
//   .collection("test")
//   .add({ test: "aaa" })
//   .then(r => console.log(r))
//   .catch(e => console.error(e));

Vue.prototype.$firebase = firebase;