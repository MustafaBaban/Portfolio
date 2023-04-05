<script>
export default {

  mounted() {

    if (window.location.hash == "") {
      const element = document.querySelector('#home')
      if (element) {
        element.scrollIntoView()
      }
    }
  },
  data() {
    return {
      currentAnimation: 'moveUp',
      menuStatus: true,
    }
  },
  methods: {
    copyText(text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          alert('Text copied to clipboard');

        })
        .catch((error) => {
          alert('Failed to copy text: ', error);
        });
    },
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
    }
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
  <div class="border" id="home">
    <div class="main-content">
      <!-- <a href="#last">abbc</a> -->
      <div class="heading">
        <div class="logo-box">
          <h1 class="logo">Mstfa Baban </h1>
          <h2 class="sub-logo">Full Stack Developer / Designer</h2>
        </div>

        <div style="margin-right: 30px;margin-top: 30px;">
          <div class="nav " :class="menuStatus ? 'open-menu' : ''">
            <div class="box" :class="animationClasses"></div>
            <div class="top">
              <a href="#home" @click="currentAnimation = 'moveUp'; disableScroll()" class="nav-item top-item "
                :class="currentAnimation == 'moveUp' ? 'text-white' : 'text-dark'">Home</a>
            </div>
            <div class="bottom">
              <a href="#works" @click="currentAnimation = 'moveLeft'; disableScroll()" class="nav-item left-item "
                :class="currentAnimation == 'moveLeft' ? 'text-white' : 'text-dark'">Works</a>
              <a href="#contact" @click="currentAnimation = 'moveRight'; disableScroll()" class="nav-item right-item"
                :class="currentAnimation == 'moveRight' ? 'text-white' : 'text-dark'">Contact</a>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
      <!-- <button @click="menuStatus = !menuStatus">open</button> -->
      <div class="jumbo">
        <h1 class="header">
          I aim to create digital experiences and solutions that are innovative, problem-focused, and valuable to the
          end user.
        </h1>
        <a href="/src/img/MustafaBabanResume.pdf" download class="callToSecondAction" style="text-decoration: none;">Resume</a>
      </div>
      <div class="contact-icons-container" style="">
        <a href="https://github.com/MustafaBaban" target="_blank">
          <img class="contact-icon" src="../img/github.svg" alt="github icon">
        </a>
        <a href="https://www.behance.net/mstfababan" target="_blank">
          <img class="contact-icon" src="../img/behance.svg" alt="behance icon">
        </a>
        <a href="https://www.linkedin.com/in/mstfababan" target="_blank">
          <img class="contact-icon" src="../img/linkedin.svg" alt="linkedin icon">
        </a>
        <a href="#" @click="copyText('+9647701032485')" target="_blank">
          <img class="contact-icon" src="../img/whatsapp.svg" alt="whatsapp icon">
        </a>
        <a href="https://instagram.com/mstfababan" target="_blank">
          <img class="contact-icon" src="../img/instagram.svg" alt="instagram icon">
        </a>
        <a href="https://t.me/MstfaBaban" target="_blank">
          <img class="contact-icon" src="../img/telegram.svg" alt="telegram icon">
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" >
.border {
  margin-left: 50%;
  margin-right: 50px;
  background: rgb(37, 37, 37);
  padding: 15px;
  height: 100%;
  width: 100%;
  overflow: hidden;

  @include breakpoint($sm) {
    padding: 30px;
  }

  .main-content {
    border: solid 1px white;
    background: $white;
    z-index: 1;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

    .contact-icons-container {
      width: 100%;
      // padding: 2em;
      display: flex;
      justify-content: center;

      @include breakpoint($md) {
        justify-content: flex-end;
      }

      .contact-icon {
        // padding:1em;
        // margin-right: 2em;
        width: 32px;
        height: 32px;
        margin-left: .7em;
        margin-right: .7em;
        margin-bottom: 1.5em;

        @include breakpoint($sm) {
          margin-right: 2em;
          width: 56px;
          height: 56px;
        }

      }
    }

    .nav {
      -webkit-touch-callout: none;
      /* iOS Safari */
      -webkit-user-select: none;
      /* Safari */
      -khtml-user-select: none;
      /* Konqueror HTML */
      -moz-user-select: none;
      /* Old versions of Firefox */
      -ms-user-select: none;
      /* Internet Explorer/Edge */
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
        // font-size: 4rem;
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
        font-size: 3em;

        @include breakpoint($sm) {
          font-size: 4em;
        }

      }

      .bottom {
        font-size: 1.3em;
        display: flex;
        width: 100%;
        height: 50%;
        border: $black solid 2px;
        border-top-width: 0px;
        background-color: $white;

        @include breakpoint($sm) {
          font-size: 2em;
        }

        .nav-item:nth-child(1) {
          display: flex;
          justify-content: center;
          align-items: center;
          // text-align: center;
          border-right: $black solid 2px;

          height: 100%;
          width: 50%;
          // font-size: 1.7rem;
          font-weight: bold;
          color: $black;
          // background-color: $black;
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
        // width: 100%;
        // height: 100%;
        background-color: $black;
        transition: width 0.5s, top 0.5s, left 0.5s;
      }

      // Animations

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

    .heading {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .logo-box {
        margin-left: 30px;
        margin-top: 30px;

        .logo {
          font-family: $font-second;
          font-size: 3rem;
          font-weight: 600;
          font-size: 4em;
          width: 70%;

          @include breakpoint($sm) {
            font-size: 5em;
            width: 100%;
          }

          @include breakpoint($md) {
            font-size: 6em;
          }

          @include breakpoint($lg) {
            font-size: 7em;
          }
        }

        .sub-logo {
          font-family: $font-second;
          font-size: 1.6em;
          font-weight: 500;
          margin-top: .5em;
        }
      }

    }

    .jumbo {
      display: flex;
      height: 100%;
      // width: 80%;
      // width: 100%;
      justify-content: center;
      flex-direction: column;
      justify-self: center;
      // width: 400px;
      margin-top: -4rem;
      // height: 40vh;
      // margin-left: 30px;
      margin-right: 15px;
      margin-left: 15px;

      @include breakpoint($sm) {
        margin-right: 30px;

        margin-left: 30px
      }

      .header {
        font-weight: 600;
        font-size: 2em;
        // color: $black;
        line-height: 1.6;
        margin-bottom: 1rem;
        text-align: center;

        @include breakpoint($sm) {
          font-size: 2.5em;
          text-align: left;

        }

        @include breakpoint($md) {
          margin-top: 1em;
          font-size: 3em;
          width: 80%;
        }

        @include breakpoint($lg) {

          width: 60%;
        }

      }

      button {
        align-self: center;

        @include breakpoint($sm) {

          align-self: auto;
        }
      }

      .sub-header {
        font-size: 1.3rem;
      }

    }

  }
}
</style>

