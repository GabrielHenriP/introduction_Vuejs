<template>
  <div id="app">
    <Header />
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Header from './components/layouts/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import axios from 'axios'

export default {
  name: 'App',
  components: {
    Header,
    Todos,
    AddTodo
  },
  data(){
    return {
      todos:[]
    }
  },
  methods: {
    deleteTodo(id){
      this.todos = this.todos.filter( todo => todo.id !== id)
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed
      })
        .then( res => this.todos = [...this.todos, res.data])
        .catch( e => console.log(e))
      
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=8')
      .then(res => this.todos = res.data)
      .catch( e => console.log(e))
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
  .btn:hover{
    background: #bbb;
    cursor: pointer;
  }
</style>
