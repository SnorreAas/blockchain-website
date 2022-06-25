<script>
export default {
  name: "TitledContainer",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <div class="TitledContainer">
    <h2>{{ title }}</h2>
    <slot />
  </div>
</template>

<style lang="sass">
.TitledContainer
  max-width: 1072px
  opacity: 0.9
  background: #212121
  margin: 0 auto
  @media screen and (min-width: 600px)
    padding: 40px
  padding: 40px
  h2
    color: #33A6EF
    font-size: 3em
    font-weight: 400
    margin-bottom: 40px
  p
    color: #ffffff
    line-height: 1.6
    @media screen and (min-width: 600px)
      margin-bottom: 40px
      font-size: 20px
    font-size: 16px
    margin-bottom: 20px
    span
      color: #ffffff
      font-size: 30px

    .checked
      color: #33A6EF
</style>
