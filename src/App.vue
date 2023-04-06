<script>
import loading from './components/Loading.vue'
import HomeView from './views/HomeView.vue'
import WorksView from './views/WorksView.vue'
import ContactView from './views/ContactView.vue'
export default {
  components: {
    HomeView, WorksView , ContactView ,loading
  },
  methods: {

  },
  
}
</script>
<template>
  <HomeView/>
  <div class="bottom-pages">
    <WorksView/>
    <ContactView/>
    <!-- <loading/> -->
    
  </div>

</template>

<style lang="scss" >
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


p{
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

.callToAction{
  font-family: $font-main;
  background-color: $accent;
  color: $white; /* text color */
  border-radius: 2px;
  border: none; /* no border */
  padding: 8px 12px; /* space between text and the button's edge */
  font-size: 24px; /* font size */
  width: fit-content;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

}
.callToSecondAction{
  font-family: $font-main;
  background-color: transparent;
  color: $black; /* text color */
  border-radius: 1px;
  border: $accent solid 2px; /* no border */
  padding: 6px 10px; /* space between text and the button's edge */
  font-size: 20px; /* font size */
  font-weight: 600; /* font weight */
  width: fit-content;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

}
.callToSecondAction:hover{
  cursor:pointer;
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
</style>
