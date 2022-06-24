<script>
// const web3 = new Web3(window.ethereum);
import abi from "@/assets/abi.json";

export default {
  name: "index",
  transition: {
    name: "fade",
    mode: "out-in",
  },
  data() {
    return {
      slides: [
        {
          image:
            "https://ipfs.moralis.io:2053/ipfs/Qmag3mQnw8QmyYiVfddzyQzVcFZbxuaMnfAS3Yenhz3We1/images/0000000000000000000000000000000000000000000000000000000000000001.png",
        },
        {
          image:
            "https://ipfs.moralis.io:2053/ipfs/Qmag3mQnw8QmyYiVfddzyQzVcFZbxuaMnfAS3Yenhz3We1/images/0000000000000000000000000000000000000000000000000000000000000002.png",
        },
        {
          image:
            "https://ipfs.moralis.io:2053/ipfs/Qmag3mQnw8QmyYiVfddzyQzVcFZbxuaMnfAS3Yenhz3We1/images/0000000000000000000000000000000000000000000000000000000000000003.png",
        },
        {
          image:
            "https://ipfs.moralis.io:2053/ipfs/Qmag3mQnw8QmyYiVfddzyQzVcFZbxuaMnfAS3Yenhz3We1/images/0000000000000000000000000000000000000000000000000000000000000004.png",
        },
        {
          image:
            "https://ipfs.moralis.io:2053/ipfs/Qmag3mQnw8QmyYiVfddzyQzVcFZbxuaMnfAS3Yenhz3We1/images/0000000000000000000000000000000000000000000000000000000000000005.png",
        },
        {
          image:
            "https://ipfs.moralis.io:2053/ipfs/Qmag3mQnw8QmyYiVfddzyQzVcFZbxuaMnfAS3Yenhz3We1/images/0000000000000000000000000000000000000000000000000000000000000006.png",
        },
        {
          image:
            "https://ipfs.moralis.io:2053/ipfs/Qmag3mQnw8QmyYiVfddzyQzVcFZbxuaMnfAS3Yenhz3We1/images/0000000000000000000000000000000000000000000000000000000000000007.png",
        },
        {
          image:
            "https://ipfs.moralis.io:2053/ipfs/Qmag3mQnw8QmyYiVfddzyQzVcFZbxuaMnfAS3Yenhz3We1/images/0000000000000000000000000000000000000000000000000000000000000008.png",
        },
        {
          image:
            "https://ipfs.moralis.io:2053/ipfs/Qmag3mQnw8QmyYiVfddzyQzVcFZbxuaMnfAS3Yenhz3We1/images/0000000000000000000000000000000000000000000000000000000000000009.png",
        },
        {
          image:
            "https://ipfs.moralis.io:2053/ipfs/Qmag3mQnw8QmyYiVfddzyQzVcFZbxuaMnfAS3Yenhz3We1/images/0000000000000000000000000000000000000000000000000000000000000010.png",
        },
      ],
      ctas: [
        { text: "Join our Discord", link: "https://discord.gg/sZjqgm3zfv" },
      ],
      loading: false,
      contract_abi: abi,
      contract_address: "0xEdb0b270666c3E36DCcA000DCEefca2565415C4B",
      currentUser: null,
    };
  },
  computed: {
    connected() {
      return this.$store.state.connected;
    },
  },
  methods: {
    connectWallet() {
      this.$Moralis.authenticate().then(() => {
        this.$store.commit("setConnected", true);
      });
    },
    async executeMint(options) {
      await this.$Moralis.executeFunction(options);
    },
    mintNotLive() {
      alert("Mint not live yet.. Stay tuned!");
    },
    mint() {
      const user = this.$Moralis.User.current();
      let address = user.attributes.ethAddress;
      let options = {
        contractAddress: this.contract_address,
        functionName: "mint",
        _mintAmount: "1",
        abi: this.contract_abi,
        params: {
          _to: address,
          _mintAmount: 1,
        },
      };
      this.executeMint(options);
    },
    mintAllowList() {
      const user = this.$Moralis.User.current();
      let address = user.attributes.ethAddress;
      let options = {
        contractAddress: this.contract_address,
        functionName: "mintAllowList",
        _mintAmount: "1",
        abi: this.contract_abi,
        params: {
          _to: address,
          numberOfTokens: 1,
        },
      };
      this.executeMint(options);
    },
    pausedMint() {
      alert("Mint is not live yet");
    },
  },
  // middleware({ redirect }) {
  //   return redirect("/");
  // },
};
</script>

<template>
  <div class="App">
    <Navbar title="FORGOTT3N WORLDS" />
    <Hero
      :title="{ start: 'FORGOTT3N', end: 'WORLDS' }"
      subtitle="A journey into the unknown begins. A new world, in a different time and dimension. Still, something feels familiar..."
      :buy="true"
    >
      <div v-if="connected" class="buyCta-wrapper">
        <BuyCta label="Mint here" :disabled="loading" @clicked="mint()" />
        <br />
        <br />
        <br />
        <BuyCta
          label="Mint allow list here"
          :disabled="loading"
          @clicked="mintAllowList()"
        />
        <BuyCta
          label="Coming soon.."
          :disabled="loading"
          @clicked="mintNotLive()"
        />
      </div>
      <div v-else class="buyCta-wrapper">
        <BuyCta
          label="Connect wallet"
          :disabled="loading"
          @clicked="connectWallet()"
        />
      </div>
    </Hero>
    <!-- <div class="Tiles-wrapper">
      <Tiles />
    </div> -->
    <div class="Slider-wrapper">
      <Slider :slides="slides" />
    </div>
    <!-- <TitledContainer title="Not a Roadmap">
      <p><span class="checked">✓</span> Degen contract</p>
      <p><span class="checked">✓</span> Free mint</p>
      <p><span class="checked">✓</span> Degen tweeting</p>
      <p><span>✓</span> Degen marketing</p>
      <p><span>✓</span> ?</p>
      <div class="Hero--wrapper" style="margin-top: 120px">
        <div v-if="connected" class="buyCta-wrapper">
          <BuyCta label="Mint here" :disabled="loading" @clicked="mint()" />
        </div>
        <div v-else class="buyCta-wrapper">
          <BuyCta
            label="Connect wallet"
            :disabled="loading"
            @clicked="connectWallet()"
          />
        </div>
      </div>
    </TitledContainer> -->
    <Footer />
  </div>
</template>

<style lang="sass">
.fade-enter-active,
.fade-leave-active
  transition-property: opacity
  transition-timing-function: ease-in-out
  transition-duration: 500ms
.fade-enter,
.fade-leave-to
  opacity: 0
.App
  background: #212121

.Tiles-wrapper
  // padding: 0px 100px
  margin-top: -200px
  @media screen and (max-width: 800px)
    margin-top: -70px

.Slider-wrapper
  padding: 80px 0px 80px

.buyCta-wrapper
  @media screen and (max-width: 600px)
    width: 100%
</style>
