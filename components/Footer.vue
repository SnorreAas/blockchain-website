<script>
export default {
  name: "Footer",
};
</script>

<template>
  <div class="Footer">
    <p>&copy; Inc: All rights reserved</p>
    <div class="Footer--sosial">
      <SocialIcon />
    </div>
  </div>
</template>

<style lang="sass">
.Footer
  display: block
  text-align: center
  align-items: center
  justify-content: space-between
  max-width: 1072px
  opacity: 0.9
  margin: 0 auto 40px
  background: #212121
  &--sosial
    margin: 25px auto 0
    width: 87px
  @media screen and (min-width: 600px)
    padding: 120px 40px
    display: flex
    &--sosial
      margin: 0
      width: auto
  padding: 100px 32px
  p
    color: #ffffff
    opacity: 0.8
</style>
