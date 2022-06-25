<script>
export default {
  name: "BuyCta",
  props: {
    label: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    click() {
      this.$emit("clicked");
    },
  },
};
</script>

<template>
  <div>
    <div class="btn-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="gooey">
            <!-- in="sourceGraphic" -->
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="highContrastGraphic"
            />
            <feComposite
              in="SourceGraphic"
              in2="highContrastGraphic"
              operator="atop"
            />
          </filter>
        </defs>
      </svg>
      <button :disabled="disabled" @click="click()" id="gooey-button">
        {{ label }}
        <span class="bubbles">
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
        </span>
      </button>
    </div>
    <button
      :disabled="disabled"
      @click="click()"
      style="background: #33a6ef"
      class="Hero--wrapper--cta temp"
    >
      {{ label }}
    </button>
  </div>
</template>

<style lang="sass">
$prime: #33A6EF
$second: #0c1016
.temp
  display: block
  margin-bottom: 16px
  @media screen and (min-width: 600px)
    display: block
.btn-wrapper
  display: none
@media screen and (min-width: 600px)
  svg
    position: absolute
    top: -4000px
    left: -4000px

  .btn-wrapper
    display: none
    transition: all ease-in-out .2s
    @media screen and (max-width: 700px)
      min-width: 100%
      margin-bottom: 16px
    border-radius: 40px
    &:first-of-type
      margin-right: 20px
    &:hover
      cursor: pointer
      -webkit-box-shadow: 0px 0px 30px 0px rgba(255, 255, 142, 0.31)
      -moz-box-shadow: 0px 0px 30px 0px rgba(255, 255, 142, 0.31)
      box-shadow: 0px 0px 30px 0px rgba(255, 255, 142, 0.31)

  #gooey-button
      cursor: pointer
      align-items: center
      // transition: all ease-in-out .2s
      background-color: #fff
      height: 64px
      @media screen and (min-width: 800px)
        padding: 18px 40px
      padding: 18px 20px
      @media screen and (max-width: 700px)
        min-width: 100%
      border-radius: 40px
      text-decoration: none
      font-weight: bold
      font-size: 18px
      font-weight: bold
      font-size: 18px
      color: #0F2024
      border: none
      &:first-of-type
        background: #33A6EF
      filter: url('#gooey')
      position: relative
      background-color: $prime
      transition: shadow 0.3s ease

      &:focus
          outline: none

      .bubbles
          border-radius: 40px
          background: transparent
          position: absolute
          top: 0
          left: 0
          bottom: 0
          right: 0

          .bubble
              background-color: $prime
              border-radius: 100%
              position: absolute
              top: 0
              left: 0
              display: block
              z-index: -1

              @for $bubble from 1 through 10
                  &:nth-child(#{$bubble})
                      $size: 25px
                      left: (random(90) + 10)+px
                      width: $size
                      height: $size
                      animation: move-#{$bubble} #{3 + $bubble*0.02}s infinite
                      animation-delay: #{$bubble*0.2}s

  @for $bubble from 1 through 10
      @keyframes move-#{$bubble}
          0%
              transform: translate(0, 0)
          99%
              transform: translate(0, -(random(80) + 50)+px)
          100%
              transform: translate(0, 0)
              opacity: 0
</style>
