import { createWebHistory, createRouter } from "vue-router";
import BitcoinNews from '../components/TheHome'
const routes = [
  {path: '/', component:BitcoinNews},
  {path: '/UsBusnessNews', component:()=>import(/* webpackChunkName: "UsNews" */ '../components/UsBussnessNews')},/* webpack lazy load */
  {path: '/AppleNews', component:()=>import(/* webpackChunkName: "AppleNews" */ '../components/AppleNews')},/* webpack lazy load */
  {path: '/register', component:()=>import(/* webpackChunkName: "Register" */ '../Layouts/Register')},/* webpack lazy load */
  {path: '/login', component:()=>import(/* webpackChunkName: "Login" */ '../Layouts/Login')},/* webpack lazy load */
  {path: '/currency', component:()=>import(/* webpackChunkName: "Login" */ '../components/CurrencyCalc')},/* webpack lazy load */
  {path: '/writeNews', component:()=>import(/* webpackChunkName: "WriteNews" */ '../components/WriteNews')},/* webpack lazy load */
]

const router = createRouter({
 history:createWebHistory(),
 routes
})

export default router