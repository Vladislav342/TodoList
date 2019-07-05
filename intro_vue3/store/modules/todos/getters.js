export default {
  getTodoList: state => state.items,
  getDoneTodoList: state => state.items.filter(todo => todo.isDone),
  getNotDoneTodoList: state => state.items.filter(todo => !todo.isDone),
}
