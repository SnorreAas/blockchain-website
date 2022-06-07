<script>
// import fox1 from "~/assets/images/Fox_7.png";
// import fox2 from "~/assets/images/Fox_8.png";
// import fox3 from "~/assets/images/Fox_16.png";
// import fox4 from "~/assets/images/Fox_17.png";
// import fox5 from "~/assets/images/Fox_18.png";
// import fox6 from "~/assets/images/Fox_19.png";
// import fox7 from "~/assets/images/Fox_21.png";
// import fox8 from "~/assets/images/Fox_30.png";

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
    };
  },
  methods: {
    connectWallet() {
      this.loading = true;
      ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
        const account = accounts[0];
        if (account) {
          this.loading = false;
          window.location.reload();
        }
      });
    },
  },
};
</script>

<template>
  <div class="App">
    <Navbar title="AI GOBLINS" />
    <Hero
      :title="{ start: 'AI GOBLINS', end: 'NFT COLLECTION' }"
      subtitle="You don't find degen playz.. They find you.."
      :buy="true"
    >
      <BuyCta :disabled="loading" @clicked="connectWallet()" />
      <button
        :disabled="loading"
        @click="connectWallet()"
        style="background: #33a6ef"
        class="Hero--wrapper--cta temp"
      >
        Mint
      </button>
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
      <p><span>✓</span> ?</p>
      <p><span>✓</span> ?</p>
      <div class="Hero--wrapper" style="margin-top: 120px">
        <BuyCta :disabled="loading" @clicked="connectWallet()" />
        <button
          :disabled="loading"
          @click="connectWallet()"
          style="background: #33a6ef"
          class="Hero--wrapper--cta temp"
        >
          Mint
        </button>
        <!-- <a
          v-for="(item, index) in ctas"
          :href="item.link"
          target="_blank"
          :key="index"
          style="background: #ffffff"
          class="Hero--wrapper--cta"
        >
          {{ item.text }}
        </a> -->
      </div>
    </TitledContainer>
    <Footer />
  </div>
</template>

<style lang="sass">
.App
  background: #212121

.Slider-wrapper
  padding: 130px 0px 80px

.temp
  display: block
  margin-bottom: 16px
  @media screen and (min-width: 600px)
    display: none
</style>
