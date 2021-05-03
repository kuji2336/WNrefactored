<template>
  <div class="container">
      <p>{{recdata}}</p>
   <div class="row">
       <div class="col-md-3">
           <div class="card" style="width: 18rem;">
     <div class="card-body">
         <h5 class="card-title"></h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
      </div>
       </div>
   </div>
    <div class="content-blog">
      <div class="blog-content__inner">
        <input type="text" v-model="author" placeholder="enter Author" />
        <input type="text" v-model="title" placeholder="enter title" />
        <textarea v-model="text" placeholder="enter description"></textarea>
        <input v-model="urlToImage" placeholder="enter Url img" />
        <button @click="SendData">Send</button>
        <button @click="recData">rec data</button>
      </div>
    </div>
  </div>
</template>


<script>
import { db } from "../db/firebase";
import firebase from "firebase/app";
export default {
  data() {
    return {
      mainNews: [],
      author: "",
      title: "",
      text: "",
      urlToImage: "",
      category:"",
      recdata: [],
    };
  },

  methods: {
    SendData() {
      var Articles = {
        author: this.author,
        title: this.title,
        description: this.text,
        urlToImage: this.urlToImage,
      };

      this.mainNews.push(Articles);

      db.collection("users").doc(firebase.auth().currentUser.uid).set({
        News: this.mainNews,
      });
    },

   
  },

  

};
</script>