<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todoItems" v-bind:key="todo.item">
        <i class="checkBtn fas fa-check" v-bind:class="{ checkBtnCompleted: todo.completed }" v-on:click="toggleComplete(todo, index)"></i>
        <span v-bind:class="{ textCompleted: todo.completed }">{{ todo.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todo, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: [],
    }
  },
  methods: {
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

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top:0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
}
</style>