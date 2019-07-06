<template>
    <div class="gooditem">
        <div class="title"><span>{{"0"+good.id}}</span>{{good.name}}</div>
        <img width="100%" :src="good.img" alt="">
        <div class="price"><span>{{good.price+"元"}}</span> <router-link to="/news"><span class="gotobuy">去购买>></span></router-link>
        </div>
        <div class="detail">{{good.name}}{{good.description}}</div>
    </div>
</template>
<style lang="scss">
    .title span{
        font-size:0.3rem;
        font-weight: 900;
    }
    .title{
        font-size:0.18rem;
        font-weight:900;
    }
    .gooditem>div{
        padding:0.1rem;
    }
    .price{
        width:100%;
        height:0.4rem;
        color:red;
        display:flex;
        justify-content:space-between;
        span{
            font-size:.14rem;
        }
    }
    .gotobuy{
        padding:0.03rem;
        border:1px solid orangered;
        color:orangered;
        font-size:.14rem;
    }
    .detail{
        font-size:.12rem;
    }
</style>
<script>
export default {
    props:{
        good:Object
    }
}
</script>