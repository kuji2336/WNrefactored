<template>
 <main-news :mainews="BBCmainheaders"></main-news>
 <main-news :mainews="TechChurchres"></main-news>
  <div class="container-costum">
    <div class="Slider-header">
        <div class="source-name">
          <p>Apple News</p>
        </div>
      </div>
      <main-page-sliders :data="AppleBussnessNews"></main-page-sliders>
  </div>
   <div class="container-costum">
     <div class="Slider-header">
        <div class="source-name">
          <p>US news</p>
        </div>
      </div>
       <main-page-sliders :data="UsBussnessNews"></main-page-sliders>
   </div>
   <div class="container-costum">
     <div class="Slider-header">
        <div class="source-name">
          <p>WallStreet news</p>
        </div>
      </div>
       <main-page-sliders :data="WallStreetNews"></main-page-sliders>
   </div>
</template>


<script>
import MainPageSliders from '../includes/mainPageSliders.vue';
import MainNews from '../includes/mainNews.vue'
import { mapGetters } from "vuex";
export default {
  components: {
    MainPageSliders,
    MainNews
  },

  data(){
      return{
      }
  },

   methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  }, 

  computed: {
    ...mapGetters(["BBCmainheaders","WallStreetNews", "AppleBussnessNews", "UsBussnessNews", "TechChurchres"]),
  },

  created() {
  this.$store.dispatch("BBCheaders"); 
  this.$store.dispatch("RecieveBackEndApiAboutWallStreetNews");
  this.$store.dispatch("RecieveBackEndApiAboutAppleBussnesNews");
  this.$store.dispatch("RecieveBackEndApiAboutUsBussnesNews");
  this.$store.dispatch("TechChurch")
  },
};
</script>


<style scoped>
.news-tittle-descript-right{
    display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.news-box-item-left {
    height: 300px;
}

.news-box-item-left img{
    width: 100%;
    object-fit: contain;
}

.main-header__inner{
    font-size: 19px;
    font-weight: 700;
    color: #212529;
    padding: 15px;
}

.news-tittle-descript-right{
    position: absolute;
    bottom: -39px;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #212529;
    text-align: center;
    padding: 6px 7px;
    font-family: serif;
    color: #ffffff;
    font-size: 16px;
    width: 100%;
    border-radius: 30px;
}

.container-costum{
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 40px;
}

.news-box-item-left img{
    border-radius: 30px;
}

.source-name{
  margin: 30px;
}

.source-name p{
  font-size: 26px;
  font-family: fantasy;
}
</style>