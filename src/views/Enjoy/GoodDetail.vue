<template>
    <div class="good-detail" v-if="isShow">
        <router-link to="/" slot="left">
            <div :class="['btn-box',{bg:isBg}]">
                <button><i class="fa fa-angle-left"></i></button>
                <span v-show="isBg">商品详情</span>
                <router-link
                    :to="{name:'cart'}"
                    tag="button"
                ><i class="fa fa-cart-arrow-down"></i></router-link>
                <button><i class="fa fa-ellipsis-h"></i></button>
            </div>
        </router-link>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"
                    v-for="item in detail.banner"
                    :key="item"
                >
                    <img :src="getImages(item)" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="price-box">
            <div class="price-now">
                ￥<span>{{detail.price | pro_price}}</span>.<span>{{detail.price | back_price}}</span>
            </div>
            <p>{{detail.title[0]}}</p>
            <div class="time">
                距结束 {{day}} 天 {{hour}} : {{min}} : {{sec}} : {{msec}}
            </div>
        </div>
        <div class="desc">
            <p>{{detail.name}}</p>
            <p>{{detail.description}}</p>
        </div>
        <div class="white"></div>
        <div :class="['info',{fixed:isFixed}]">
            <ul>
                <li
                    v-for="title in detail.info_title"
                    :key="title"
                    :class="{active:title === type}"
                    @click="changeRouter(title)"
                >{{title}}</li>
            </ul>
        </div>
        <BackTop></BackTop>
        <keep-alive include="InfoAfter,InfoImg,InfoParam">
            <router-view></router-view>
        </keep-alive>
        
        <GoodDetailBar :detail="detail"></GoodDetailBar>
    </div>
</template>

<script>
import Swiper from "swiper"
import { Toast } from 'mint-ui'
import getImages from "@/modules/util-getImages"
import GoodDetailBar from "./GoodDetailBar"
import BackTop from "@/components/BackTop"

export default {
    data(){
        return {
            detail:null,
            isShow:false,
            day:0,
            hour:0,
            min:0,
            sec:0,
            msec:0,
            type: "图文详情",
            rout:"",
            isBg:false,
            isFixed:false
        }
    },
    methods:{
        getImages,
        doubleNum(num){//两位数
            if(num < 10){
                return "0" + num;
            }else{
                return num;
            }
        },
        changeRouter(title){
            if(title == "图文详情"){
                this.rout = "info_img"
            }else if(title == "规格参数"){
                this.rout = "info_param"
            }else{
                this.rout = "info_after"
            }
            this.type = title;
            this.$router.push("/gooddetail/"+this.$route.params.id+"/"+this.rout);
            this.rout = title.name;
        },
        scrollBg(){
            var sTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(sTop > 0 && !this.isBg){
                this.isBg = true;
            }else if(sTop == 0 && this.isBg){
                this.isBg = false;
            }
        },
        scrollFixed(){
            var sTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(sTop > 600 && !this.isFixed){
                this.isFixed = true;
            }else if(sTop <=600 && this.isFixed){
                this.isFixed = false;
            }
        }
    },
    filters:{
        pro_price(val){
            return parseInt(val);
        },
        back_price(val){
            if(val.toFixed(2) * 100 % 100 < 10){
                return "0" + val.toFixed(2) * 100 % 100;
            }else{
                return val.toFixed(2) * 100 % 100;
            }
        }
    },
    created(){
        //console.log(this.$route)
        window.addEventListener("scroll",this.scrollBg);
        window.addEventListener("scroll",this.scrollFixed);
        let instance = Toast({
            message: '骚等..',
            iconClass: 'fa fa-spinner fa-pulse',
        },-1);
        this.$http.get("/api/sn/goods_detail/?id="+this.$route.params.id).then(res=>{
            //console.log(res.data)
            this.detail = res.data.data.good[0];
            // console.log(this.detail)
            instance.close();
            this.isShow = true;
            this.$nextTick(()=>{
                new Swiper(".swiper-container",{
                    loop: true,
                    pagination:{
                        el: ".swiper-pagination"
                    }
                })
            })
        })
    },
    mounted(){
        var timer = 86200000;
        setInterval(()=>{
            timer -= 100;
            this.day = parseInt(timer/1000/60/60/24);//天
            this.hour = parseInt(timer/1000/60/60%24);//小时
            this.min = this.doubleNum(parseInt(timer/1000/60%60));//分钟
            this.sec = this.doubleNum(parseInt(timer/1000%60));//秒
            this.msec = parseInt(timer/100%10);
        },100)
    },
    components:{
        GoodDetailBar,BackTop
    }
}
</script>

<style lang="scss">
    .good-detail{
        margin-bottom:.7rem;
        .white{
            width:100%;
            height:.1rem;
        }
        .btn-box{
            width:100%;
            height:.4rem;
            position:fixed;
            top:0;
            z-index:13;
            button{
                background: rgba(51,51,51,0.5);
                padding:0;
                border:0;
                width:.30rem;
                height:.30rem;
                border-radius: 50%;
                margin:.05rem 0 0 .1rem;
                position: absolute;
                outline: none;
                i{
                    font-size: .24rem;
                    color:#fff;
                    border-radius: 50%;
                }
            }
            button:nth-of-type(2){
                right:.5rem;
                i{
                    font-size: .18rem;
                }
            }
            button:nth-of-type(3){
                right:.1rem;
                i{
                    font-size: .18rem;
                }
            }
            span{
                font-size:.16rem;
                color:#222;
                position: absolute;
                left:1.6rem;
                top:0.1rem;
            }
        }
        .bg{
            background: #fff;
        }
        .price-box{
            width:100%;
            height:.75rem;
            padding:.10rem .12rem .14rem .12rem;
            background: linear-gradient(90deg,#f4347b,#ef1e1e);
            position: relative;
            .price-now{
                display: inline-block;
                height:.39rem;
                font-size:.20rem;
                color:#fff;
                position:absolute;
                left:.12rem;
                top:.1rem;
                span:nth-of-type(1){
                    font-size: .30rem;
                    font-weight: 600;
                }
                span:nth-of-type(2){
                    font-size: .25rem;
                    font-weight: 450;
                }
            }
            p{
                position:absolute;
                right:.12rem;
                top:.1rem;
                font-size: .25rem;
                font-weight: 450;
                color:#fff;
            }
            .time{
                position:absolute;
                right:.12rem;
                bottom:.1rem;
                color:#fff180;
                font-size:.12rem;
            }
        }
        .desc{
            width:100%;
            height:1.39rem;
            background:#fff;
            padding:.12rem .12rem 0;
            p:nth-of-type(1){
                height:.48rem;
                color:#333;
                font-size:.16rem;
                font-weight: 400;
            }
            p:nth-of-type(2){
                height:.48rem;
                color:#666;
                font-size:.13rem;
            }
        }
        .info{
            width:100%;
            height:.41rem;
            background: #fff;
            ul{
                width:100%;
                height:.41rem;
                display: flex;
                justify-content: center;
                li{
                    width:.66rem;
                    height:.41rem;
                    border-bottom:.02rem solid transparent;
                    text-align: center;
                    line-height: .41rem;
                    color:#333;
                    font-size:.13rem;
                }
                .active{
                    color:#f60;
                    border-bottom:.02rem solid #f60;
                }
            }
        }
        .fixed{
            position:fixed;
            top:.4rem;
            z-index:19;
        }
    }
</style>
