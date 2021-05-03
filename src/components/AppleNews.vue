<template>
     <section class="apple-news">
          <div class="container-fluid">
              <div class="row">
                <div class="col-xl-4 col-12">
                   <div class="left-content-column">
                      <div class="left-content-inner">
                          <div class="content-wrapper" v-for="lnews in LeftsideNews" :key="lnews">
                            <a :href="lnews.url">
                              <div class="information-box">
                               <div class="source-main-img">
                                 <img :src="lnews.urlToImage">
                               </div>
                               <div class="source-provider d-flex justify-content-center">
                                 <p><span>Article by</span><span class="authorof">{{lnews.author}}</span></p>
                               </div>
                               <div class="source-title">
                                  <p>{{lnews.description}}</p>
                               </div>
                            </div>
                            </a>
                          </div>
                      </div>
                   </div>
                </div>
            <div class="col-xl-8 col-lg-8 col-12">
              <div class="first-content" v-for="intrend in inTrandNews" :key="intrend">
               <a :href="intrend.url" target="_blank">
               <div class="static-pict_inner">
                  <img :src="intrend.urlToImage" class="img-fluid">
               </div>

               <div class="news-description-content">
                 <div class="description-content_inner">
                   <div class="publication-date">
                     <div class="publication-date__inner">
                        <p>Published at <span>{{intrend.publishedAt}}</span></p>
                     </div>
                   </div>
                   <div class="content-source">
                     <p>Source from <span>{{intrend.source.name}}</span></p>
                   </div>
                   <div class="main-title">
                     <h1>{{intrend.title}}</h1>
                   </div>
                   <div class="see-More-btn">
                     <div class="see-btn_inner">
                       <a :href="intrend.url">See More</a>
                     </div>
                   </div>
                 </div>
               </div>
               </a>
           </div>
           <main-page-sliders :data="AppleBussnessNews"></main-page-sliders>
                </div>
              </div>
          </div>
     </section>
</template>

<script>
import mainPageSliders from '../includes/mainPageSliders';
import {mapGetters} from 'vuex';
export default {

  components:{
    mainPageSliders
  },
      computed:{
     ...mapGetters(['AppleBussnessNews']),
     LeftsideNews(){
      return this.AppleBussnessNews.slice(9, 12)
     },

     inTrandNews(){
      return this.AppleBussnessNews.slice(6, 7)
     }
  },

created(){
   this.$store.dispatch('RecieveBackEndApiAboutAppleBussnesNews') 
  
},


}
</script>

<style scoped>
.left-content-inner{
  display: flex;
  flex-direction: column;
}

.source-main-img{
  height: 220px;
  display: flex;
  justify-content: center;

}

.source-main-img img{
  height: 100%;
  width: 300px;
  object-fit: cover;
}

.information-box{
    max-width: 340px;
    margin: 0 auto;
    width: 100%;
}

.source-title{
  margin-top: 14px;
  margin-bottom: 20px;
}

.source-title p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: sans-serif;
    font-size: 21px;
}

.authorof{
    background-color: #dc3545;
    color: #ffffff;
    margin-left: 10px;
    padding: 3px;
    border-radius: 20px;
}

.source-provider{
  margin-top: 25px;
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
    bottom: 28px;
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

</style>