<template>
  <div id="app">
    <TheHeader/>
    <main id="main">
      <transition mode="out-in">
        <router-view/>
      </transition>
    </main>
    <TheFooter />
  </div>
</template>

<script>

import TheHeader from "./components/TheHeader.vue"
import TheFooter from "./components/TheFooter.vue"

export default ({
  components: {
    TheHeader,
    TheFooter
  },
  
  created() {
    document.title = "Desafio Vuejs"
  }
})
</script>


<style>
* {
  box-sizing: border-box;
}
body, ul, li, h1,h2,p {
  padding: 0px;
  margin: 0px;
}

ul {
  list-style: none;
}

body{
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: #345;
  background: #f3f3f3;
}
a {
  color: #345;
  text-decoration: none;
}
img {
  max-width: 100%;
  display: block;
}

.btn {
  display: block;
  padding: 10px 30px;
  background: #D1512B;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30,60,90, 0.2);
  transition: all .3s;
  border: none;
  font-family: Georgia, 'Times New Roman', Times, serif;
  cursor: pointer;
  z-index: 12;
}

.btn:hover {
  background: #e04d20;
  transform: scale(1.1);
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
#main {
  flex: 1;
}
label {
  margin-bottom: 5px;
}

input,
textarea {
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s;
  font-size: 1rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-bottom: 15px;
  width: 100%;
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  border-color: #e04d20;
}
</style>
