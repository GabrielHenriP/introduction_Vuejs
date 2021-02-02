<template>
  <div class="todo-item" v-bind:class="{'is-complete': newTodo.completed}" >
    <p>
      <input type="checkbox" v-on:change="markComplete"> 
      {{todo.title}} 
      <button @click="$emit('del-todo', todo.id)" class="del" >X</button>
      </p>
  </div>
</template>

<script>
export default {
  name:"TodoItem",
  props: ["todo"],
  data(){
    return {
      newTodo: this.todo
    }
  },
  methods: {
    markComplete(){
      console.log(this.newTodo.completed)
      this.newTodo.completed = !this.newTodo.completed
    }
  }
}
</script>

<style scope>
  .todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }
  .is-complete {
    text-decoration: line-through;
  }
  .del{
    background: #ff0000;
    color: #fff;
    border:none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>