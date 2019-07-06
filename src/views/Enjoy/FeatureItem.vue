<template>
    <div class="feature-item">
        <p>{{feature.title}}</p>
        <p>{{feature.desc}}</p>
        <div>
            <img :src="getImages(feature.imgSrc)" alt="">
        </div>
    </div>
</template>

<script>
import getImages from "@/modules/util-getImages"
export default {
    props:["feature"],
    methods:{
        getImages
    }
}
</script>

<style lang="scss">
    .feature-item{
        width:.85rem;
        height:1.25rem;
        margin-bottom:2px;
        margin-right:1px;
        background: #fff;
        border-radius: 5px;
        p{
            font-size:.12rem;
            text-indent: .1rem;
        }
        p:nth-of-type(1){
            color:#333;
            font-size: .16rem;
        }
        p:nth-of-type(2){
            width:.84rem;
            margin-top:.04rem;
            color:#999;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        div{
            width:100%;
            height:.70rem;
            margin-top:.1rem;
            img{
                width: .7rem;
                height:.7rem;
                margin:0 auto;
            }
        }
    }
</style>
