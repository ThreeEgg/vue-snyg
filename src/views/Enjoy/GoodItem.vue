<template>
    <div class="good-item">
        <router-link class="imgbox"
            :to="{name:'info_img',params:{id:id}}"
            tag="div"
        >
            <img :src="getImages(imgSrc)" alt="">
        </router-link>
        <p class="name">{{name}}</p>
        <div>
            <span 
                v-for="item in title"
                :key="item"
            >{{item}}</span>
        </div>
        <p class="price">￥<span>{{price}}</span></p>
        <button class="btn" @click="addGoodstoCart(itemTotal)"><i class="fa fa-cart-arrow-down"></i></button>
    </div>
</template>

<script>
import getImages from "@/modules/util-getImages"
import { mapActions } from "vuex"
export default {
    props: ["imgSrc","name","price","title","id","itemTotal"],
    methods: {
        getImages,
        ...mapActions(["addGoodstoCart"])
    }
}
</script>

<style lang="scss">
    .good-item{
        width:46%;
        background: #fff;
        border-radius: .10rem;
        height:2.65rem;
        margin-top:.05rem;
        position: relative;
        .btn{
            position: absolute;
            right:0;
            bottom: 0;
            font-size:.16rem;
            padding:.04rem .08rem;
            background: #ff9;
            color: #333; 
            border-radius: 50%;
            z-index: 12;
            border:0;
            outline: none;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .imgbox{
            margin-left:0;
            width:100%;
            height:1.63rem;
            img{
                width:1.49rem;
                margin: .14rem auto;
                height:1.49rem;
            }
        }
        div{
            margin-left:.12rem;
            span{
                color:#F50;
                font-size:.12rem;
                border-radius: 5px;
                border:1px solid #F50;
                margin-right:2px;
                padding:0 2px;
            }
        }
        .name{
            height:.38rem;
            margin-left:.12rem;
            color:#333;
            font-size:.14rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            white-space: normal;
        }
        .price{
            margin-left:.12rem;
            margin-top:.05rem;
            color:rgb(255,103,0);
            font-size: .16rem;
            span{
                color:red;
                font-size: .18rem;
            }
        }
    }
    .good-item:nth-of-type(2n){
        margin-left:.10rem;
    }
</style>
