<template>
    <div class="container-fluid swipper-wrapper">
      <div class="row">
        <div class="col-mlg-12 col-md-12 col-12">
          <swiper
          :slides-per-view="2"
          :space-between="30"
          navigation
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="data in mainews" :key="data.title">
            <a :href="data.url" target="_blank">
              <div class="slider-in-wr">
                <div class="news-box-item">
                  <img :src="data.urlToImage" />
                </div>
                <div class="news-tittle-descript">
                  <p>
                    {{ data.description }}
                    <span class="content-author"
                      ><span class="author">Published by: </span
                      >{{ data.author }}</span
                    >
                  </p>
                </div>
              </div>
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>


<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, A11y, EffectCube,  Autoplay,  } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import "swiper/components/effect-cube/effect-cube.scss";
// Import Swiper styles

// install Swiper components
 SwiperCore.use([Navigation, A11y, EffectCube, Autoplay]);
export default {
    components: {
    Swiper,
    SwiperSlide, 
  },

 props:['mainews'],
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
}
</script>

<style scoped>
.news-box-item {
  height: 400px;
}

.news-box-item img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 30px;
}

.swipper-wrapper {
  margin-top: 50px;
}


.slider-in-wr {
  position: relative;
}

.news-tittle-descript {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #dc3545;
  text-align: center;
  padding: 6px 7px;
  font-family: serif;
  color: #ffffff;
  font-size: 16px;
  width: 100%;
  border-radius: 30px;
}

.content-author {
  font-size: 12px;
}
.author {
  color: yellow;
}
.news-tittle-descript {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>