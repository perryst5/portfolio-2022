<template>
  <div id="wrapper">
    <div class="logo">
      <h1 class="steve">STEVE</h1>
      <h3 class="perry">Perry</h3>
    </div>
    <div class="coming-soon">
      Website coming soon
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Mr+Dafoe);
@import url(https://fonts.googleapis.com/css?family=Candal);
.logo {
  position: relative;
  text-align: left;
  padding-left: 30px;
  margin-bottom: 120px;
}

.coming-soon {
  text-align: left;
  font-size: 40px;
  padding-left: 30px;
}

.steve {
  position: relative;
  font-family: 'Candal', sans-serif;
  font-size: 180px;
  font-style: italic;
  -webkit-text-stroke: 0.1px #ed2121;
  color: #fff;
  text-shadow: -10px 10px 0px #ed2121;
  margin: 0;
}

.windows .steve {
  -webkit-text-stroke: 4px #ed2121;
}

.steve:before {
  content: '';
  position: absolute;
  height: 4px;
  width: 540px;
  top: 68px;
  left: 48px;
  background: #ed2121;
  box-shadow: -8px 13px #ed2121;
}

.windows .steve:before {
  left: 55px;
  width: 659px;
}

.steve:after {
  content: '';
  position: absolute;
  height: 4px;
  width: 540px;
  top: 94px;
  left: 36px;
  background: #ed2121;
  box-shadow: -4px 13px #ed2121;
}

.perry {
  position: absolute;
  left: 50px;
  top: 350px;
  font-family: 'Mr Dafoe', cursive;
  font-size: 130px;
  transform:rotate(-15deg);
  -ms-transform:rotate(-15deg); /* IE 9 */
  -webkit-transform:rotate(-15deg); /* Safari and Chrome */
  color: #ed2121;
  margin: 0;
  margin-top: -160px;
  padding-left: 430px;
  text-shadow: 1px 2px 0px #F9D2D2;
}

.windows .perry {
  margin-top: -200px;
}

</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "UnderConstruction",
  props: {
    msg: String
  },
  mounted() {
    if ( navigator.platform.indexOf('Win') != -1 ) {
      window.document.getElementById("wrapper").setAttribute("class", "windows");
    } else if ( navigator.platform.indexOf('Mac') != -1 ) {
      window.document.getElementById("wrapper").setAttribute("class", "mac");
    }
  }
});
</script>