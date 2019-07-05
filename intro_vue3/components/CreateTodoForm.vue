<template>
  <b-form class="mb-3 add-form" @submit.prevent="onAddTodo">
    <div class="input-wr">
      <b-input
        id="inline-form-input-name"
        class="mr-sm-2"
        v-model="name"
        name="name"
        v-validate="'required'"
        :state="!!errors.has('name') ? false : ''"
        placeholder="Todo Name"
        data-vv-as="Amount"
      ></b-input>
      <b-form-invalid-feedback :state="errors.has('name')">
        {{ errors.first('name') }}
      </b-form-invalid-feedback>
    </div>
    <b-button type="submit" variant="primary">Add</b-button>
  </b-form>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    name: "CreateTodoForm",
    data() {
      return {
        name: ''
      }
    },
    methods: {
      ...mapActions({
        add: 'Todo/addTodo'
      }),
      async onAddTodo() {
        const vResult = await this.$validator.validateAll();
        if (vResult) {
          this.add(this.name);
          this.name = '';
        }
      },
    }
  }
</script>

<style scoped>
  .add-form {
    display: flex;
    width: 600px;
    margin: 0 auto;
    padding-top: 10px;
  }
    .input-wr{
      width: 100%;
      margin-right: 10px;
    }
</style>
