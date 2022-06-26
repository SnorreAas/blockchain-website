<script>
export default {
  name: "Header",
  computed: {
    connected() {
      return this.$store.state.connected;
    },
  },
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require("@/assets/images/bg-5.png")})`,
      },
      cssPropsConnected: {
        backgroundImage: `url(${require("@/assets/images/bg-7.png")})`,
      },
    };
  },
};
</script>

<template>
  <div class="Header" :style="connected ? cssProps : cssPropsConnected">
    <div class="blur-filter" />
    <Sparkle />
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
  transition: all 2s

.blur-filter
  width: 100%
  height: 100%
  background: #212121
  opacity: 0.65
</style>
