<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList 
      v-bind:todoItems="todoItems" 
      v-on:removeTodo="removeTodo"
      v-on:toggleComplete="toggleComplete"
    ></TodoList>
    <TodoFooter
      v-on:clearAll="clearAll"
    ></TodoFooter>
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
      localStorage.removeItem(todo.item);
      this.todoItems.splice(idx, 1);
    },
    toggleComplete: function(todo, idx) {
      this.todoItems[idx].completed = !this.todoItems[idx].completed;

      localStorage.removeItem(this.todoItems[idx].item);
      localStorage.setItem(this.todoItems[idx].item, JSON.stringify(this.todoItems[idx]));
    },
    clearAll: function() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
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
