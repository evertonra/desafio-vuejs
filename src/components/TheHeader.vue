<template>
    <header>
        <nav>
            <router-link to="/" class="logo">
                <img src="@/assets/logo-dix.png" alt="Dix Digital">
            </router-link>  
            <div class="nav-menu">
                <router-link class="btn" to="/">Home</router-link>
                <router-link class="btn" to="/">Agenda de Leilões</router-link>
                <router-link class="btn" to="/">Resultados</router-link>
                <router-link v-if="$store.state.login" class="btn" to="/usuario">{{ nome }}</router-link>
                <router-link v-else class="btn" to="/login">Minha conta / Login</router-link>
            </div> 
        </nav>
    </header>
</template>

<script>
export default {
    name: "TheHeader",
    computed: {
        nome() {
            return this.$store.state.usuario.nome.replace(/ .*/, "")
        }
    }
}
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(30,60,90, .1);
  background: #1D4A81;
}
.nav-menu {
  display: flex;
}
.nav-menu .btn {
  margin-left: 15px;
  background: #1D4A81;
  box-shadow: none;
  border-radius: 0;
}
.nav-menu .btn:hover {
  margin-left: 15px;
  background: #D1512B;
  border-radius: 4px;
}
.logo {
  padding: 10px 0;
}
.logo img {
  width: 150px;
}
@media screen and (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: center;
  }
  .nav-menu {
    display: flex;
    flex-direction: column;
  }
  .btn {
    padding: 15px;
  }
  .nav-menu .btn {
  margin-left: 0;
}
}
@media (max-width:480px) {
  nav {
    flex-direction: column;
    align-items: center;
  }
  .nav-menu {
    display: flex;
    flex-direction: column;
  }
  .logo img {
  width: 200px;
  justify-self: center;
  }
  h2 {
    font-size: 1.4rem;
    margin-top: 20px;
  }
  a {
    font-size: 1rem;
  }
  .btn {
    padding: 5px;
  }
}
</style>