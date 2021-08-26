<script>
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
        slides: [
          {image: fox4},
          {image: fox1},
          {image: fox3},
          {image: fox2},
          {image: fox6},
          {image: fox7},
          {image: fox5},
          {image: fox8},
        ],
        ctas: [{text: 'Join our Discord', link: 'https://twitter.com/ClassyFoxClub'}]
      }
    }
}
</script>

<template>
  <div class="App">
    <Navbar title="CLASSY FOX CLUB" />
    <Hero
      :title='`WELCOME TO THE<br><span class="color">CLASSY FOX CLUB</span>`'
      subtitle="Get yourself a Fox and join The Club. Each Fox has 1 of 1 programmatically generated properties with a completely unique combination of traits. Hand drawn. Only 100 Foxes will exist in GEN 1."
      :ctas="[{text: 'Join our Discord', link: 'https://twitter.com/ClassyFoxClub'}]"
      :buy="true"
    />
    <div class="Slider-wrapper">
      <Slider :slides="slides" />
    </div>
    <TitledContainer title="Roadmap">
      <p>
        <span class="checked">✓</span> First batch of Foxes created
      </p>
      <p>
        <span class="checked">✓</span> Presale
      </p>
      <p>
        <span class="checked">✓</span> Website launch
      </p>
      <p>
        <span>✓</span> 10 new Foxes released every week
      </p>
      <p>
        <span>✓</span> Twitter sales bot & Discord verification
      </p>
      <p>
        <span>✓</span> Marketing campaign
      </p>
      <p>
        <span>✓</span> 100% Foxes sold = Launch GEN 2 <span>🦊</span>
      </p>
      <div class="Hero--wrapper" style="margin-top:120px">
        <BuyCta v-if="true" />
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
    </TitledContainer>
    <Footer />
  </div>
</template>

<style lang="sass" scoped>
  .App
    background: #212121

  .Slider-wrapper
    padding: 130px 0 80px
</style>
