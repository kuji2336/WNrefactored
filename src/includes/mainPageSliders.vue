<template>
    <swiper
    :slides-per-view="3"
    :space-between="20"
    navigation
    @swiper="onSwiper2"
    @slideChange="onSlideChange2"
  >
    <swiper-slide v-for="data in data" :key="data.title">
    <div class="source-invoked-by">
       <div class="source-name">
           <p>Articles from <span>{{data.source.name}}</span></p>
       </div>
   </div>
      <a :href="data.url" target="_blank">
        <div class="slider-in-wr">
          <div class="news-box-item-cont">
            <img :src="data.urlToImage" />
          </div>
          <div class="news-tittle-descript-slider">
            <p>
              {{ data.description }}
              <span class="content-author ml-2"
                ><span class="author">Published by: </span>{{ data.author }}</span
              >
            </p>
          </div>
        </div>
      </a>
    </swiper-slide>
  </swiper>
</template>


<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, A11y} from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
// Import Swiper styles

// install Swiper components
SwiperCore.use([Navigation, A11y]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props:['data'],

   methods: {
    onSwiper2(swiper) {
      console.log(swiper);
    },
    onSlideChange2() {
      console.log("slide change");
    },
  },
};
</script>

<style scoped>
  .news-box-item-cont{
      height: 200px;
      display: flex;
      justify-content: center;
  }
   .news-box-item-cont img{
      height: 100%;
      widows: 100%;
      object-fit: contain;
  }

  a{
      text-decoration: none;
      color: #000000;
  }

  .news-tittle-descript-slider p{
    font-size: 14px;
    color: #ffffff;
    font-family: sans-serif;
    padding: 4px 10px;
    margin-top: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: #212529;
    border-radius: 11px;
    min-height: 68px;
  }
  
  .source-name{
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 11px 5px;
  }
  
  .source-name p span{
    background-color: #dc3545;
    color: #ffffff;
    font-family: serif;
    padding: 5px;
    border-radius: 10px;
  }
  .author{
      text-decoration: underline;
      text-decoration-color: red;
  }

  
</style>


