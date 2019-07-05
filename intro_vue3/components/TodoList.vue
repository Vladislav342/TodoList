
<template>
  <div class="todo-list-wrapper">
    <ul>
      <TodoItem
        v-for="todo of todos"
        :key="todo.id"
        :todo="todo"
      />
    </ul>
  </div>
</template>

<script>
  import TodoItem from "./TodoItem";
  import { mapGetters } from 'vuex';
  export default {
    name: "TodoList",
    components: { TodoItem },
    computed: mapGetters({
      todos: 'Todo/getTodoList'
    }),
    beforeCreate() {
    },
    created() {
    },
    mounted() {},
    updated() {
    },
  }
</script>

<style scoped>
  .todo-list-wrapper{
    width: 30%;
    margin: 30px auto;
  }

    ul{
      list-style: none;
      margin: 0;
      padding: 0;
    }

</style>
