<template>
  <section class="container">
    <CreateTodoForm/>
    <TodoList/>
  </section>
</template>

<script>
  import TodoList from "../components/TodoList";
  import CreateTodoForm from "../components/CreateTodoForm";
  export default {
    components: { CreateTodoForm, TodoList },
    layout: 'home',
    head () {
      return {
        title: 'TODOS',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    },
  }
</script>
