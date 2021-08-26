<script>
  import backgroundImage from '~/assets/images/a_banner_fox.png'
  import logo from '~/assets/images/fox-head.png'
  import fox1 from '~/assets/images/Fox_7.png'
  import fox2 from '~/assets/images/Fox_8.png'
  import fox3 from '~/assets/images/Fox_16.png'
  import fox4 from '~/assets/images/Fox_17.png'
  import fox5 from '~/assets/images/Fox_18.png'
  import fox6 from '~/assets/images/Fox_19.png'
  import fox7 from '~/assets/images/Fox_21.png'
  import fox8 from '~/assets/images/Fox_30.png'

  export default {
    name: 'index',
    data() {
      return {
        backgroundImage,
        logo,
        slides: [
          {image: fox4},
          {image: fox1},
          {image: fox3},
          {image: fox2},
          {image: fox6},
          {image: fox7},
          {image: fox5},
          {image: fox8},
        ]
      }
    }
  }
</script>

<template>
  <div class="Wrapper">
    <nav class="Navbar">
      <span>C F</span>
      <img :src="logo" alt="Logo image" class="Navbar--image">
      <span>X C</span>
    </nav>
    <div class="Header">
      <img :src="backgroundImage" alt="Header image" class="Header--image">
    </div>
    <div class="IntroSection">
      <div class="IntroSection__text">
        <BuyCta />
        <h5>INTRODUCING</h5>
        <h1>CLASSY FOX CLUB</h1>
        <p>Classy Fox Club is a collection of unique Classy Fox NFTs— 100 unique digital collectibles living on the Ethereum blockchain. Owning a Classy Fox will grant you exclusive access to future content such as Raffles and other social events.</p>
      </div>
      <div class="IntroSection__slider">
        <Slider :slides="slides" />
      </div>
    </div>
    <div class="BuySection">
      <h2>BUY A FOX</h2>
      <p>(5 foxes are reserved for the team, giveaways and promotions)</p>
      <span>0.005 ETH</span>
      <BuyCta />
    </div>
    <div class="ImageSection">

    </div>
    <div class="RoadmapSection">

    </div>
    <div class="TeamSection">

    </div>
    <div class="FaqSection">

    </div>
  </div>
</template>

<style lang="sass">
  // $test2: #108775
  // $test: #00C58E
  *
    font-family: "Montserrat",sans-serif
  body
    background-color: #212529

  .Wrapper
    width: 100%
    height: 100vh
    display: block

    .Navbar
      display: inline-block
      color: #ffffff
      text-align: center
      margin: auto 0
      position: absolute
      top: 0px
      left: 0
      right: 0
      font-family: "Montserrat",sans-serif
      font-size: 50px
      font-weight: 800
      font-style: italic
      span
        display: inline-block
        vertical-align: middle
      span:first-of-type
        margin-right: -24px
      span:last-of-type
        margin-left: -33px
      &--image
        vertical-align: middle
        object: cover
        width: 130px
        height: 130px
        margin: auto 0

    .Header
      max-width: 1200px
      margin: 60px auto 0
      padding: 0
      @media screen and (min-width: 570px)
        padding: 0 16px
      &--image
        object: cover
        width: 100%
        height: 100%

    .IntroSection
      text-align: center
      color: #ffffff
      padding-bottom: 80px
      // background-color: #212529
      &__text
        padding: 0 40px
        max-width: 1100px
        margin: 0 auto
        h5
          line-height: 1.6
          font-size: 1.875rem
          margin-top: 40px
          font-family: "Montserrat",sans-serif

        h1
          color: #00C58E
          line-height: 1.3
          font-size: 46px
          font-family: "Montserrat",sans-serif

        p
          line-height: 1.6
          font-size: 18px
          margin-top: 40px
          font-family: "Montserrat",sans-serif

      &__slider
        margin-top: 80px

    .BuySection
      background-color: #108775
      padding: 40px
      text-align: center
      color: #0c1016
      h2
        line-height: 1.6
        font-size: 38px
        font-weight: 700
        // margin-top: 40px
        font-family: "Montserrat",sans-serif

      span
        display: block
        font-size: 24px
        padding: 30px 0 20px
        font-weight: bold

      p
        line-height: 1.6
        font-size: 18px
        // margin-top: 40px

    .ImageSection
      height: 400px


</style>
