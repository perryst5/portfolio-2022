<template>
  <header>
    <div class="logo">
      <div class="steve"><span>Steve</span></div><br /> 
      <div class="perry">Perry</div>
    </div>
    <nav>
      <router-link :to="{ path: '/' }">Home</router-link>
      <router-link :to="{ path: '/about' }">About</router-link>
      <router-link :to="{ path: '/contact' }">Contact</router-link>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Mr+Dafoe);
@import url(https://fonts.googleapis.com/css?family=Candal);
a {
  color: #42b983;
}

.logo {
  position: relative;
  text-align: center;
  width: 100%;
  margin-bottom: 80px;
}

.steve {
  position: relative;
  font-family: 'Candal', sans-serif;
  font-size: 80px;
  text-transform: uppercase;
  font-style: italic;
  -webkit-text-stroke: 0.1px #ed2121;
  color: #fff;
  text-shadow: -10px 10px 0px #ed2121;
  margin: 0;

  span {
    margin-left: -20px;
  }
}

.windows .steve {
  -webkit-text-stroke: 4px #ed2121;
}

.steve:before {
  content: '';
  position: absolute;
  height: 3px;
  width: 235px;
  top: 30px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: #ed2121;
  box-shadow: -2px 6px #ed2121;
}

.windows .steve:before {
  left: 55px;
  width: 659px;
}

.steve:after {
  content: '';
  position: absolute;
  height: 3px;
  width: 240px;
  top: 43px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: #ed2121;
  box-shadow: 0px 6px #ed2121;
}

.perry {
  position: absolute;
  left: 0;
  right: 0;
  top: 80px;
  font-family: 'Mr Dafoe', cursive;
  font-size: 80px;
  transform:rotate(-15deg);
  -ms-transform:rotate(-15deg); /* IE 9 */
  -webkit-transform:rotate(-15deg); /* Safari and Chrome */
  color: #ed2121;
  padding-right: 30px;
  text-shadow: 1px 2px 0px #F9D2D2;
}

.windows .perry {
  margin-top: -200px;
}
nav {
  display: flex;
  position: relative;
}
a {
  width: 100%;
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  border: 2px solid #fff;
  padding: 10px 4px;
  margin: 0 2px;

  &:hover, &:focus, &:active{
    background: rgba(#ed2121, .8);
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Header",
  props: {
    msg: String
  },
  mounted() {
    if ( navigator.platform.indexOf('Win') != -1 ) {
      window.document.getElementById("wrapper")!.setAttribute("class", "windows");
    } else if ( navigator.platform.indexOf('Mac') != -1 ) {
      window.document.getElementById("wrapper")!.setAttribute("class", "mac");
    }
  }
});
</script>