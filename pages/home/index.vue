<script>
import abi from "@/assets/abi.json";

export default {
  name: "home",
  transition: {
    name: "fade",
    mode: "out-in",
    duration: 1000,
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
      contract_address: "0x31d54225e257cE17B97620B8E9F398c2a1A53030",
      currentUser: null,
      totalMinted: 0,
    };
  },
  computed: {
    connected() {
      return this.$store.state.connected;
    },
    computedTransition() {
      return this.connected && "fade";
    },
  },
  methods: {
    async fetchSupply() {
      // this.$Moralis.enableWeb3().then(async () => {
      //   let options = {
      //     contractAddress: this.contract_address,
      //     function_name: "totalSupply",
      //     abi: this.contract_abi,
      //   };
      //   let transaction =
      //     this.$Moralis.Web3API.native.runContractFunction(options);
      //   let res = await transaction;
      //   console.log(res);
      // });
      // this.$Moralis.enableWeb3().then(async () => {
      //   const options = {
      //     chain: "eth",
      //     address: this.contract_address,
      //     function_name: "totalSupply",
      //     abi: this.contract_abi,
      //     params: {},
      //   };
      //   const count = await this.$Moralis.executeFunction(options);
      //   console.log(count);
      // });
    },
    connectWallet() {
      this.$Moralis.authenticate().then(() => {
        this.$store.commit("setConnected", true);
      });
    },
    async executeFunction(options) {
      await this.$Moralis.executeFunction(options);
    },
    mintNotLive() {
      alert("Mint not live yet.. Stay tuned!");
    },
    claim() {
      const user = this.$Moralis.User.current();
      let address = user.attributes.ethAddress;
      let options = {
        contractAddress: this.contract_address,
        functionName: "claim",
        abi: this.contract_abi,
        params: {
          _to: address,
        },
      };
      this.executeFunction(options);
    },
    mint() {
      const user = this.$Moralis.User.current();
      let address = user.attributes.ethAddress;
      let options = {
        contractAddress: this.contract_address,
        functionName: "mint",
        abi: this.contract_abi,
        params: {
          _to: address,
          _mintAmount: 1,
        },
      };
      this.executeFunction(options);
    },
    mintAllowList() {
      const user = this.$Moralis.User.current();
      let address = user.attributes.ethAddress;
      let options = {
        contractAddress: this.contract_address,
        functionName: "mintAllowList",
        abi: this.contract_abi,
        params: {
          _to: address,
          numberOfTokens: 2,
        },
      };
      this.executeFunction(options);
    },
    pausedMint() {
      alert("Mint is not live yet");
    },
  },
  // mounted() {
  //   this.fetchSupply();
  // },
  // middleware({ redirect }) {
  //   return redirect("/");
  // },
};
</script>

<template>
  <transition name="fade">
    <div class="App">
      <Header />
      <Navbar title="ƑටའƓටͲͲӠហ ꝈȺβϚ" />
      <Hero
        :title="{ start: 'ƑටའƓටͲͲӠហ', end: 'చටའꝈᎠϚ' }"
        subtitle="Ⱥ ʝօմɾղҽվ ìղէօ էհҽ մղҟղօաղ ҍҽցìղʂ. Ⱥ ղҽա աօɾӀժ, ìղ ą ժìƒƒҽɾҽղէ էìʍҽ ąղժ ժìʍҽղʂìօղ. ϚէìӀӀ, ʂօʍҽէհìղց ƒҽҽӀʂ ƒąʍìӀìąɾ..."
        :buy="true"
      >
        <div v-if="connected" class="buyCta-wrapper">
          <a
            href="https://opensea.io/collection/forgott3n-worlds-v2"
            target="_blank"
            style="text-decoration: none"
          >
            <BuyCta label="βմվ օղ Oքҽղʂҽą" :disabled="loading" />
          </a>
          <BuyCta
            label="CӀąìʍ βąղղҽɾʂ հҽɾҽ"
            :disabled="loading"
            @clicked="claim()"
          />
          <!-- <BuyCta label="Ɱìղէ here" :disabled="loading" @clicked="mint()" /> -->
          <!-- <BuyCta
            label="↻օʍìղց ʂօօղ.."
            :disabled="loading"
            @clicked="mintNotLive()"
          /> -->
          <!-- <p>Ꭰօ վօմ ժąɾҽ ʂէҽք ìղէօ էհҽ մղҟղօաղ..?</p> -->
        </div>
        <div v-else class="buyCta-wrapper">
          <a
            href="https://opensea.io/collection/forgott3n-worlds-v2"
            target="_blank"
            style="text-decoration: none"
          >
            <BuyCta label="βմվ օղ օքҽղʂҽą" :disabled="loading" />
          </a>
          <BuyCta
            label="Connect wallet"
            :disabled="loading"
            @clicked="connectWallet()"
          />
        </div>
      </Hero>
      <div class="Slider-wrapper">
        <!-- <p>Ⱥʂ օղҽ էąӀҽ ҽղժʂ, ąղօէհҽɾ ҍҽցìղʂ</p> -->
        <!-- <p>Minted: {{ totalMinted }}/777</p>
        <br />
        <br /> -->
        <Slider :slides="slides" />
      </div>
      <TitledContainer title="įղƒօɾʍąէìօղ">
        <p><span>ｷ</span> ７𝟕7 Ҡҽվʂ աìӀӀ ҍҽ ąʂʂìցղҽժ. Ͳɾҽąէ էհҽʍ աìէհ çąɾҽ..</p>
        <p><span>ｷ</span> ȺӀӀօա Ӏìʂէ ʍìղէ աìӀӀ ҍҽ օքҽղ ƒօɾ 30 min</p>
        <p>
          <span>ｷ</span> քմҍӀìç ʍìղէ աìӀӀ ʂէąɾէ ահҽղ ȺӀӀօա Ӏìʂէ էìʍҽ ҽ×քìɾҽʂ
        </p>
        <p><span>ｷ</span> Ɱą× ʍìղէ ąʍօմղէ քҽɾ աąӀӀҽէ = Ӡ</p>
      </TitledContainer>
      <TitledContainer title="Ƕąքքҽղìղցʂ">
        <p>
          <span
            class="checked"
            :style="{ color: connected ? '#69C87C' : '#33a6ef' }"
            >✓</span
          >
          చҽҍʂìէҽ Ӏąմղçհ
        </p>
        <p>
          <span
            class="checked"
            :style="{ color: connected ? '#69C87C' : '#33a6ef' }"
            >✓</span
          >
          ↻օղէɾąçէ ժҽքӀօվʍҽղէ
        </p>
        <p>
          <span
            class="checked"
            :style="{ color: connected ? '#69C87C' : '#33a6ef' }"
            >✓</span
          >
          Ɠҽղҽʂìʂ çօӀӀҽçէìօղ Ӏąմղçհ
        </p>
        <p>
          <span
            class="checked"
            :style="{ color: connected ? '#69C87C' : '#33a6ef' }"
            >✓</span
          >
          βąղղҽɾ ↻օӀӀҽçէìօղ ↻Ӏąìʍ
        </p>
        <p><span>✓</span> Ⱥʂ օղҽ էąӀҽ ҽղժʂ, ąղօէհҽɾ ҍҽցìղʂ</p>
      </TitledContainer>
      <Footer />
    </div>
  </transition>
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
  p
    display: block
    text-align: center

.buyCta-wrapper
  display: flex
  @media screen and (max-width: 700px)
    display: block
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
