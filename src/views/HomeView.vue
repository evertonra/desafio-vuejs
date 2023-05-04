<template>
  <section>
    <img class="banner" src="../assets/banner1.jpg" alt="">
    <LeiloesAoVivo />
    
    <AgendaDeLeiloes />

  </section>
</template>

<script>
import AgendaDeLeiloes from '../components/AgendaDeLeiloes.vue';
import LeiloesAoVivo from '../components/LeiloesAoVivo.vue';

export default {
  name: "home-view",
  components: {
    AgendaDeLeiloes,
    LeiloesAoVivo,
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
}
h1 {
  font-size: 2rem;
  color: #87f;
  margin-top: 40px;
  text-align: center;
}

</style>