<template>
  <div class="costum-bk">
    <div class="container-fluid">
    <div class="main-header">
      <div class="row">
        <div class="col-xl-8 col-lg-8 col-md-8">
            <div class="publication-header">
              <div class="publication-header--inner">
                 <p>Newly published</p>
              </div>
            </div>
           <div class="first-content" v-for="mainPic in showOnlyOneNews" :key="mainPic">
               <a :href="mainPic.url" target="_blank">
                 <div class="static-pict_inner">
                  <img :src="mainPic.urlToImage" class="img-fluid">
               </div>

               <div class="news-description-content">
                 <div class="description-content_inner">
                   <div class="publication-date">
                     <div class="publication-date__inner">
                        <p>Published at <span>{{mainPic.publishedAt}}</span></p>
                     </div>
                   </div>
                   <div class="content-source">
                     <p>Source from <span>{{mainPic.source.name}}</span></p>
                   </div>
                   <div class="main-title">
                     <h1>{{mainPic.title}}</h1>
                   </div>
                   <div class="see-More-btn">
                     <div class="see-btn_inner">
                       <a :href="mainPic.url">See More</a>
                     </div>
                   </div>
                 </div>
               </div>
               </a>
           </div>
        </div>
          <div class="col-xl-4 col-lg-4 col-md-4">
            <div class="right-item-wrapper">
               <div class="right-item_inner" v-for="tranded in showOnlyThreeNews" :key="tranded">
                 <a :href="tranded.url" target="_blank">
                   <div class="static-pict_inner-right">
                     <img :src="tranded.urlToImage" class="img-fluid">
                   </div>
                   <div class="news-title">
                     <p>{{tranded.description}}</p>
                   </div>
                 </a>
               </div>
            </div>
          </div>
      </div>
    </div>
       <div class="slider-container">
         <main-page-sliders :data="UsBussnessNews"></main-page-sliders>
       </div>
  </div>
  </div>

</template> 

<script>
import mainPageSliders from '../includes/mainPageSliders'
import {mapGetters} from 'vuex'
export default {
  components:{
    mainPageSliders
  },
    data(){
        return{
        }
    },
    methods:{
  },

  computed:{
     ...mapGetters(['UsBussnessNews']),

     showOnlyOneNews(){
      return this.UsBussnessNews.slice(2, 3)
     },

     showOnlyThreeNews(){
      return this.UsBussnessNews.slice(6, 9)
     }
  },

created(){
  this.$store.dispatch('RecieveBackEndApiAboutUsBussnesNews')
}
}
</script>


<style scoped>
 .costum-bk{
   background-color: #e4e4e4;
   width: 100%;
 }
 .costum-container{
   max-width: 1440px;
   width: 100%;
   margin: 0 auto;
 }

 .static-pict_inner{
   margin-left: 30px;
 }

 .static-pict_inner img{
   border-radius: 30px;
   width: 100vw;
  height: 100vh;
  object-fit: cover;
  filter: brightness(.4);
 }

 .first-content{
   margin-top: 70px;
   margin-bottom: 30px;
 }

 .first-content{
   position: relative;
 }

.right-item-wrapper{
  position: relative;
   margin-top: 70px;
   margin-bottom: 30px;
   margin-left: 50px;
}
 .main-title h1{
    font-size: 47px;
    font-family: sans-serif;
    color: #ffffff;
    position: absolute;
    bottom: 70px;
    left: 45px;
    margin-bottom: 22px;
 }
 .content-source p{
   font-size: 18px;
    font-family: sans-serif;
    color: #ffffff;
    position: absolute;
    bottom: 4%;
    left: 50px;
 }

 .content-source p span{
   background-color: #dc3545;
    padding: 7px;
    border-radius: 26px;
 }

 .see-More-btn{
  position: absolute;
    bottom: 57px;
    right: 55px
 }

 .publication-date__inner{
   position: absolute;
  top: 8px;
  right: 16px;
 }
 .publication-date__inner p{
   color: #ffffff;
 }
 .see-btn_inner{
   background-color: #fbfbfb;
    padding: 7px;
    border-radius: 20px;
    cursor: pointer;
 }

 .static-pict_inner-right{
   height: 200px;
   display: flex;
   justify-content: center;
 }

 .right-item_inner{
   margin-bottom: 40px;
 }

 .news-title{
   max-width: 300px;
    width: 100%;
    margin: 0 auto;
 }

 .news-title p {
   display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 6px;
    font-size: 19px;
    font-family: serif;
    background-color: white;
    padding: 4px 10px;
    border-radius: 9px;
 }

 .static-pict_inner-right img{
   height: 100%;
   width: 300px;
   object-fit: contain;
 }
 .publication-header--inner{
   margin-top: 41px;
 }

.publication-header--inner p{
  font-size: 46px;
  text-align: center;
  font-family: sans-serif;
  font-weight: 700;
  color: #dc3545;
}

.slider-container{
  margin-top: 50px;
  padding-bottom: 50px;
}
</style>