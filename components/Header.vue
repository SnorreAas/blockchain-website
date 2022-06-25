<script>
export default {
  name: "Header",
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require("@/assets/images/bg.png")})`,
      },
    };
  },
};
</script>

<template>
  <div class="Header" :style="cssProps">
    <!-- <div class="blur-filter" /> -->
    <slot />
  </div>
</template>

<style lang="sass">
.Header
  // background: red
  position: fixed
  bottom: 0
  height: 100%
  width: 100%
  z-index: -1
  background-repeat: no-repeat
  background-size: cover

.blur-filter
  width: 100%
  height: 100%
  background: #212121
  opacity: 0.5
</style>
