<template>
<ul>
  <li>{{currencyData}}</li>
</ul>
<div class="container">
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <div class="panel panel-primary text-center">
        <div class="error">
          Please enter numeric value
        </div>
        <div class="panel-body">
          <form class="form-vertical">

            <div class="form-group center">
              <label for="">Enter Value:</label>
              <input type="number" class="amount form-control" placeholder="Enter value" min="1">
            </div>


            <div class="form-group inline-block">
              <label for="">From currency:</label>
              <select class="currency-list form-control" v-model="selectedFrom" @change="RecieveCurrency">
                <option v-for="valuteFrom in currencyVal" :key="valuteFrom">{{valuteFrom}}</option>
              </select>
            </div>

            <div class="form-group inline-block">
              <label>To currency:</label>
              <select class="currency-list form-control" v-model="selectedTo">
                <option v-for="valuteTo in currencyVal" :key="valuteTo" >{{valuteTo}}</option>
              </select>
            </div>
            <div class="form-group inline-block">
              <button>Convert</button>
            </div>
          </form>
           <p class="results">0</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import currencyVal from '../CurrencyValues'
export default {
    data(){
      return{
        currencyVal : [],
        currencyData:[],
        selectedFrom: '',
        selectedTo: '',
      }
    },
  computed:{
  
  },

  methods:{
  RecieveCurrency(){
            var url = "https://v6.exchangerate-api.com/v6/43aaaeaa963a6c88d180bd92/latest/"+this.selectedFrom;
            fetch(url)
            .then((res)=> res.json())
            .then((json) => this.currencyData=json)
        }
},

created(){
  this.currencyVal = currencyVal
},

}
</script>

<style scoped>

.panel {
  background: #333333;
  border: solid white;
}

.results {
  font-size: 1em;
  color: #FFFFFF;
}

.dropdown {
  margin-bottom: 50px;
}

.inline-block {
  display: inline-block;
}

.center {
  width: 90%;
  margin: 0 auto 30px;
}

</style>