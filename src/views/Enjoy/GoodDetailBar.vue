<template>
    <div class="bar">
        <ul>
            <div 
                class="item"
                v-for="icon in icons"
                :key="icon.id"
            >
                <i :class="['fa', 'fa-' + icon.icon]"></i>
                <span>{{icon.title}}</span>
            </div>
        </ul>
        <div class="rt">
            <input type="button" value="立即购买">
            <input type="button" value="加入购物车" @click="addGoodstoCart(detail)">
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
    props:["detail"],
    data(){
        return {
            icons:[
                {id:1,icon:"phone",title:"客服"},
                {id:2,icon:"star-o",title:"关注"},
                {id:3,icon:"linkedin-square",title:"店铺"},
            ]
        }
    },
    methods:{
        ...mapActions(["addGoodstoCart"]),
    }
}
</script>

<style lang="scss">
    .bar{
        height:.60rem;
        width:100%;
        position:fixed;
        bottom:0;
        background:#fff;
        padding-top:.04rem;
        ul{
            width:50%;
            height:.60rem;
            float:left;
            display: flex;
            justify-content: space-around;
            .item{
                width:33.3%;
                height:.60rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                i{
                    color:#666;
                    font-size:.28rem;
                }
                span{
                    color:#666;
                    font-size:.10rem;
                }
            }
        }
        .rt{
            width:50%;
            height:.60rem;
            float:left;
            input:nth-of-type(1){
                width:47%;
                height:.35rem;
                float:left;
                color:#fff;
                line-height: .35rem;
                font-size:.14rem;
                font-weight: 300;
                text-align: center;
                border-radius: 5px 0 0 5px;
                padding:0 .12rem;
                border:0;
                outline: none;
                margin-top:.12rem;
                background:linear-gradient(90deg,#ffd000,#ff9200);
            }
            input:nth-of-type(2){
                width:47%;
                height:.35rem;
                float:left;
                color:#fff;
                line-height: .35rem;
                font-size:.14rem;
                font-weight: 300;
                text-align: center;
                border-radius:0 5px 5px 0;
                padding:0 .12rem;
                border:0;
                outline: none;
                margin-top:.12rem;
                margin-left:.05rem;
                background:linear-gradient(90deg,#ff8e00,#f50 97%);
            }
        }
    }
</style>
