<script>
export default {
  mounted() {
    if (window.location.hash != "") {
      const element = document.querySelector(window.location.hash)
      element.scrollIntoView()
    } else {
      const element = document.querySelector("#home")
      element.scrollIntoView()
    }
  },
  data() {
    return {
      showPulse: false,
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


  },
}
</script>
<template>
  <div class="border" id="home">
    <div class="main-content">
      <div class="heading">
        <div class="logo-box">
          <h1 class="logo">Mstfa Baban </h1>
          <h2 class="sub-logo">Full Stack Developer / Designer</h2>
        </div>
      </div>
      <div>
      </div>
      <div class="jumbo">
        <h1 class="header">
          I aim to create digital experiences and solutions that are innovative, problem-focused, and valuable to the
          end user.
        </h1>
        <div class="buttons">
          <a href="https://blog.mstfa.co" class="callToAction" style="text-decoration: none;">Blog</a>
          <a href="/MustafaBabanResume.pdf" download class="callToSecondAction" style="text-decoration: none;">Resume</a>
        </div>
      </div>
      <div class="contact-icons-container">
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
<style lang="scss">
.buttons {
  margin-block-start: 2em;

  .callToAction {
    margin-inline-end: 1em;
  }
}

.border {
  margin-left: 50%;
  margin-right: 50px;
  background: rgb(37, 37, 37);
  padding: 15px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;

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
      display: flex;
      justify-content: center;

      @include breakpoint($md) {
        justify-content: flex-end;
      }

      .contact-icon {
        width: 32px;
        height: 32px;
        margin-left: .7em;
        margin-right: .7em;
        margin-bottom: 1.5em;

        @include breakpoint($sm) {
          margin-right: 2em;
          width: 48px;
          height: 48px;
        }

        @include breakpoint($md) {
          width: 56px;
          height: 56px;
        }
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
      justify-content: center;
      flex-direction: column;
      justify-self: center;
      margin-top: -4rem;
      margin-right: 15px;
      margin-left: 15px;

      @include breakpoint($sm) {
        margin-right: 30px;

        margin-left: 30px
      }

      .header {
        font-weight: 600;
        font-size: 2em;
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

      .callToSecondAction {
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

@keyframes pulsing {

  0%,
  100% {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  }

  50% {
    transform: scale(1.1);
    opacity: 0.5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5), 0 0 2px rgba(0, 0, 0, 0.5);
  }
}

.navBox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  z-index: 10;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  transition: all 0.3s;

  &.scrolled {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .nav-items {
    display: flex;
    align-items: center;

    .nav-item {
      font-family: $font-main;
      font-weight: 400;
      margin-right: 1.5rem;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        opacity: 0.6;
      }

      &.active {
        font-weight: 600;
      }
    }
  }
}
</style>
