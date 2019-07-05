import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./mutation-types";

export default {
  [ADD_TODO](state, todo) {
    state.items.push(todo);
  },
  [DELETE_TODO](state, id) {
    const index = state.items.findIndex(item => item.id === id);
    state.items.splice(index, 1);
  },
  [EDIT_TODO](state, { id, todo }) {
    const index = state.items.findIndex(item => item.id === id);
    state.items.splice(index, 1, todo);
  }
}
