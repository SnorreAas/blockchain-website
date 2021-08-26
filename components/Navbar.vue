<script>
import twitter from '~/assets/images/twitter_icon.png'
import SocialIcon from './SocialIcon.vue'
export default {
  components: { SocialIcon },
  name: 'Navbar',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      twitter
    }
  }
}
</script>

<template>
  <div class="Navbar">
    <div class="Navbar__inner">
      <div class="logo">{{title}}</div>
      <div class="icons">
        <social-icon />
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  .Navbar
    width: 100%
    background: #212121
    padding: 40px 0
    &__inner
      // background: blue
      align-items: center
      max-width: 1200px
      @media screen and (min-width: 600px)
        padding: 0 64px
      padding: 0 32px
      margin: 0 auto
      display: flex
      .logo
        display: block
        width: 100%
        font-family: "Integral",system-ui
        font-size: 24px
        font-weight: 800
        line-height: 1
        text-transform: uppercase
        color: #ffffff
      .icons
        // display: flex
        // background-image: cover
        // background-repeat: no-repeat
        // margin-left: auto
        // width: 50px
        // height: 50px
        // border-radius: 50%
        // background: #ffffff

</style>
