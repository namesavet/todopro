import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Vue from "vue";



Vue.config.productionTip = false;

const firebaseConfig = {
    apiKey: "AIzaSyAfHowiE1Nzh9SzUn2j4YVHHyLorDuygmk",
    authDomain: "study-planner-coc.firebaseapp.com",
    projectId: "study-planner-coc",
    storageBucket: "study-planner-coc.appspot.com",
    messagingSenderId: "878515116880",
    appId: "1:878515116880:web:f1d933965f7fe369a7aa55",
    measurementId: "G-4L52MGFK0B"
  };

firebase.initializeApp(firebaseConfig);
console.log(firebase);
const auth = firebase.auth();
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export { auth }


