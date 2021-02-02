<template>
  <div id="app">
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  created: function(){
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0").then(res => {
      console.log(res.data.results)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
