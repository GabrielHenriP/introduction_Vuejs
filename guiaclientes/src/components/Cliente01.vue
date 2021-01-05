<template>
  <div class="container">
    <input type="text" v-model="nome">
    <hr>
    <h2>Cliente: {{nome}} - componente</h2>
    <h3>descrção do cliente</h3>    
  </div>
</template>

<script>
export default {
  data(){
    return{
      nome: "gab",
      descricao:"fjjjjjjjj",
      numero:"",
      email: "",
      idade:0,
    }
  }
  
}
</script>

<style scoped>
  .container {
    color: rgb(55, 52, 58);
    background-color: cornsilk;
    border-radius: 10px;
    margin-bottom: 10px;
  }
</style>