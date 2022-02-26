<template>
  <Header />
  <IntroContent />
</template>

<style lang="scss">
@import 'normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

#app {
  font-family: Audiowide, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: #111;
  height: 100vh;
}
</style>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from '@/components/Header.vue'
import IntroContent from '@/components/IntroContent.vue'
</script>
