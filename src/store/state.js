import {
    createStore
} from 'vuex'

const store = createStore({
    state() {
        return {
            UsBussness: [],
            AppleNews:[],
            WallStreeNews:[],
            BBCmain:[],
            techChurchNews:[],
            userIsLogined:false,
            LoginedUserName:null,
            recData:[],
        }
    },

    mutations: {

        RECIEVE_BUSSNESS_NEWS(state, ApicallResult){
            state.UsBussness = ApicallResult
        },

        TECH_CHURCH(state, ApicallResult){
            state.techChurchNews = ApicallResult
        },

        RECIEVE_APPLE_BUSSNESS_NEWS(state, ApicallResult){
            state.AppleNews = ApicallResult
        },
        RECIEVE_WALL_STREET_NEWS(state, ApicallResult){
            state.WallStreeNews = ApicallResult
        },

        BBC_MAIN_HEADERS(state, ApicallResult){
          state.BBCmain = ApicallResult
        },
    },
    getters: {

      UsBussnessNews(state){
          return state.UsBussness
      },
      AppleBussnessNews(state){
        return state.AppleNews
      },

      WallStreetNews(state){
          return state.WallStreeNews
      },

      BBCmainheaders(state){
         return state.BBCmain
      },

      TechChurchres(state){
        return state.techChurchNews
      },
    },

    actions: {
       
        RecieveBackEndApiAboutUsBussnesNews({commit}){
            var url = "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1dff165197f9463f8564de097e8c0b01";
            fetch(url)
            .then((res)=> res.json())
            .then((json) => commit("RECIEVE_BUSSNESS_NEWS", json.articles))
        },

        RecieveBackEndApiAboutAppleBussnesNews({commit}){
            var url = "http://newsapi.org/v2/everything?q=apple&from=2020-12-20&to=2020-12-20&sortBy=popularity&apiKey=1dff165197f9463f8564de097e8c0b01";
            fetch(url)
            .then((res)=> res.json())
            .then((json) => commit("RECIEVE_APPLE_BUSSNESS_NEWS", json.articles))
        },

        RecieveBackEndApiAboutWallStreetNews({commit}){
            var url = "http://newsapi.org/v2/everything?domains=wsj.com&apiKey=1dff165197f9463f8564de097e8c0b01";
            fetch(url)
            .then((res)=> res.json())
            .then((json) => commit("RECIEVE_WALL_STREET_NEWS", json.articles))
        },

        BBCheaders({commit}){
            var url = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1dff165197f9463f8564de097e8c0b01";
            fetch(url)
            .then((res)=> res.json())
            .then((json) => commit("BBC_MAIN_HEADERS", json.articles))
        },

        TechChurch({commit}){
            var url = "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1dff165197f9463f8564de097e8c0b01";
            fetch(url)
            .then((res)=> res.json())
            .then((json) => commit("TECH_CHURCH", json.articles))
        }

    }
})



export default store;