<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearAll">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearAll: function () {
      this.$store.commit("clearAll");
    },
  },
};
</script>

<style>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}

.clearAllContainer:hover {
  cursor: pointer;
}

.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>
