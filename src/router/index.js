import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import enjoy from "./enjoy"
import category from "./category"
import list from "./list"
import cart from "./cart"
import mine from "./mine"
import categoryDetails from "./category_details"
import gooddetail from "./gooddetail"
import payment from "./payment"
import minelogin from "./minelogin"
import categorylist from "./category_list"
import news from "./news"
import jiwu from "./jiwu"
export default new Router({
  // mode: 'history',
  routes: [
    {path:"/",redirect:"enjoy"},
    enjoy,category,list,cart,mine,gooddetail,minelogin,payment,categoryDetails,categorylist,
    news,jiwu,
    {path:"/notfound",component:()=>import("@/views/Notfound/Notfound")},
    {path:"*",redirect: "notfound"}
  ]
})
