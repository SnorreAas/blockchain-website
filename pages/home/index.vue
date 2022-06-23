<script>
// const web3 = new Web3(window.ethereum);
// import fox1 from "~/assets/images/Fox_7.png";
// import fox2 from "~/assets/images/Fox_8.png";
// import fox3 from "~/assets/images/Fox_16.png";
// import fox4 from "~/assets/images/Fox_17.png";
// import fox5 from "~/assets/images/Fox_18.png";
// import fox6 from "~/assets/images/Fox_19.png";
// import fox7 from "~/assets/images/Fox_21.png";
// import fox8 from "~/assets/images/Fox_30.png";
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
            "https://ipfs.moralis.io:2053/ipfs/QmYTxjkHg3SQAQ6B1LaKzaVUv2Z1UphXeAk8WeWNEkNDk2/images/0000000000000000000000000000000000000000000000000000000000000001.png",
        },
        {
          image:
            "https://ipfs.moralis.io:2053/ipfs/QmYTxjkHg3SQAQ6B1LaKzaVUv2Z1UphXeAk8WeWNEkNDk2/images/0000000000000000000000000000000000000000000000000000000000000002.png",
        },
        {
          image:
            "https://ipfs.moralis.io:2053/ipfs/QmYTxjkHg3SQAQ6B1LaKzaVUv2Z1UphXeAk8WeWNEkNDk2/images/0000000000000000000000000000000000000000000000000000000000000003.png",
        },
        {
          image:
            "https://ipfs.moralis.io:2053/ipfs/QmYTxjkHg3SQAQ6B1LaKzaVUv2Z1UphXeAk8WeWNEkNDk2/images/0000000000000000000000000000000000000000000000000000000000000004.png",
        },
        {
          image:
            "https://ipfs.moralis.io:2053/ipfs/QmYTxjkHg3SQAQ6B1LaKzaVUv2Z1UphXeAk8WeWNEkNDk2/images/0000000000000000000000000000000000000000000000000000000000000005.png",
        },
        {
          image:
            "https://ipfs.moralis.io:2053/ipfs/QmYTxjkHg3SQAQ6B1LaKzaVUv2Z1UphXeAk8WeWNEkNDk2/images/0000000000000000000000000000000000000000000000000000000000000006.png",
        },
        {
          image:
            "https://ipfs.moralis.io:2053/ipfs/QmYTxjkHg3SQAQ6B1LaKzaVUv2Z1UphXeAk8WeWNEkNDk2/images/0000000000000000000000000000000000000000000000000000000000000007.png",
        },
        {
          image:
            "https://ipfs.moralis.io:2053/ipfs/QmYTxjkHg3SQAQ6B1LaKzaVUv2Z1UphXeAk8WeWNEkNDk2/images/0000000000000000000000000000000000000000000000000000000000000008.png",
        },
      ],
      ctas: [
        { text: "Join our Discord", link: "https://discord.gg/sZjqgm3zfv" },
      ],
      loading: false,
      contract_abi: abi,
      contract_address: "0x855ae3BF6a64781164f4D38BB54Dd86e0A944DB6",
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
        <!-- <BuyCta label="Mint here" :disabled="loading" @clicked="mint()" />
        <br />
        <BuyCta
          label="Mint allow list here"
          :disabled="loading"
          @clicked="mintAllowList()"
        /> -->
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
