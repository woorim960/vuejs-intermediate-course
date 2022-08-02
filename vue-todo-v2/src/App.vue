<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:todoItems="todoItems"></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data: function() {
    return {
      todoItems: [],
    }
  },
  methods: {
    addTodo: function(newTodoItem) {
      const obj = {
        completed: false,
        item: newTodoItem
      };

      localStorage.setItem(newTodoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeTodo: function(todo, idx) {
      localStorage.removeItem(todo);
      this.todoItems.splice(idx, 1);
    },
    toggleComplete: function(todo) {
      todo.completed = !todo.completed;
      localStorage.removeItem(todo.item);
      localStorage.setItem(todo.item, JSON.stringify(todo));
    }
  },
  created: function() {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) !== 'loglevel:webpack-dev-server')
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
