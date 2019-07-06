<template>
        <div class="jiwu-banner swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"
                    v-for="banner in jiwubanner"
                    :key="banner.id"    
                >
                    <img swiper-animate-effect="bounceOut" width="100%" :src="banner.img" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
</template>
<script>
import Swiper from "swiper"
export default {
    data(){
        return{
            jiwubanner:[]
        }
    },
    created(){
        this.$http.get("/api/sn/goods",{
            params:{
                limit:4
            }
        }
        ).then(res=>{
            // console.log(res.data.data.object_list);
            this.jiwubanner = res.data.data.object_list;
            this.$nextTick(()=>{
                new Swiper(".jiwu-banner",{
                        
                        loop:true,
                        pagination: {
                            el: '.swiper-pagination'
                        }
                    
                })
            })
        })
    }
}
</script>
<style>
    .swiper-slide img{
        width:3.75rem;
    }
</style>


