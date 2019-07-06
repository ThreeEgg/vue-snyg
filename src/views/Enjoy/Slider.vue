<template>
    <div class="slider-box">
        <div class="slider">
            <div class="left">
                <img src="https://www.forgettime.cn/vue-pro/images/menu/logo.png" alt="">
            </div>
            <div class="right swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"
                        v-for="slider in sliders"
                        :key="slider.id"
                    >   
                        <div class="lf">
                            <div>
                                <p>热门</p>
                                <span>{{slider.title[0]}}</span>
                            </div>
                            <div>
                                <p>热门</p>
                                <span>{{slider.title[1]}}</span>
                            </div>
                        </div>
                        <div class="rt">
                            <img :src="getImages(slider.images)" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import getImages from "@/modules/util-getImages.js"
import Swiper from "swiper"
export default {
    data(){
        return {
            sliders:[
                {id:1,title:["5块钱煮一锅，比燕窝还养人！","宝宝喝水有讲究，各年龄段的该如何补充"],images:"https://www.forgettime.cn/vue-pro/images/menu/sbanner_1.jpg"},
                {id:2,title:["无惧电费贵，智米直流变频风扇让你安心享受","腐竹这么做，香气扑鼻，营养丰富，人人都喜欢"],images:"https://www.forgettime.cn/vue-pro/images/menu/sbanner_2.jpg"},
                {id:3,title:["腐竹这么做，香气扑鼻，营养丰富，人人都喜欢","孩子结束高考即将迈入上大学，父母该怎么挑手机？"],images:"https://www.forgettime.cn/vue-pro/images/menu/sbanner_3.jpg"},
            ]
        }
    },
    methods:{
        getImages
    },
    created(){
        this.$nextTick(()=>{
            new Swiper(".right",{
                direction: 'vertical',
                loop: true,
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
    .slider-box{
        width:100%;
        height:.56rem;
        .slider{
            margin:0 12px;
            height:.56rem;
            background: #fff;
            border-radius: 8px;
            .left{
                width:.56rem;
                height:.56rem;
                float:left;

                img{
                    width:.33rem;
                    height:.33rem;
                    margin:11px auto;
                    border-radius: 8px 0 0 8px;
                }
            }
            .right{
                float: left;
                width:2.95rem;
                height:.56rem;
                .swiper-slide{
                    width: 2.95rem;
                    height:.56rem;
                    .lf{
                        width:2.20rem;
                        height:.56rem;
                        padding-top:.1rem;
                        float:left;
                        div{
                            width:2.30rem;
                            height:.16rem;
                            margin:.02rem 0;
                            p{
                                float:left;
                                padding:0 .05rem;
                                color:rgb(255, 255, 255);
                                background: #ff6f0e;
                                font-size: .08rem;
                                margin-right:.10rem;
                                border-radius: 5px;
                            }
                            span{
                                float:left;
                                font-size: .1rem;
                                width:1.80rem;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                white-space: nowrap;
                            }
                        }
                    }
                    .rt{
                        float:right;
                        width:.56rem;
                        height:.56rem;
                        img{
                            width:100%;
                            border-radius:0 8px 8px 0;
                        }
                    }
                }
            }
        }
    }
</style>
