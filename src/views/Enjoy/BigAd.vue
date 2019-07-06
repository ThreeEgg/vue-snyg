<template>
    <div class="big-ad">
        <!-- 大广告图片 -->
        <slot name="img"></slot>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
    .big-ad{
        width:100%;
        height:1.10rem;
        margin:.10rem 0;
        img{
            width: 100%;
        }
    }

</style>
