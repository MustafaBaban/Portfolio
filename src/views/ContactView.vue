<script>
import emailjs from '@emailjs/browser';
import loading from '../components/Loading.vue'
import modal from '../components/Modal.vue'

export default {
  data() {
    return {
      loading: false,
      modal: {
        header: "Message was sent successfully",
        body: "",
        status: false
      }
    };
  },
  components: {
    loading, modal
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
    sendEmail(e) {
      e.preventDefault();
      this.loading = true;
      emailjs.sendForm('service_84annjr', 'template_23l54nw', this.$refs.form, '4dCB22BGCzBbNx3yK')
        .then((result) => {
          this.loading = false;
          this.modal.status = true;
          this.modal.header = "Message was sent successfully";
          // this.modal.body="";
          console.log('SUCCESS!', result.text);
        }, (error) => {
          this.loading = false;
          this.modal.status = true;
          this.modal.header = "Message was not sent";
          console.log('FAILED...', error.text);
        });
    }
  }
}
</script>

<template>
  <div class="right-page" id="contact">
    <loading v-if="loading" />
    <p class="title ">Talk to me</p>

    <modal name="MessageStatus" v-if="modal.status" @close="modal.status = false">
      <!-- use slots for custom content -->
      <h3 slot="header">{{ modal.header }}</h3>
      <!-- <p slot="body">{{modal.body}}</p> -->
    </modal>

  <form action="" class="inputs" ref="form" @submit.prevent="sendEmail">
    <div class="mail">
      <input type="text" placeholder="Name" name="from_name" class="input" />
      <input type="email" placeholder="Email" name="email" class="input" />
      <textarea placeholder="Message" name="message" class="input" id="" cols="30" rows="10"></textarea>
      <button class="callToAction" type="submit">Send</button>
    </div>
  </form>


    <div class="footer">
      <div class="name">
        <div style="display:flex;cursor: pointer;" @click="copyText('mail@mstfa.me')">
            <img src="../img/email.svg" style="margin-right:1em;" alt=""> 
            <h3 > mail@mstfa.me</h3>
          </div>
        <h1>Mustafa Baban</h1>
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

<style lang="scss" scoped>

.right-page {
  width: 100vw;

  .title {
    width: 50%;
    font-size: 4em;
    margin-left: 30px;
    margin-top: 30px;
    margin-bottom: 1em;

    @include breakpoint($sm) {
      font-size: 5.5em;

    }

    @include breakpoint($md) {

      // margin-left: 60px;
      // margin-right: 60px;
    }

  }
}

.inputs {
  margin-top:6rem;
  margin-left: 30px;
  margin-right: 30px;

  @include breakpoint($md) {
    margin-left: 60px;
    margin-right: 60px;
  }

  .mail {
    // margin-top: 3rem;
    display: flex;
    flex-direction: column;
    width: 100%;

    @include breakpoint($md) {
      width: 55%;
    }


    .input {
      background: transparent;
      outline: none;
      border-width: 0;
      margin-bottom: 1em;
      border-bottom: solid lighten($black, 50%) 2px;
      // padding-left: 1rem;
      // padding-bottom: 1rem;
      font-size: 1rem;
      font-weight: bold;
      font-family: $font-main;
      height: 60px;

    }

    textarea {
      max-height: 200px;
      padding-top: 1em;
    }

    .callToAction {
      margin-top: 1em;
    }
  }

}



.footer {
  position: absolute;
  display: flex;
  bottom:0px;
  flex-direction: column;
  color: $black;
  width: 100%;
  margin-bottom: 30px;
  // height: 100%;
  // margin-bottom: 2rem;
  // margin-left: 30px;
  text-align: center;
  
  @include breakpoint($md) {
    margin-bottom:30px;
    flex-direction: row;
    text-align: left;

    // align-items: flex-end;
    // margin-right: 60px;
  }
  .name{
    width: 100%;
    @include breakpoint($md) {
      margin-left: 30px;
    }
    h1 {
      font-size: 2rem;
      margin-bottom: 15px;
      // margin-right:1em;
      @include breakpoint($md) {
        margin-bottom: 0;
        font-size: 3rem;
      }
    }
    
    h3 {
      cursor: pointer;
      // margin-top: 1rem;
      margin-bottom: 15px;

      font-size: 1rem;
      color: lighten($black, 30%);
      @include breakpoint($md) {
        margin-bottom: 0;
      }
    }

  }

  .contact-icons-container {
      width: 100%;
      display: flex;
      justify-content: center;
      @include breakpoint($md) {
        margin-right:30px;
        justify-content: flex-end;
      }
      a{
        align-self: flex-end;
      }
      .contact-icon {
        // padding:1em;
        margin-left: 1em;
        margin-right: 1em;
        width: 32px;
        height: 32px;

        @include breakpoint($sm) {
          // margin-right: 2em;
          width: 56px;
          height: 56px;
        }
        @include breakpoint($md) {
    
          width: 48px;
          height: 48px;
        }

      }
    }
}






// .title{
//   width:50%;
// }
// .mail {
//   // margin-top: 3rem;
//   margin-left: 120px;
//   display: flex;
//   flex-direction: column;
//   width: 50%;
//   textarea{
//     max-height: 400px;
//     padding-top:1em;
//   }
//   .input {
//     background: transparent;
//     outline: none;
//     border-width: 0;
//     margin-bottom: 1rem;
//     border-bottom: solid lighten($black, 50%) 2px;
//     // padding-left: 1rem;
//     // padding-bottom: 1rem;
//     font-size: 1rem;
//     font-weight: bold;
//     font-family: $font-main;
//     height: 60px;
//     // cursor: pointer;
//   }

//   .mail-button {
//     color: $white;
//     background-color: red;
//     width: 80px;
//     height: 30px;
//     outline: none;
//     border: 0;
//   }
// }

// .bottom-footer {
//   // margin-top: auto;
//   // margin-bottom: auto;
//   position: absolute;
//   bottom: 0;
//   display: flex;
//   color: $black;
//   justify-content: space-between;
//   width: 100%;
//   margin-bottom: 2rem;

//   .left-footer {
//     margin-left: 60px;

//     h1 {
//       // margin-top: 1rem;

//       font-size: 3rem;
//     }

//     h3 {
//       margin-top: 1rem;
//       font-size: 1rem;
//       color: lighten($black, 50%);
//     }
//   }

//   .right-footer {
//     margin-right: 60px;
//     align-self: flex-end;

//     .img-footer {
//       width: 32px;
//       margin-left: 1.2rem;
//     }
//   }

// }

// @media only screen and (max-width: 768px) {
//   .left-footer {
//     margin-left:30px;
//     h1{
//       font-size: 3em !important;
//     }
//   }
//   .mail{
//     width: 100%;
//    margin:0px;
//   }
//   .inputs{
//     margin-top:6em;
//     margin-right: 30px;
//     margin-left: 30px;
//   }
//   textarea{
//     max-height: 200px;
//   }
// }
</style>