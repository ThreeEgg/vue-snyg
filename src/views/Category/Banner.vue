<template>
    <div class="enjoy-banner swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"
                v-for="banner in banners.banner"
                :key="banner.key"
            >
                <img :src="getImages(banners.img)" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from "swiper"
import getImages from "@/modules/util-getImages"
export default {
    props:['banner_data'],
    data(){
        return {
            banners:[],
            limit:10,
            page:1
        }
    },
    methods:{
        getImages
    },
    watch:{
        banner_data:{
            immediate:true,
            handler(newValue,oldValue){
                this.banners = this.banner_data;
                    this.$nextTick(()=>{
                    new Swiper(".enjoy-banner",{
                        loop: true,
                        pagination:{
                            el: ".swiper-pagination"
                        }
                    })
                })
            }
        }
    }
}

</script>

<style lang="scss">
    .swiper-wrapper{
        img{
            width:100%;
            height:100%;
        }
    }
</style>
