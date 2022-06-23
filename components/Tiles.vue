<script>
export default {
  name: "Tiles",
};
</script>

<template>
  <div class="grid image-grid">
    <div class="grid-block">
      <div class="tile">
        <a class="tile-link">
          <img
            class="tile-img tile-img1"
            src="https://ipfs.moralis.io:2053/ipfs/QmYTxjkHg3SQAQ6B1LaKzaVUv2Z1UphXeAk8WeWNEkNDk2/images/0000000000000000000000000000000000000000000000000000000000000001.png"
            alt="Image"
          />
        </a>
      </div>
    </div>

    <div class="grid-block">
      <div class="tile">
        <a class="tile-link">
          <img
            class="tile-img tile-img2"
            src="https://ipfs.moralis.io:2053/ipfs/QmYTxjkHg3SQAQ6B1LaKzaVUv2Z1UphXeAk8WeWNEkNDk2/images/0000000000000000000000000000000000000000000000000000000000000002.png"
            alt="Image"
          />
        </a>
      </div>
    </div>

    <div class="grid-block">
      <div class="tile">
        <a class="tile-link">
          <img
            class="tile-img tile-img3"
            src="https://ipfs.moralis.io:2053/ipfs/QmYTxjkHg3SQAQ6B1LaKzaVUv2Z1UphXeAk8WeWNEkNDk2/images/0000000000000000000000000000000000000000000000000000000000000003.png"
            alt="Image"
          />
        </a>
      </div>
    </div>

    <div class="grid-block">
      <div class="tile">
        <a class="tile-link">
          <img
            class="tile-img tile-img4"
            src="https://ipfs.moralis.io:2053/ipfs/QmYTxjkHg3SQAQ6B1LaKzaVUv2Z1UphXeAk8WeWNEkNDk2/images/0000000000000000000000000000000000000000000000000000000000000004.png"
            alt="Image"
          />
        </a>
      </div>
    </div>

    <div class="grid-block">
      <div class="tile">
        <a class="tile-link">
          <img
            class="tile-img tile-img5"
            src="https://ipfs.moralis.io:2053/ipfs/QmYTxjkHg3SQAQ6B1LaKzaVUv2Z1UphXeAk8WeWNEkNDk2/images/0000000000000000000000000000000000000000000000000000000000000005.png"
            alt="Image"
          />
        </a>
      </div>
    </div>

    <div class="grid-block">
      <div class="tile">
        <a class="tile-link">
          <img
            class="tile-img tile-img6"
            src="https://ipfs.moralis.io:2053/ipfs/QmYTxjkHg3SQAQ6B1LaKzaVUv2Z1UphXeAk8WeWNEkNDk2/images/0000000000000000000000000000000000000000000000000000000000000006.png"
            alt="Image"
          />
        </a>
      </div>
    </div>

    <div class="grid-block">
      <div class="tile">
        <a class="tile-link">
          <img
            class="tile-img tile-img7"
            src="https://ipfs.moralis.io:2053/ipfs/QmYTxjkHg3SQAQ6B1LaKzaVUv2Z1UphXeAk8WeWNEkNDk2/images/0000000000000000000000000000000000000000000000000000000000000007.png"
            alt="Image"
          />
        </a>
      </div>
    </div>

    <div class="grid-block">
      <div class="tile">
        <a class="tile-link">
          <img
            class="tile-img tile-img8"
            src="https://ipfs.moralis.io:2053/ipfs/QmYTxjkHg3SQAQ6B1LaKzaVUv2Z1UphXeAk8WeWNEkNDk2/images/0000000000000000000000000000000000000000000000000000000000000008.png"
            alt="Image"
          />
        </a>
      </div>
    </div>

    <div class="grid-block">
      <div class="tile">
        <a class="tile-link">
          <img
            class="tile-img tile-img9"
            src="https://ipfs.moralis.io:2053/ipfs/QmYTxjkHg3SQAQ6B1LaKzaVUv2Z1UphXeAk8WeWNEkNDk2/images/0000000000000000000000000000000000000000000000000000000000000009.png"
            alt="Image"
          />
        </a>
      </div>
    </div>

    <div class="grid-block">
      <div class="tile">
        <a class="tile-link">
          <img
            class="tile-img tile-img10"
            src="https://ipfs.moralis.io:2053/ipfs/QmYTxjkHg3SQAQ6B1LaKzaVUv2Z1UphXeAk8WeWNEkNDk2/images/0000000000000000000000000000000000000000000000000000000000000010.png"
            alt="Image"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.grid {
  width: 100%;
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  flex-wrap: wrap;
}

.grid-block {
  width: 50%;
  max-height: 16.25rem;
  padding: 1rem;
  overflow: hidden;
}

.image-grid {
  -webkit-transform: rotateX(45deg) rotateZ(45deg);
  transform: rotateX(45deg) rotateZ(45deg);
  -webkit-perspective: 1000px;
  perspective: 1000px;
}

.image-grid .tile-link:hover .tile-img {
  top: -1rem;
  left: -1rem;
}

.image-grid .tile-img {
  position: relative;
  top: 0;
  left: 0;
  -webkit-transition-property: opacity, top, left, box-shadow;
  transition-property: opacity, top, left, box-shadow;
}

.tile-link {
  display: block;
}

.tile-link:hover .tile-img {
  opacity: 1;
}

.tile-link:hover .tile-img-link {
  display: block;
}

.tile-link:hover .tile-img-link:hover .tile-img {
  opacity: 0.5;
}

.tile-img {
  display: block;
  width: 100%;
  height: auto;
  opacity: 1;
  -webkit-transition-property: opacity;
  transition-property: opacity;
  -webkit-transition-duration: 0.125s;
  transition-duration: 0.125s;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}
.tile-link:hover .tile-img1 {
  box-shadow: 5px 5px rgba(244, 170, 200, 0.4),
    10px 10px rgba(244, 170, 200, 0.3), 15px 15px rgba(244, 170, 200, 0.2),
    20px 20px rgba(244, 170, 200, 0.1), 25px 25px rgba(244, 170, 200, 0.05);
}

.tile-link:hover .tile-img2 {
  box-shadow: 5px 5px rgba(45, 186, 233, 0.4), 10px 10px rgba(45, 186, 233, 0.3),
    15px 15px rgba(45, 186, 233, 0.2), 20px 20px rgba(45, 186, 233, 0.1),
    25px 25px rgba(45, 186, 233, 0.05);
}

.tile-link:hover .tile-img3 {
  box-shadow: 5px 5px rgba(214, 221, 244, 0.4),
    10px 10px rgba(214, 221, 244, 0.3), 15px 15px rgba(214, 221, 244, 0.2),
    20px 20px rgba(214, 221, 244, 0.1), 25px 25px rgba(214, 221, 244, 0.05);
}

.tile-link:hover .tile-img4 {
  box-shadow: 5px 5px rgba(82, 119, 192, 0.4), 10px 10px rgba(82, 119, 192, 0.3),
    15px 15px rgba(82, 119, 192, 0.2), 20px 20px rgba(82, 119, 192, 0.1),
    25px 25px rgba(82, 119, 192, 0.05);
}

.tile-link:hover .tile-img5 {
  box-shadow: 5px 5px rgba(138, 218, 245, 0.4),
    10px 10px rgba(138, 218, 245, 0.3), 15px 15px rgba(138, 218, 245, 0.2),
    20px 20px rgba(138, 218, 245, 0.1), 25px 25px rgba(138, 218, 245, 0.05);
}

.tile-link:hover .tile-img6 {
  box-shadow: 5px 5px rgba(203, 215, 193, 0.4),
    10px 10px rgba(203, 215, 193, 0.3), 15px 15px rgba(203, 215, 193, 0.2),
    20px 20px rgba(203, 215, 193, 0.1), 25px 25px rgba(203, 215, 193, 0.05);
}

.tile-link:hover .tile-img7 {
  box-shadow: 5px 5px rgba(91, 209, 250, 0.4), 10px 10px rgba(91, 209, 250, 0.3),
    15px 15px rgba(91, 209, 250, 0.2), 20px 20px rgba(91, 209, 250, 0.1),
    25px 25px rgba(91, 209, 250, 0.05);
}

.tile-link:hover .tile-img8 {
  box-shadow: 5px 5px rgba(145, 156, 196, 0.4),
    10px 10px rgba(145, 156, 196, 0.3), 15px 15px rgba(145, 156, 196, 0.2),
    20px 20px rgba(145, 156, 196, 0.1), 25px 25px rgba(145, 156, 196, 0.05);
}

.tile-link:hover .tile-img9 {
  box-shadow: 5px 5px rgba(188, 97, 129, 0.4), 10px 10px rgba(188, 97, 129, 0.3),
    15px 15px rgba(188, 97, 129, 0.2), 20px 20px rgba(188, 97, 129, 0.1),
    25px 25px rgba(188, 97, 129, 0.05);
}

.tile-link:hover .tile-img10 {
  box-shadow: 5px 5px rgba(4, 140, 231, 0.4), 10px 10px rgba(4, 140, 231, 0.3),
    15px 15px rgba(4, 140, 231, 0.2), 20px 20px rgba(4, 140, 231, 0.1),
    25px 25px rgba(4, 140, 231, 0.05);
}
</style>
