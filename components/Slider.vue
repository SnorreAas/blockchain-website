<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
export default {
  name: 'Slider',
  components: {
    Carousel3d,
    Slide
  },
  props: {
    slides: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<template>
  <carousel-3d :border="0" :perspective="0" :display="7" :autoplay="true" :autoplayHoverPause="true" :loop="true" height="350px">
    <slide
      v-for="(item, index) in slides"
      :key="index"
      :index="index"
    >
      <img :src="item.image" alt="Slider image" class="Slider--image">
    </slide>
  </carousel-3d>
</template>

<style lang="sass">

  .Slider
    &--image
      object: cover
      width: 100%
      height: 100%
      border-radius: 15px


</style>
