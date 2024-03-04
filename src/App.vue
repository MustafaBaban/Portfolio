<script>
import loading from './components/Loading.vue'
import HomeView from './views/HomeView.vue'
import WorksView from './views/WorksView.vue'
import ContactView from './views/ContactView.vue'
export default {
  data() {
    return {
      currentAnimation: 'moveUp',
      showPulse: false,
      pulseRunning: false,
    }
  },
  components: {
    HomeView, WorksView, ContactView, loading
  },
  mounted() {
    // this.$refs.worksView.$el.addEventListener("touchmove", this.handleScroll); TODO: add touch support
    this.$refs.worksView.$el.addEventListener("wheel", this.handleScroll);
    this.$refs.contactView.$el.addEventListener("wheel", this.handleScrollContact);
    this.$refs.homeView.$el.addEventListener("wheel", this.handleScrollHome);
  },
  beforeDestroy() {
    this.$refs.worksView.$el.removeEventListener("wheel", this.handleScroll);
    // this.$refs.contactView.$el.removeEventListener("wheel", this.handleScroll);
  },
  methods: {
    disableScroll() {
      let disableScroll = function (e) {
        e.preventDefault();
      }
      window.addEventListener('wheel', disableScroll, { passive: false });
      document.addEventListener('wheel', disableScroll, { passive: false });
      setTimeout(function () {
        window.removeEventListener('wheel', disableScroll, { passive: false });
        document.removeEventListener('wheel', disableScroll, { passive: false });
      }, 800);
    },
    triggerPulse() {
      if (this.pulseRunning) {
        return;
      }
      this.pulseRunning = true;
      this.showPulse = true;
      setTimeout(() => {
        this.showPulse = false;
        this.pulseRunning = false;
      }, 3000);
    },
    handleScroll(event) {
      const deltaY = event.deltaY;
      const scrollTop = this.$refs.worksView.$el.scrollTop;

      if (deltaY < 0 && scrollTop === 0) {
        this.triggerPulse();
      }
    },
    handleScrollHome(event) {
      const deltaY = event.deltaY;
      const scrollTop = this.$refs.homeView.$el.scrollTop;

      if (deltaY < 0 && scrollTop === 0 || deltaY > 0 && scrollTop === 0) {
        this.triggerPulse();
      }
    },
    handleScrollContact(event) {
      const deltaY = event.deltaY;
      const scrollTop = this.$refs.worksView.$el.scrollTop;

      if (deltaY < 0 && scrollTop === 0) {
        this.triggerPulse();
      }
    },

  },
  computed: {
    animationClasses() {
      return {
        [this.currentAnimation]: true,
      };
    },
  },

}
</script>

<template>
  <HomeView ref="homeView" />

  <div id="navBox">
    <div class="nav" :class="{ pulse: showPulse }">
      <div class="box" :class="animationClasses"></div>
      <div class="top">
        <a href="#home" @click="currentAnimation = 'moveUp'; disableScroll()" class="nav-item "
          :class="currentAnimation == 'moveUp' ? 'text-white' : 'text-dark'">Home</a>
      </div>
      <div class="bottom" style="--div-width: 300px;">
        <a href="#works" @click="currentAnimation = 'moveLeft'; disableScroll()" class="nav-item "
          :class="currentAnimation == 'moveLeft' ? 'text-white' : 'text-dark'">Works</a>
        <a href="#contact" @click="currentAnimation = 'moveRight'; disableScroll()" class="nav-item "
          :class="currentAnimation == 'moveRight' ? 'text-white' : 'text-dark'">Contact</a>
      </div>
    </div>
  </div>
  <div class="bottom-pages">
    <WorksView ref="worksView" />
    <ContactView ref="contactView" />
  </div>
</template>

<style lang="scss">
#app {
  height: 100%;
  overflow: hidden;
  // overflow-y: hidden;
  /* max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal; */
}

.nav {
  -webkit-touch-callout: none;
  // ... (All the other styles for .nav)
}

@keyframes pulsing {

  0%,
  100% {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
  }

  50% {
    transform: scale(1.1);
    opacity: 0.5;
    box-shadow: 0 0 10px 10px rgba(255, 0, 0, 0.5);
  }
}

.pulse {
  animation: pulsing 1.5s 2;
  animation-fill-mode: forwards;
}

footer {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2em;
}

.DetailsMainTitle {
  font-size: 2.5em;
  // margin-bottom: 0.5em;
  // margin-top: 1em;
  // margin-bottom: 1em;
}

.DetailsTitle {
  font-size: 2em;
  margin-bottom: 0.5em;
  margin-top: 1em;
  margin-bottom: 1em;
}

.DetailsText {
  font-size: 1.4em !important;
  line-height: 160% !important;
  margin-bottom: 1em;
}


.DetailsImage {
  width: 100%;

  object-fit: cover;
  object-position: center;
  border: solid 1px #ccc;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


p {
  font-weight: 600 !important;
}

body {
  margin: 0;
  padding: 0;
  font-family: $font-main ;
  font-size: 10px;
  // font-size: calc(1rem + (1vw - 17.5px)) !important;
  // font-size: min(max(1rem, 2.5vw), 2rem) !important;

  // overflow-x: hidden;
  // overflow-y : hidden;
  // overflow: hidden;
  background: $white;
  color: $black ;
  width: 100%;
  height: 100vh;
  background-color: $white;
}

.callToAction {
  font-family: $font-main;
  background-color: $accent;
  color: $white;
  /* text color */
  border-radius: 3px;
  border: none;
  /* no border */
  padding: 8px 12px;
  /* space between text and the button's edge */
  font-size: 2em;
  /* font size */
  width: fit-content;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

}

.callToSecondAction {
  font-family: $font-main;
  background-color: transparent;
  color: $black;
  /* text color */
  border-radius: 1px;
  border: $accent solid 2px;
  /* no border */
  padding: 6px 10px;
  /* space between text and the button's edge */
  font-size: 20px;
  /* font size */
  font-weight: 600;
  /* font weight */
  width: fit-content;
  // box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

}

.callToSecondAction:hover {
  cursor: pointer;
}

.title {
  font-size: 6rem;
  // margin-bottom: 4rem;
  margin-left: 60px;
}

.bottom-pages {
  display: flex;
  // position: absolute;
  // left: -50%;
  overflow-x: visible;
  width: 200%;
  height: 100%;
  // margin-left: 50%;
}

.bg-black {
  background: $black;
}

.text-white {
  color: $white !important;
  z-index: 200;
}

// .footer {
//   z-index: -1;
// }

.invert {
  background: $black;

  .box {
    background: $white;
  }

  .top {
    background: $black;
    color: $white;
    border-color: $white;
  }

  .bottom {
    background: $black;
    border-color: $white;
    color: $white;
  }

  .nav-item {
    border-color: $white !important;
    color: $white !important;
  }

  .text-white {
    color: $black !important;
  }
}

.page {
  height: 100%;
  width: 100%;
}




/* Hide scrollbar for Chrome, Safari and Opera */
*::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
* {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

#navBox {
  margin-right: 30px;
  margin-top: 30px;

  .nav {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    position: fixed;
    z-index: 999;
    top: 30px;
    right: 30px;
    width: 30vw;
    height: 30vw;

    @include breakpoint($sm) {
      width: 25vw;
      height: 25vw;
    }

    @include breakpoint($md) {
      width: 20vw;
      height: 20vw;
    }

    @include breakpoint($lg) {
      width: 15vw;
      height: 15vw;
    }

    .nav-item {
      transition: color 1s;
      cursor: pointer;
      text-decoration: none;
      color: $black;
      overflow: hidden;
    }

    .nav-item:nth-child(1) {
      font-weight: bold;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      place-items: center;
    }

    .top {
      width: 100%;
      height: 50%;
      border: $black solid 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      background-color: $white;
      font-size: 2em;

      @include breakpoint($xs) {
        font-size: 3em;
      }

      @include breakpoint($sm) {
        font-size: 3.5em;
      }

      @include breakpoint($md) {
        font-size: 4em;
      }
    }

    .bottom {
      display: flex;
      width: 100%;
      height: 50%;
      border: $black solid 2px;
      border-top-width: 0px;
      background-color: $white;
      font-size: calc(var(--div-width) * 0.055);
      /* Font-size at 3% of div width */
      // font-size: 1.5em;
      // font-size: clamp(16px, 2vw, 22px) !important;
      // @include breakpoint($xs) {
      //   font-size: 1.3em;
      // }

      // @include breakpoint($sm) {
      //   font-size: 1.5em;
      // }

      // @include breakpoint($md) {
      //   font-size: 1.5em;
      // }

      // @include breakpoint($lg) {
      //   font-size: 2em;
      // }

      .nav-item:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: $black solid 2px;
        height: 100%;
        width: 50%;
        font-weight: bold;
        color: $black;
      }

      .nav-item:nth-child(2) {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 50%;
        font-weight: bold;
      }
    }

    .box {
      position: absolute;
      z-index: 100;
      transform: translate(-1px, -1px);
      background-color: $black;
      transition: width 0.5s, top 0.5s, left 0.5s;
    }

    .moveUp {
      height: 50%;
      width: 100%;
      top: 0 !important;
      left: 0 !important;
    }

    .moveLeft {
      height: 50%;
      width: 50%;
      top: 50% !important;
      left: 0 !important;
    }

    .moveRight {
      height: 50%;
      width: 50%;
      top: 50% !important;
      left: 50% !important;
    }
  }
}

.portfolio-container {
  max-width: 800px;
  margin: auto 1em;
  line-height: 1.6;

  // h1 {
  //   font-size: 1.8em;
  // }
}

.portfolio-title {
  // text-align: center;
  font-size: 2.5em;
  margin: 1em auto;

}

.portfolio-section {
  margin-bottom: 30px;
  margin: 1em auto;
  font-size: 1.5em;

}

.portfolio-section-content {
  max-width: 600px;
  margin: 0 auto;
}

.portfolio-demo-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 20px auto;
}

.screenshots {
  img {
    width: 100%;
  }

  display: flex;
  flex-direction: column;
}
</style>
