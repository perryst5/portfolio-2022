<template>
  <Header />
  <IntroContent msg="Test Message" />
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<style lang="scss">
body {
  margin: 0;
  h1 {
    color: red;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  padding-top: 60px;
  background: #333;
  height: 100vh;
  width: 100vh;
}
</style>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue'
import IntroContent from './components/IntroContent.vue'
</script>
