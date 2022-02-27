<template>
  <Header />
  <router-view></router-view>
</template>

<style lang="scss">
@import 'normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Athiti:wght@400;700&display=swap');

* {box-sizing: border-box;}

#app {
  font-family: Audiowide, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background: #111;
  min-height: 100vh;
}

.page {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 10px;
}

p{
  font-family: 'Athiti', sans-serif;
  font-size: 20px;
  line-height: 1.6;
  color: #eee
}

a{
  color: rgba(#ed2121, .8);
}

img{
  max-width: 100%;
}

@media (min-width: 880px){
  .row-50-50{
    display: flex;
    .column{
      width: 50%;
      padding: 0 20px
    }

    &.reverse{
      flex-direction: row-reverse;
    }
  }
}
</style>

<script setup lang="ts">
import Header from './components/Header.vue'
</script>
