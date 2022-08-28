const storage = {
  fetch() {
    const arr = [];
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) !== "loglevel:webpack-dev-server")
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    return arr;
  },
};

const state = {
  todoItems: storage.fetch(),
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  },
};

const mutations = {
  addTodo(state, newTodoItem) {
    const obj = {
      completed: false,
      item: newTodoItem,
    };

    localStorage.setItem(newTodoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  removeTodo: function (state, payload) {
    localStorage.removeItem(payload.todo.item);
    state.todoItems.splice(payload.idx, 1);
  },
  toggleComplete: function (state, payload) {
    state.todoItems[payload.idx].completed =
      !state.todoItems[payload.idx].completed;

    localStorage.removeItem(state.todoItems[payload.idx].item);
    localStorage.setItem(
      state.todoItems[payload.idx].item,
      JSON.stringify(state.todoItems[payload.idx])
    );
  },
  clearAll(state) {
    localStorage.clear();
    state.todoItems = [];
  },
};

export default { state, getters, mutations };
