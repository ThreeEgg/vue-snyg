<template>
    <div class="news">
        <newsHeader  :msg="msg"></newsHeader>
        <div class="img">
            <img style="padding-top:0.5rem" src="//image3.suning.cn/uimg/MFS/show/153682237209666977.jpg?format=is_0-198-1920-864a%7C710w_320h_2e.webp" alt="">
        </div>
        <goodsbox></goodsbox>
    </div>
</template>
<script>
import goodsbox from "./goodsbox";
import newsHeader from "./newsheader/";
export default {
    data(){
        return{
            msg:"让世界为之动容的商品"
        }
    },
    components:{
        newsHeader,
        goodsbox
    }
}
</script>
<style>
 .img img{
     width:3.75rem;
 }
</style>




