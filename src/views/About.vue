<template>
  <div class="page">
    <div class="row-50-50">
      <div class="column">
        <h2>Outside of Work</h2>
        <p>In my free time, I can be found around my home in Royal Oak, Michigan. I live with my girlfriend and my cat Zero. He's the white one in my gallery of selfies with cats.</p>
        <p>I enjoy going to concerts (mostly punk/indie/retrowave artists) and hanging out with my friends from college via video games like World of Warcraft and Halo Infinite.</p>
        <p>I developed a fandom of all things Michigan State athletics during my time at the University. Football and Basketball seasons are always fun for me.</p>
        <p>In the summer, I like to work from a family cottage located in Bear Lake, Michigan.</p>
      </div>
      <div class="column">
        <carousel :items-to-show="1" :arrows="true" :dots="true" :autoplay="5000">
          <slide :key="1">
            <img src="@/assets/cats/zero.jpg" alt="My cat Zero">
          </slide>
          <slide :key="2">
            <img src="@/assets/cats/bobby.jpg" alt="My Sister's cat Bobby">
          </slide>
          <slide :key="3">
            <img src="@/assets/cats/puma.jpg" alt="My Sister's cat Puma">
          </slide>

          <template #addons>
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
    
    <div class="row-50-50 reverse">
      <div class="column">
        <h2>Pandemic Project</h2>
        <p>During the pandemic, I had the idea to build a PC into the chasis of a Nintendo Entertainment System. It turns out, the NES is almost perfectly sized to fit a Mini-ITX Motherboard.</p>
        <p>I bought a broken NES online, emptied it of the original components, and set to installing my parts. I used a dremel to (very poorly) cut the hole in the back for the rear I/O. I soldered the power and reset buttons to the original board included with the NES, and found an external power supply that would supply enough power to the board.</p>
        <p>After assembly, I installed Manjaro (an Arch-based fork of Linux) onto the NVMe drive, and I was up and running. The NES has become my work computer, and it looks great on my desk.</p>
        <p>For the full parts list, see my <a href="https://pcpartpicker.com/user/perryst5/saved/#view=fJht3C">PCPartPicker</a> list.</p>
      </div>
      <div class="column">
        <carousel :items-to-show="1" :arrows="false" :dots="true" :autoplay="5000">
          <slide :key="1">
            <img src="@/assets/nes/open_nes.jpg" alt="The initial insides of the NES">
          </slide>
          <slide :key="2">
            <img src="@/assets/nes/terrible_dremel.jpg" alt="An admittedly terrible dremel job. Measure twice, cut once, still mess up">
          </slide>
          <slide :key="3">
            <img src="@/assets/nes/solder_time.jpg" alt="Steve's first time soldering">
          </slide>
          <slide :key="4">
            <img src="@/assets/nes/nes_assemble.jpg" alt="Assembly of the internal components">
          </slide>
          <slide :key="5">
            <img src="@/assets/nes/closed_up.jpg" alt="The NES is re-assembled">
          </slide>
          <slide :key="6">
            <img src="@/assets/nes/desk.jpg" alt="The desk at which I work">
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
section.carousel {
  margin-top: 20px;
}
</style>

<script lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { defineComponent } from 'vue'

export default defineComponent({
  name: "About",
  components: {
    Carousel,
    Slide,
    Pagination,
  }
});
</script>
