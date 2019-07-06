<template>
    <div class="enjoy">
        <SortHead></SortHead>
        <Banner></Banner>
        <Menu></Menu>
        <Slider></Slider>
        <BigAd>
            <img slot="img" src="https://www.forgettime.cn/vue-pro/images/menu/air.png" alt="">
        </BigAd>
        <Feature></Feature>
        <BigAd>
            <img slot="img" src="https://www.forgettime.cn/vue-pro/images/menu/drinks.png" alt="">
        </BigAd>
        <div class="love">
            <div>
                <i class="fa fa-heart"></i>
                <span>猜你喜欢</span>
                <i class="fa fa-heartbeat"></i>
            </div>
        </div>
        <GoodBox></GoodBox>
        <BackTop></BackTop>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from "@/components/Tabbar"
import SortHead from "./SortHead"
import Banner from "@/components/Banner"
import Menu from "./Menu"
import GoodBox from "./GoodBox"
import BackTop from "@/components/BackTop"
import Slider from "./Slider"
import BigAd from "./BigAd"
import Feature from "./Feature"
export default {
    name: "enjoy",
    data(){
        return {
            img:"https://www.forgettime.cn/vue-pro/images/menu/air.png",
            dis:0
        }
    },
    components:{
        Tabbar,SortHead,Banner,Menu,GoodBox,BackTop,Slider,BigAd,Feature

    },
    activated(){
        window.scrollTo(0,this.dis);
    },
    beforeRouteLeave(to,from,next){
        let dis = document.documentElement.scrollTop || document.body.scrollTop;
        this.dis = dis;
        next();
    }
}
</script>

<style lang="scss">
    .enjoy{
        .love{
            width:100%;
            height:.50rem;
            display: flex;
            justify-content: center;
            align-items: center;
            div{
                display: flex;
                i{
                    font-size: .16rem;
                    line-height:.20rem;
                    margin:0 .10rem;
                }
                span{
                    font-size: .16rem;
                }
            }
        }
    }
    
</style>
