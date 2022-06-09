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
  data() {
    return {
      slides: [
        {
          image:
            "https://images.nightcafe.studio/jobs/BEusb6MmsB0rYxgsFh3V/BEusb6MmsB0rYxgsFh3V.jpg?tr=w-1600,c-at_max",
        },
        {
          image:
            "https://images.nightcafe.studio/jobs/gd8K5look1EP8kJXQQNb/gd8K5look1EP8kJXQQNb.jpg?tr=w-1600,c-at_max",
        },
        {
          image:
            "https://images.nightcafe.studio/jobs/RqYXtVGJEpwIV4BcLp72/RqYXtVGJEpwIV4BcLp72.jpg?tr=w-1600,c-at_max",
        },
        {
          image:
            "https://images.nightcafe.studio/jobs/oMnmCVSLA7i0bLOrniX1/oMnmCVSLA7i0bLOrniX1.jpg?tr=w-1600,c-at_max",
        },
        {
          image:
            "https://kajsotala.fi/assets/2021/07/scifi-fighting-fantasy.jpg",
        },
        {
          image:
            "https://lh3.googleusercontent.com/r7CLDm18fCaFzrwl7D0D5BQnn-0WYcrtq1DnUEFw55HCbQs10LkMJ7kj9FjirqQ5w53M3yz4AkOuV8rtlJKbJLFZX3SwAPT5uHjI=w600",
        },
        {
          image:
            "https://images.nightcafe.studio/jobs/fDLPsiB83zuY6CfyDCGx/fDLPsiB83zuY6CfyDCGx.jpg?tr=w-1600,c-at_max",
        },
        {
          image: "https://pbs.twimg.com/media/FKzGezmaAAEWKRR.jpg:large",
        },
      ],
      ctas: [
        { text: "Join our Discord", link: "https://discord.gg/sZjqgm3zfv" },
      ],
      loading: false,
      contract_abi: abi,
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
    mint() {
      if (this.connected) {
        const user = this.$Moralis.User.current();
        let address = user.attributes.accounts[0];
        let contract_address = "0x279380C88AF1E7eba81EBA98ebeC1fb17263c943";
        let options = {
          contractAddress: "0x279380C88AF1E7eba81EBA98ebeC1fb17263c943",
          functionName: "mint",
          _mintAmount: "1",
          abi: this.contract_abi,
          params: {
            _to: address,
            _mintAmount: 1,
          },
        };
        this.executeMint(options);
      }
      alert("You must connect your wallet to mint!");
    },
  },
};
</script>

<template>
  <div class="App">
    <Hero
      :title="{ start: 'AI GOBLINS', end: 'NFT COLLECTION' }"
      subtitle="You don't find degen playz.. They find you.."
      :buy="true"
    >
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
    </Hero>
    <div class="Slider-wrapper">
      <Slider :slides="slides" />
    </div>
    <TitledContainer title="Not a Roadmap">
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
    </TitledContainer>
  </div>
</template>

<style lang="sass">
.App
  background: #212121

.Slider-wrapper
  padding: 130px 0px 80px

.buyCta-wrapper
  @media screen and (max-width: 600px)
    width: 100%
</style>
