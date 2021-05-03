<template>
<the-header></the-header>
<router-view></router-view>
</template>

<script>
import firebase from "firebase/app"
import TheHeader from "./Layouts/TheHeader"
export default {
  name: 'App',
  components: {
    TheHeader
  },


     created(){
    firebase.auth().onAuthStateChanged((user)=>{
       if(user){
          console.log(user)
          this.$store.state.userIsLogined = true;
          this.$store.state.LoginedUserName = user.displayName
       }
    })
  }

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

p{
  margin: 0;
}
a{
      text-decoration: none;
      color: inherit;
  }

  a:hover{
      text-decoration: none;
      color: inherit;
  }

  .router-link-active {
    color: #dc3545 !important;
    text-decoration: underline;
  }
</style>
