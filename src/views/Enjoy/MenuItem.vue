<template>
    <div class="menu-item">
        <div class="imgbox">
            <img :src="getImages(imgSrc)" alt="">
        </div>
        <span>{{title}}</span>
    </div>
</template>

<script>
import getImages from "@/modules/util-getImages"
export default {
    props:["title","imgSrc"],
    methods:{
        getImages
    }
}
</script>

<style lang="scss">
    .menu-item{
        width:20%;
        height:.80rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .imgbox{
            width:.40rem;
            height:.40rem;
            overflow: hidden;
            border-radius: 50%;
            img{
                width:100%;
            }
        }
        span{
            color:rgb(51,51,51);
            font-size:.14rem;
        }
    }
</style>
