<template>
  <section class="card-section">
    <div class="card">
      <img :src="imageSrc" alt="">
      <h2>{{leilao.data.name}}</h2>
      <div class="card-infos"><img class="icon" src="../assets/whatsapp.png" alt=""><p>{{leilao.data.phone}}</p></div>
      <div class="card-infos" ><img class="icon" src="../assets/calendario.png" alt=""><p>{{leilao.data.date}}</p></div>
      <div class="card-infos"><img class="icon" src="../assets/pin.png" alt=""><p>{{leilao.data.city}}</p></div>
      <a href="https://bis365.com.br/bid365/storage/catalogs/wlf2FPSZEmJy2fRxy3sfERdM8urA8l11oSuUQpWu.pdf" target="_blank" class="btn" >Catálogo</a>
      <button class="btn">Regulamento</button>
    </div>
    <div class="card-video">
      <h2>Mais informações:</h2>
      <p>Confira alguns itens que estarão disponíveis no leilão.</p>
      <iframe width="560" height="315" :src="linkUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </section>
</template>

<script>
  import { api } from "../components/services.js"

export default {
  name: "LeilaoView",
  props: ["id"],
  data() {
    return {
      leilao: null,
      linkUrl: null,
      imageSrc: null,
    }
  },
  methods: {
      getLeiloes() {
        api.get(`https://bis365.com.br/bid365/api/v1/auctions/${this.id}`).then(response => {
            this.leilao = response.data
            this.linkUrl = response.data.data.link.replace("watch?v=", "embed/")
            console.log(response.data.data.image)
            this.imageSrc = "https://bis365.com.br/bid365/storage/"+response.data.data.image
            console.log(this.imageSrc)
        })
      }
  },
  created() {
      this.getLeiloes()
  },
}
</script>

<style scoped>
.card-section{
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
.card-video {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 30px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
  margin-left: 40px;
  flex: 0;
}
.card-video p, h2 {
  align-self: start;
  margin-bottom: 20px;
}
.card {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 30px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
  max-width: 400px;
}
.card img {
  border-radius: 4px;
  max-width: 300px;
  align-self: center;
}
h2 {
  font-size: 1.2rem;
  color: #030303;
  margin-top: 20px;
  text-align: center;
}
p{
  margin-top: 10px;
  text-align: center;
  font-size: 1.1rem;
}
.icon {
  width: 25px;
  display: inline-block;
}
.card-infos {
  display: flex;
  justify-content: center;
  padding: 10px 0;
}
.card-infos p {
  margin-left: 10px;
}
.btn{
  width: 60%;
  align-self: center;
  margin-top: 20px;
}
</style>