<template>
    <div class="enjoy-banner swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"
                v-for="banner in banners"
                :key="banner.id"
            >
                <img :src="getImages(banner.images)" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from "swiper"
import getImages from "@/modules/util-getImages"
export default {
    data(){
        return {
            banners: [
                {id:1,images:"https://www.forgettime.cn/vue-pro/images/swiper/swiper_1.jpg"},
                {id:2,images:"https://www.forgettime.cn/vue-pro/images/swiper/swiper_2.jpg"},
                {id:3,images:"https://www.forgettime.cn/vue-pro/images/swiper/swiper_3.jpg"},
                {id:4,images:"https://www.forgettime.cn/vue-pro/images/swiper/swiper_4.jpg"},
                {id:5,images:"https://www.forgettime.cn/vue-pro/images/swiper/swiper_5.jpg"},
                {id:6,images:"https://www.forgettime.cn/vue-pro/images/swiper/swiper_6.jpg"},
                {id:7,images:"https://www.forgettime.cn/vue-pro/images/swiper/swiper_7.jpg"},
                {id:8,images:"https://www.forgettime.cn/vue-pro/images/swiper/swiper_8.jpg"}
            ]
        }
    },
    methods:{
        getImages
    },
    created(){
        this.$nextTick(()=>{
            new Swiper(".enjoy-banner",{
                loop: true,
                pagination:{
                    el: ".swiper-pagination"
                },
                autoplay:true,
                //切换速度，即slider自动滑动开始到结束的时间（单位ms），也是触摸滑动时释放至贴合的时间。
                speed:500,
                autoplayDisableOnInteraction:false,
            })
        })
    }
}

</script>

<style lang="scss">
    img{
        width:100%;
    }
</style>
