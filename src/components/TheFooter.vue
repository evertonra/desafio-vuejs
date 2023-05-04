<template>
  <footer> 
    <div class="footer">
      <router-link to="/" class="logo">
          <img src="@/assets/logo-dix.png" alt="Dix Digital">
      </router-link>
      <div class="nav-menu">
          <h2>Mapa do site</h2>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/">Agenda de leilões</router-link></li>
            <li><router-link to="/">Resultados</router-link></li>
            <li><router-link to="/login">Minha conta</router-link></li>
          </ul>
      </div>
    </div> 
  </footer>
</template>

<script>
export default {
    name: "TheFooter"
}
</script>

<style scoped>
footer {
  background: #1D4A81;
  padding: 15px 20px;
  text-align: center;
  font-size: 1.2rem;
  color: #fff;
  position: relative;
  margin-top: 40px;
}
.footer {
  align-content: center;
  display: flex;
  justify-content: space-around;
}
.logo {
  display: flex;
  align-content: center;
}
.logo img {
  width: 250px;
  align-self: center;
}
.nav-menu ul {
  margin: 20px 0 ;
}
.nav-menu ul li{
  margin-top: 10px;
  padding: 5px
}
.nav-menu ul li:hover{
  background: #D1512B;
  border-radius: 4px;
}
.nav-menu ul li a{
  color: #fff;
}
@media (max-width:480px) {
  footer {
    margin-top: 20px;
  }
  .footer {
  flex-direction: column;
  align-items: center;
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
}
</style>

