<template>
  <div class="container">
    <h4>Nome: {{cliente.nome}}</h4>
    <p>{{descricao}}</p>
    <p>Número: {{numero}}</p>
    <p>Email: {{cliente.email}}</p>
    <p v-if="showIdade == true">Idade: {{cliente.idade}}</p>
    <p v-else>Usuario escondeu a idade</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      descricao:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo neque dolorum officiis. Ex, ipsum voluptate sint corporis, incidunt, et sed a iste veritatis nostrum aperiam cupiditate nesciunt dolor beatae expedita.",
      numero:"22342423",
      email: "g@g.com",
    }
  },
  props:{
    cliente:Object,
    showIdade: Boolean
  }

  
  
}

</script>

<style scoped>
  .container {
      color: rgb(55, 52, 58);
      background-color: rgb(156, 151, 129);
      border-radius: 10px;
      margin-bottom: 10px;
      padding: 5px 2%;
  }
</style>