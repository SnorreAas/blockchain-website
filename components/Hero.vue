<script>
export default {
  name: 'Hero',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    ctas: {
      type: Array,
      default: () => []
    },
    buy: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div class="Hero">
    <div>
      <h1 class="Hero--title" v-html="title"></h1>
    </div>
    <div>
      <p class="Hero--subtitle">{{subtitle}}</p>
    </div>
    <div class="Hero--wrapper">
      <BuyCta v-if="buy" />
      <a
        v-for="(item, index) in ctas"
        :href="item.link"
        target="_blank"
        :key="index"
        class="Hero--wrapper--cta"
      >
        {{item.text}}
      </a>
    </div>
  </div>
</template>

<style lang="sass">
  .Hero
    background: #212121
    @media screen and (min-width: 600px)
      padding: 0 64px
    padding: 0 32px
    max-width: 1200px
    margin: 0 auto
    &--title
      @media screen and (min-width: 1100px)
        font-size: 100px
      font-size: 8.5vw
      margin-bottom: 40px
      line-height: 1
      font-family: "Integral",system-ui
      color: #ffffff
      .color
        color: #4BD67B
        font-family: "Integral",system-ui
    &--subtitle
      // color: #0F2024
      color: #ffffff
      line-height: 1.6
      font-size: 20px
      // max-width: 900px
    &--wrapper
      margin-top: 70px
      display: flex
      flex-wrap: wrap
      &--cta
        align-items: center
        transition: all ease-in-out .2s
        background-color: #fff
        @media screen and (min-width: 800px)
          padding: 18px 40px
        padding: 18px 20px
        @media screen and (max-width: 700px)
          min-width: 100%
          text-align: center
        height: 64px
        box-shadow: 0 4px #98905e47
        border-radius: 40px
        text-decoration: none
        font-weight: bold
        font-size: 18px
        color: #0F2024
        &:first-of-type
          margin-right: 20px
          // background: #4BD67B
          background: #ffffff
        // &:last-of-type
        &:hover
          cursor: pointer
          -webkit-box-shadow: 0px 0px 30px 0px rgba(255, 255, 142, 0.31)
          -moz-box-shadow: 0px 0px 30px 0px rgba(255, 255, 142, 0.31)
          box-shadow: 0px 0px 30px 0px rgba(255, 255, 142, 0.31)


</style>
