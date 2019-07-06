<template>
    <div class="jiwuitem">
        <img width="100%" :src="good.img" alt="">
        <div class="title">{{good.name}}</div>
        <div class="price"><span>{{good.price+"元"}}</span> <router-link to="/news"><span class="gotobuy">去购买>></span></router-link>
        </div>
    </div>
</template>
<style lang="scss">
    .jiwuitem{
        padding:0.1rem;
        width:1.8rem;
        height:3rem;
        margin-top:0.2rem;
        position:relative;
        box-shadow: 2px 2px 2px 1px #888888;
    }
    .jiwuitem .price{
        width:100%;
        height:0.4rem;
        color:red;
        display:flex;
        justify-content:space-between;
        position:absolute;
        width:1.6rem;
        top:2.6rem;
        span{
            font-size: .14rem;
        }
    }
    .jiwuitem .price .gotobuy{
        padding:0.03rem;
        border:1px solid orangered;
        color:orangered;
    }
    .jiwuitem .title{
        height:0.6rem;
        padding-top:0.1rem;
        overflow:hidden;
        font-size: .12rem;
    }
</style>
<script>
export default {
    props:{
        good:Object
    }
}
</script>