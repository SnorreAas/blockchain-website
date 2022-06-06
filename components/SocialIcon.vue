<script>
import twitter from "~/assets/images/t-b.png";
import discord from "~/assets/images/lo-l.jpg";
export default {
  name: "SocialIcon",
  data() {
    return {
      twitter,
      discord,
    };
  },
};
</script>

<template>
  <div>
    <svg class="svg--source" width="0" height="0" aria-hidden="true">
      <symbol id="svg--twitter" viewbox="0 -7 15 30">
        <path
          d="M15.36 3.434c-0.542 0.241-1.124 0.402-1.735 0.476 0.624-0.374 1.103-0.966 1.328-1.67-0.583 0.346-1.23 0.598-1.917 0.733-0.551-0.587-1.336-0.954-2.205-0.954-1.668 0-3.020 1.352-3.020 3.019 0 0.237 0.026 0.467 0.078 0.688-2.51-0.126-4.735-1.328-6.224-3.155-0.261 0.446-0.41 0.965-0.41 1.518 0 1.048 0.534 1.972 1.344 2.514-0.495-0.016-0.961-0.151-1.368-0.378 0 0.013 0 0.025 0 0.038 0 1.463 1.042 2.683 2.422 2.962-0.253 0.069-0.52 0.106-0.796 0.106-0.194 0-0.383-0.018-0.568-0.054 0.384 1.2 1.5 2.073 2.821 2.097-1.034 0.81-2.335 1.293-3.75 1.293-0.244 0-0.484-0.014-0.72-0.042 1.336 0.857 2.923 1.357 4.63 1.357 5.554 0 8.592-4.602 8.592-8.593 0-0.13-0.002-0.261-0.009-0.39 0.59-0.426 1.102-0.958 1.507-1.563z"
        />
      </symbol>
      <symbol id="svg--github" viewbox="-30 -30 150 150">
        <path
          d="M61.896,52.548c-3.59,0-6.502,4.026-6.502,8.996c0,4.971,2.912,8.999,6.502,8.999
        c3.588,0,6.498-4.028,6.498-8.999C68.395,56.574,65.484,52.548,61.896,52.548z M84.527,29.132c0.74-1.826,0.777-12.201-3.17-22.132
        c0,0-9.057,0.993-22.76,10.396c-2.872-0.793-7.736-1.19-12.597-1.19s-9.723,0.396-12.598,1.189C19.699,7.993,10.645,7,10.645,7
        c-3.948,9.931-3.913,20.306-3.172,22.132C2.834,34.169,0,40.218,0,48.483c0,35.932,29.809,36.508,37.334,36.508
        c1.703,0,5.088,0.004,8.666,0.009c3.578-0.005,6.965-0.009,8.666-0.009C62.191,84.991,92,84.415,92,48.483
        C92,40.218,89.166,34.169,84.527,29.132z M46.141,80.574H45.86c-18.859,0-33.545-2.252-33.545-20.58
        c0-4.389,1.549-8.465,5.229-11.847c6.141-5.636,16.527-2.651,28.316-2.651c0.045,0,0.093-0.001,0.141-0.003
        c0.049,0.002,0.096,0.003,0.141,0.003c11.789,0,22.178-2.984,28.316,2.651c3.68,3.382,5.229,7.458,5.229,11.847
        C79.686,78.322,65,80.574,46.141,80.574z M30.104,52.548c-3.588,0-6.498,4.026-6.498,8.996c0,4.971,2.91,8.999,6.498,8.999
        c3.592,0,6.502-4.028,6.502-8.999C36.605,56.574,33.695,52.548,30.104,52.548z"
        />
      </symbol>
    </svg>
    <div class="connect">
      <a
        href="https://twitter.com/ClassyFoxClub"
        target="_blank"
        class="share twitter"
        :style="{ backgroundImage: 'url(' + twitter + ')' }"
      >
        <svg role="presentation" class="svg--icon">
          <use xlink:href="#svg--twitter" />
        </svg>
        <span class="clip">TWITTER</span>
      </a>
      <a
        href="https://discord.gg/sZjqgm3zfv"
        target="_blank"
        class="share github"
        :style="{ backgroundImage: 'url(' + discord + ')' }"
      >
        <svg role="presentation" class="svg--icon">
          <use xlink:href="#svg--github" />
          <span class="clip">GITHUB</span>
        </svg>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.clip {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.svg--source {
  display: none;
}

.svg--icon {
  width: 100%;
  max-width: 5rem;
  height: 100%;
  max-height: 5rem;
  display: block;
  margin: 0 auto;
  fill: currentColor;
}

.connect {
  display: flex;
}

@media screen and (max-width: 600px) {
  .share:first-of-type {
    margin-right: 8px;
  }
}
.share:first-of-type {
  margin-right: 16px;
}

.share {
  background: #ffffff;
  use {
    display: none;
  }
  @media screen and (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
  width: 50px;
  height: 50px;
  float: left;
  // margin: .5rem 1rem .5rem 0;
  color: #353c4a;
  border: 0.125rem solid #f3f3f3;
  box-shadow: 0 0 8px 0 rgba(50, 50, 50, 0.15);
  border-radius: 50%;
  transition: 250ms;
  background-size: cover;
  background-repeat: no-repeat;
  &:last-child {
    margin-right: 0;
  }

  &:focus {
    outline-color: inherit;
  }
}

.twitter {
  &:hover,
  &:focus {
    color: #00aced;
    box-shadow: 0 0 24px 0 #00aced;
  }
}

.github {
  &:hover,
  &:focus {
    color: #4183c4;
    box-shadow: 0 0 24px 0 #4183c4;
  }
}

.pinterest {
  &:hover,
  &:focus {
    color: #bd081c;
    box-shadow: 0 0 24px 0 #bd081c;
  }
}

.youtube {
  &:hover,
  &:focus {
    color: #cd201f;
    box-shadow: 0 0 24px 0 #cd201f;
  }
}

.facebook {
  &:hover,
  &:focus {
    color: #3b5998;
    box-shadow: 0 0 24px 0 #3b5998;
  }
}

.google {
  &:hover,
  &:focus {
    color: #dd4b39;
    box-shadow: 0 0 24px 0 #dd4b39;
  }
}
</style>
