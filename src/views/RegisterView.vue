<template>
  <div class="container">
    <h1>Criar Usuário:</h1>
    <p><input type="text" placeholder="Email" v-model="email"></p>
    <p><input type="password" placeholder="Senha" v-model="password"></p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <button class="btn" @click="register">Registrar</button>
  </div>
</template>

<script setup>
  import {ref} from "vue"
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
  import {useRouter} from 'vue-router'
  
  const email = ref("");
  const password = ref("");
  const router = useRouter()
  const errMsg = ref()

  const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) =>{
      console.log(data)
      console.log("Cadastrado de pessoa física com sucesso")
      alert("Conta criada com sucesso")
      router.push('/logar')
    }).catch((err) => {
      console.log(err)
      switch (err.code){
      case "auth/invalid-email":
        errMsg.value = "Email invalido";
        break;
      case "auth/email-already-in-use":
        errMsg.value = "Email já cadastrado";
        break;
        case "auth/weak-password":
        errMsg.value = "Senha deve ser maior que 6 caracteres";
        break;
      }
    })
  }
  console.log(register)
</script>

<script>
export default {
    name: "registerView",
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