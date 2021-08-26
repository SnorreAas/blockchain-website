<script>
export default {
  name: 'TitledContainer',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <div class="TitledContainer">
    <h2>{{title}}</h2>
    <slot />
  </div>
</template>

<style lang="sass">
  .TitledContainer
    max-width: 1200px
    margin: 0 auto
    @media screen and (min-width: 600px)
      padding: 64px
    padding: 32px
    h2
      color: #4BD67B
      font-size: 3em
      font-weight: 400
      margin-bottom: 40px
    p
      color: #ffffff
      line-height: 1.6
      font-size: 20px
      margin-bottom: 40px
      span
        color: #ffffff
        font-size: 30px
      .checked
        color: #4BD67B
</style>
