import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg_JLRtoSNQU7fIHrBgaeKeKZaKKzrwgc",
  authDomain: "login-desafio.firebaseapp.com",
  projectId: "login-desafio",
  storageBucket: "login-desafio.appspot.com",
  messagingSenderId: "1038368770706",
  appId: "1:1038368770706:web:41e25655f21a5d00bfb44b"
};

// Initialize Firebase
initializeApp(firebaseConfig)



createApp(App).use(store).use(router).mount('#app')
