import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./mutation-types";


function generateId() {
  return new Date().getTime();
}

export default {
  addTodo({ commit }, name) {
    commit(ADD_TODO, {
      name: name,
      isDone: false,
      id: generateId()
    });
  },
  deleteTodo({ commit }, id) {
    commit(DELETE_TODO, id);
  },
  editTodo({ commit }, newTodo) {
    commit(EDIT_TODO, newTodo);
  }
}
