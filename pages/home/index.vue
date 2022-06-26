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
        _mintAmount: "2",
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
    <Header />
    <Navbar title="FORGOTT3N WORLDS" />
    <Hero
      :title="{ start: 'ƑටའƓටͲͲӠហ', end: 'చටའꝈᎠϚ' }"
      subtitle="Ⱥ ʝօմɾղҽվ ìղէօ էհҽ մղҟղօաղ ҍҽցìղʂ. Ⱥ ղҽա աօɾӀժ, ìղ ą ժìƒƒҽɾҽղէ էìʍҽ ąղժ ժìʍҽղʂìօղ. ϚէìӀӀ, ʂօʍҽէհìղց ƒҽҽӀʂ ƒąʍìӀìąɾ..."
      :buy="true"
    >
      <div v-if="connected" class="buyCta-wrapper">
        <!-- <BuyCta label="Ɱìղէ հҽɾҽ" :disabled="loading" @clicked="mint()" />
        <br />
        <br />
        <br />
        <BuyCta
          label="Ɱìղէ ąӀӀօա Ӏìʂէ"
          :disabled="loading"
          @clicked="mintAllowList()"
        /> -->
        <BuyCta
          label="↻օʍìղց ʂօօղ.."
          :disabled="loading"
          @clicked="mintNotLive()"
        />
        <p><mark>Ꭰօ վօմ ժąɾҽ ʂէҽք ìղէօ էհҽ մղҟղօաղ..?</mark></p>
      </div>
      <div v-else class="buyCta-wrapper">
        <BuyCta
          label="Connect wallet"
          :disabled="loading"
          @clicked="connectWallet()"
        />
      </div>
    </Hero>
    <div class="Slider-wrapper">
      <!-- <p>Ⱥʂ օղҽ էąӀҽ ҽղժʂ, ąղօէհҽɾ ҍҽցìղʂ</p> -->
      <Slider :slides="slides" />
    </div>
    <TitledContainer title="Ƕąքքҽղìղցʂ">
      <p><span class="checked">✓</span> చҽҍʂìէҽ Ӏąմղçհ</p>
      <p><span>✓</span> ↻օղէɾąçէ ժҽքӀօվʍҽղէ</p>
      <p><span>✓</span> చꝈ ʍìղէ</p>
      <p><span>✓</span> քմҍӀìç ʍìղէ</p>
      <p><span>✓</span> ?</p>
    </TitledContainer>
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
  background: transparent

.Tiles-wrapper
  margin-top: -200px
  @media screen and (max-width: 800px)
    margin-top: -70px

.Slider-wrapper
  padding: 120px 40px 80px
  margin: 0 auto
  background: #212121
  max-width: 1072px
  opacity: 0.9

.buyCta-wrapper
  p
    margin: 0 5px
    mark
      background: #212121
      opacity: 0.9
      color: #fff
  margin-bottom: 30px
  @media screen and (max-width: 600px)
    width: 100%
</style>
