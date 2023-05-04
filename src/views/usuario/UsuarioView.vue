<template>
  <section class="usuario">
    <UsuarioForm>
      <button class="btn" @click.prevent="atualizarUsuario">Atualizar Usuário</button>
    </UsuarioForm>
    <ErroNotificacao :erros="erros"/>
  </section>
  
</template>

<script>
import UsuarioForm from "../../components/UsuarioForm.vue"
import { api } from "../../components/services.js"

export default {
    name: "UsuarioView",
    components: {
    UsuarioForm
  },
  data() {
    return {
      erros: []
    };
  },
  methods: {
    atualizarUsuario() {
      this.erros = [];
      api.put("/usuario", this.$store.state.usuario)
        .then(() => {
          this.$store.dispatch("getUsuario");
          this.$router.push("/usuario");
        })
        .catch(error => {
          this.erros.push(error.response.data.message);
        });
    }
  },
}
</script>

<style>
.usuario {
  display: grid;
  max-width: 400px;
  margin: 40px auto;
  grid-gap: 30px;
  padding: 20px;
}
</style>