<template>
    <header>
       <div class="main-header  d-flex align-items-center">
           <div class="container">
              <div class="row">
                  <div class="col-lg-6 col-xl-6 col-md-6 d-flex align-items-center justify-content-start">
                     <div class="logo-wrapper">
                      <div class="logo d-flex align-items-center justify-content-center">
                        <img :src="mainLogo" class="img-fluid" style="height:38px">
                      </div>
                     </div>
                  </div>
                  <div class="col-lg-6 col-xl-6 col-md-6 d-flex align-items-center justify-content-end">
                      <div class="wr d-flex" v-if="userIsLogined == false">
                          <div class="login d-flex align-items-center">
                           <router-link to="/login"><p>Login</p></router-link>
                      </div>
                      <div class="register d-flex align-items-center">
                         <router-link to="/register"><p>Register</p></router-link>
                      </div>
                      </div>
                      <div class="wr2 d-flex" v-else>
                        <div class="login d-flex align-items-center mr-4" >
                           <p>{{LoginedUserName}}</p>
                        </div>
                        <div class="login d-flex align-items-center">
                          <router-link to="/writeNews"><p>Write News</p></router-link>
                        </div>
                        <div class="register d-flex align-items-center" @click="signOut">
                         <p>Logout</p>
                        </div>
                      </div>
                  </div>
              </div>
           </div>
       </div>
       <nav>
           <div class="sub-navbar p-3">
               <div class="container sub-navbar_inner d-flex align-items-center justify-content-between">
                   <router-link to="/"><p>Home</p></router-link>
                   <router-link to="/UsBusnessNews"><p>Us Bussness News</p></router-link>
                   <router-link to="/AppleNews"><p>Apple News</p></router-link>
                   <router-link to="/currency"><p>Currency</p></router-link>
               </div>
           </div>
       </nav>
    </header>

</template>



<script>
import firebase from 'firebase/app'
import {mapState} from 'vuex'
export default {
    data(){
        return{
            mainLogo: "https://www.pinclipart.com/picdir/big/407-4077133_1-tvg-id-tvg-name-top-channel-tvg.png",
        }
    },

    computed:{
        ...mapState(['userIsLogined','LoginedUserName'])
    },

    methods:{
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(function () {
          location.reload()
        })
        .catch(function (error) {
          console.log(error)
        });
    },
    }

    
}
</script>

<style scoped>
.main-header{
    height: 86px;
    width: 100%;
    background: #dc3545;
    padding: 0 20px;
}

p{
    margin: 0;
}

.register{
    margin-left: 40px;
}

.sub-navbar_inner a {
    text-decoration: none;
    color: #000000;
    font-size: 19px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
}

.sub-navbar{
    margin-top: 50px;
    margin-bottom: 80px;
}

.login  p {
    color: #ffffff;
    font-size: 16px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 600;
    cursor: pointer;
}
.register p{
   color: #ffffff;
    font-size: 16px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 600;
    cursor: pointer;
}

</style>