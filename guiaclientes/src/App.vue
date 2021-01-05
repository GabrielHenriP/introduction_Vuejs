<template>
  <div id="app">
    <h1>Guia Clientes</h1>
    <input type="text" v-model="fulano.nome" >
    <Cliente :cliente="fulano" :showIdade="false"/>
    <Cliente :cliente="ciclano" :showIdade="true" />
    
  </div>
</template>

<script>
import Cliente from './components/Cliente';


export default {
  name: 'App',
  data(){
    return{
      nomeDoVictor: "Victor",
      fulano: {
        nome: "fulano",
        email: "f@f.com",
        idade:22
      },
      ciclano: {
        nome: "ciclano",
        email: "c@c.com",
        idade:55
      }
    }
  },
  components: {
    Cliente,
    
  }
}
</script>
    

<style>

</style>
