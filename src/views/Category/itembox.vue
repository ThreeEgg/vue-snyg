<template>
    <ul>
        <!-- 分类1 -->
    <Item
        v-for="items in item.data['list1']"
        :key = "items.id"
        :items = "items"
    >
        
    </Item>
    <!-- 分类1 -->
    </ul>
</template>

<script>
import Item from "@/views/Category/item"
export default {
    data(){
        return {item:Object }
    },
    created(){
        this.$http("/api/list01.json").then(res=>{
                this.item = res;
        })
    }
}
</script>

<style>

</style>
