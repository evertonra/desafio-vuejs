<template>
  <div class="container">
    <h1>Logar:</h1>
    <p><input type="text" placeholder="Email" v-model="email"></p>
    <p><input type="password" placeholder="Senha" v-model="password"></p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <button class="btn" @click="logar">Logar</button>
  </div>
  
</template>

<script setup>
  import {ref} from "vue"
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
  import {useRouter} from 'vue-router'
  
  const email = ref("");
  const password = ref("");
  const router = useRouter()
  const errMsg = ref()

  const logar = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) =>{
      console.log(data)
      console.log("Cadastrado de pessoa física com sucesso")
      alert("Logado com sucesso")
      router.push('/')
    }).catch((err) => {
      console.log(err)
      switch (err.code){
      case "auth/invalid-email":
        errMsg.value = "Email invalido";
        break;
      case "auth/user-not-found":
        errMsg.value = "Nenhuma conta criada nesse email";
        break;
      case "auth/wrong-password":
        errMsg.value = "Senha incorreta";
        break;
      default:
        errMsg.value = "Email ou senha está incorreto";
        break;
      }
    })
  }
  console.log(logar)
</script>

<script>
export default {
    name: "signIn",
}
</script>

<style>
.container {
  max-width: 400px;
  margin: 0 auto;;
}
.container h1 {
  margin-top: 40px;
  margin-bottom: 20px;
  color: #D1512B;
}
.container button {
  width: 100%;
}
</style>