<script>
export default {
  name: "Gallery",
  mounted() {
    const observer = new IntersectionObserver(f, {
      threshold: [0, 1],
    });

    function f(entries) {
      for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio >= 1) {
          entry.target.classList.toggle("inbound", true);
        } else {
          entry.target.classList.toggle("inbound", false);
        }
      }
    }

    const itemEls = Array.from(document.querySelectorAll(".item"));
    for (const itemEl of itemEls) observer.observe(itemEl);
  },
};
</script>

<template>
  <div class="waterfall">
    <div class="item"><img src="//source.unsplash.com/featured?99" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?98" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?97" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?96" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?95" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?94" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?93" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?92" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?91" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?90" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?89" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?88" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?87" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?86" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?85" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?84" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?83" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?82" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?81" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?80" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?79" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?78" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?77" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?76" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?75" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?74" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?73" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?72" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?71" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?70" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?69" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?68" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?67" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?66" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?65" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?64" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?63" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?62" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?61" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?60" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?59" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?58" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?57" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?56" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?55" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?54" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?53" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?52" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?51" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?50" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?49" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?48" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?47" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?46" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?45" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?44" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?43" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?42" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?41" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?40" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?39" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?38" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?37" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?36" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?35" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?34" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?33" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?32" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?31" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?30" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?29" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?28" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?27" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?26" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?25" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?24" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?23" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?22" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?21" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?20" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?19" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?18" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?17" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?16" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?15" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?14" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?13" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?12" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?11" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?10" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?9" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?8" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?7" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?6" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?5" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?4" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?3" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?2" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?1" /></div>
    <div class="item"><img src="//source.unsplash.com/featured?0" /></div>
  </div>
</template>

<style lang="less">
body {
  display: grid;
  place-content: center;
  background: #111;
}

.waterfall {
  @h:30vh, 40vh, 50vh;
  @gcd: 10vh;
  @width:minmax (150px, 1fr);

  width: 80vw;
  margin: 10em 0;

  display: grid;
  grid-template-columns: repeat(auto-fill, @width);
  grid-gap: 1em;
  grid-auto-flow: row dense;
  grid-auto-rows: @gcd;

  .item:nth-of-type(3n + 1) {
    grid-row: auto/span unit(extract(@h, 1) / @gcd);
  }
  .item:nth-of-type(3n + 2) {
    grid-row: auto/span unit(extract(@h, 2) / @gcd);
  }
  .item:nth-of-type(3n + 3) {
    grid-row: auto/span unit(extract(@h, 3) / @gcd);
  }

  .item {
    overflow: hidden;
    transform: rotate(-7.5deg);
    filter: saturate(0) contrast(10) brightness(0.2);
    transition: transform 0.2s, border 0.1s;
    box-sizing: border-box;
    border: 1em solid transparent;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: rotate(15deg);
      transition: all 0.3s;
    }

    &.inbound {
      transform: rotate(0);
      filter: none;
      border-bottom: 1px solid white;

      & img {
        transform: rotate(0);
      }
    }
  }
}
</style>
