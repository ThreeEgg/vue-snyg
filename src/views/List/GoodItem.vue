<template>
    <div class="good-item">
        <div class="imgbox">
            <img :src="good.img" alt="">
        </div>
        <span>￥{{good.price}}</span>
    </div>
</template>

<script>
export default {
    props:["good"]
}
</script>

<style lang="scss">
    .good-item{
        width:1.10rem;
        height:100%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .imgbox{
            width:1.10rem;
            height:1.10rem;
            img{
                width:100%;
            }
        }
        span{
            font-size: .14rem;
            color:#666;
        }
    }
</style>
