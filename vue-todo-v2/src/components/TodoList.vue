<template>
  <div>
    <ul>
      <li v-for="todo in todoItems" v-bind:key="todo">{{ todo }}</li>
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
  created: function() {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) !== 'loglevel:webpack-dev-server')
        this.todoItems.push(localStorage.key(i));
    }
  }
}
</script>

<style>

</style>