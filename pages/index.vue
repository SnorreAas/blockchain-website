<script>
export default {
  name: "Home",
  transition: {
    name: "fade",
    mode: "out-in",
    duration: 1000,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<template>
  <transition name="fade">
    <nuxt-link to="home">
      <div class="Home">
        <h1 class="heading">FORGOTT3N</h1>
        <h1 class="heading">WORLDS</h1>
      </div>
    </nuxt-link>
  </transition>
</template>

<style lang="sass">
.fade-enter-active,
.fade-leave-active
  transition-property: opacity
  transition-timing-function: ease-in-out
  transition-duration: 1000ms
.fade-enter,
.fade-leave-to
  opacity: 0
.Home
  background: radial-gradient(ellipse at bottom, #212121 0%, #212121 100%)
  position: relative
  height: 100vh
  width: 100vw
  margin: 0
  cursor: pointer

// @import url('https://fonts.googleapis.com/css?family=Montserrat:900');

.heading
  margin: 0
  font-family: 'Montserrat', sans-serif
  font-size: 20vh
  letter-spacing: 1vw
  position: absolute
  top: 15vh
  left: 50%
  transform: translateX(-50%)
  color: white
  background: url('https://ipfs.moralis.io:2053/ipfs/QmYTxjkHg3SQAQ6B1LaKzaVUv2Z1UphXeAk8WeWNEkNDk2/images/0000000000000000000000000000000000000000000000000000000000000007.png')
  background-size: auto 200%
  background-clip: text
  text-fill-color: transparent
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent
  animation: shine 10s linear infinite
  &:nth-child(2)
    top: 50vh
  @keyframes shine
    from
      background-position: center 0
    to
      background-position: center 200%
</style>
