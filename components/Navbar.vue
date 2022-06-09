<script>
import detectEthereumProvider from "@metamask/detect-provider";
import twitter from "~/assets/images/twitter_icon.png";
import SocialIcon from "./SocialIcon.vue";
export default {
  components: { SocialIcon },
  name: "Navbar",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  computed: {
    selectedAddress() {
      if (this.connected) {
        const user = this.$Moralis.User.current();
        let address = user.attributes.ethAddress;
        let start = address.substring(0, 6);
        let end = address.substring(38, 42);
        return (start + "..." + end).toUpperCase();
      }
      return "";
    },
    connected() {
      return this.$store.state.connected;
    },
  },
  methods: {
    logOut() {
      this.$Moralis.User.logOut().then(() => {
        this.$store.commit("setConnected", false);
        window.location.reload();
      });
    },
  },
};
</script>

<template>
  <div class="Navbar">
    <div class="Navbar__inner">
      <div class="logo">{{ title }}</div>
      <p v-if="connected" @click="logOut()">
        {{ selectedAddress }}
      </p>
      <p else></p>
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
    p
      color: white
      margin-right: 20px
      cursor: pointer
      &:hover
        color: #33A6EF
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
