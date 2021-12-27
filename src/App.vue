<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";

const Component = Vue.extend({
  name: 'App'
})

export default Component;
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
