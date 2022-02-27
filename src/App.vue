<template>
  <router-view></router-view>
</template>

<style lang="scss">
@import 'normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

* {box-sizing: border-box;}

#app {
  font-family: Audiowide, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: #111;
  min-height: 100vh;
}

a{
  color: #ed2121;
}
</style>

<script setup lang="ts">
import Header from './components/Header.vue'
</script>
