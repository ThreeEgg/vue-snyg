<template>
    <!-- 分类1 -->
    <li :key="items.id" >
        <img :src="items.img" alt="">
        <span>{{items.title}}</span>
    </li>
    <!-- 分类1 -->
</template>

<script>
export default {
    props:{
        items:Object

    }
}
</script>

<style>

</style>
