<template>
  <section >
    <h1>Leiolões ao vivo:</h1>
    <div class="leiloes-ao-vivo" v-if="leiloes && leiloes.data.length"> 
          <div class="card-leiloes" v-for="leilao in leiloes.data" :key="leilao.id" >
            <router-link class="card" :to="{name: 'leilaoview', params:{id: leilao.id}}">
              <img :src="imagem + leilao.image" alt="">
              <h2>{{leilao.name}}</h2>
              <p>{{ leilao.date }}</p>
              <p>Assista ao leilão agora!</p>
              <button class="btn">Mais Informações</button>
            </router-link>
          </div>
    </div>
    <div v-else-if="leiloes && leiloes.data.length === 0">
      <p>Nenhum leilão ao vivo no momento. Tente mais tarde</p>
    </div>
      
  </section>
</template>

<script>
  import { api } from ".//services.js"

export default {
  name: "LeiloesAoVivo",
  props: ["id"],
    data() {
        return {
            leiloes: null,
            imagem: "https://bis365.com.br/bid365/storage/",
        }
    },
    methods: {   
      getLeiloesAoVivo() {
        api.get("https://bis365.com.br/bid365/api/v1/auctions/").then(response => {
          this.leiloes = response.data
        })
      },
    },
    created() {
        this.getLeiloesAoVivo()
    },
}
</script>

<style scoped>
.leiloes-ao-vivo {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
}
.card-leiloes a {
  margin: 20px 0;
}

.card img {
  border-radius: 4px;
}
.card-leiloes:hover {
  box-shadow: 0 6px 12px rgba(30,60,90, 0.2);
  transform: scale(1.05);
  position: relative;
  z-index: 1;
}
h1 {
  font-size: 2rem;
  color: #fff;
  text-align: center;
  background: #1D4A81;
  padding: 20px 40px;
  /* display: inline-block; */
}
h2 {
  font-size: 1.2rem;
  color: #030303;
  margin-top: 20px;
}
p {
  padding: 10px 0;
}

.card button {
  align-self: center;
}
.card-leiloes {
  margin-top: 40px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}
@media screen and (max-width: 1139px) {
  .leiloes-ao-vivo {
    max-width: 800px;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 768px) {
  .leiloes-ao-vivo {
    max-width: 500px;
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (max-width:480px) {
  .card-leiloes {
    margin-top: 20px;
  }
  .leiloes-ao-vivo {
    max-width: 300px;
    grid-gap: 0px;
  }
  h1 {
    font-size: 1.6rem;
  }
}
 

</style>