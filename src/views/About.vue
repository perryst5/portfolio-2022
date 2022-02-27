<template>
  <div class="page">
    <Header />
    <p>View my <a href="/">Resume</a></p>
    <div class="row-50-50">
      <div class="column">
        <h2>Stuff about me</h2>
      </div>
      <div class="column">
        <carousel :items-to-show="1" :arrows="true" :dots="true" :autoplay="5000">
          <slide v-for="cat in cats" :key="cat">
            <img :src="cat" />
          </slide>

          <template #addons>
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
    
    <div class="row-50-50 reverse">
      <div class="column">
        <h2>Stuff about NES</h2>
      </div>
      <div class="column">
        <carousel :items-to-show="1" :arrows="false" :dots="true" :autoplay="5000">
          <slide v-for="photo in nes" :key="photo">
            <img :src="photo" />
          </slide>

          <template #addons>
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
img{
  max-width: 100%;
}
.row-50-50{
  display: flex;
  .column{
    width: 50%;
  }

  &.reverse{
    flex-direction: row-reverse;
  }
}
</style>

<script lang="ts">
import Header from '@/components/Header.vue'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import { defineComponent } from 'vue'

export default defineComponent({
  name: "About",
  components: {
    Header,
    Carousel,
    Slide,
    Pagination,
  },
  setup() {
    const sliderSettings = {

    }
    const cats = [
      "src/assets/cats/zero.jpg",
      "src/assets/cats/bobby.jpg",
      "src/assets/cats/puma.jpg"
    ]

    const nes = [
      "src/assets/nes/open_nes.jpg",
      "src/assets/nes/terrible_dremel.jpg",
      "src/assets/nes/solder_time.jpg",
      "src/assets/nes/nes_assemble.jpg",
      "src/assets/nes/closed_up.jpg",
      "src/assets/nes/desk.jpg"
    ]

    return {
      cats,
      nes
    }
  }
});
</script>
