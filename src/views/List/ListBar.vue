<template>
    <div class="listBar">
        <ListBarItem
            v-for="listBarItem in listBar"
            :key="listBarItem.id"
            :listBarItem="listBarItem"
        ></ListBarItem>
        
    </div>
</template>

<script>
import ListBarItem from "./ListBarItem"
export default {
    data(){
        return {
            listBar:[
                {id:1,imgSrc:"//image.suning.cn/uimg/MZMS/show/155117928298268957.png?from=mobile",desc:"精选"},
                {id:2,imgSrc:"//image.suning.cn/uimg/MZMS/show/155117929720977273.png?from=mobile",desc:"家电"},
                {id:3,imgSrc:"//image.suning.cn/uimg/MZMS/show/151384323374513944.png?from=mobile",desc:"酷机"},
                {id:4,imgSrc:"//image.suning.cn/uimg/MZMS/show/151375579188137688.png?from=mobile",desc:"超市"},
                {id:5,imgSrc:"//image.suning.cn/uimg/MZMS/show/151375580058931338.png?from=mobile",desc:"穿搭"}
            ]
        }
    },
    methods:{
        tab(id){
            this.select = id;
            console.log(id);
        }
    },
    components:{
        ListBarItem
    }
}
</script>

<style lang="scss">
    .listBar{
        width:100%;
        height:.575rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background:rgb(255,52,45);
    }
</style>
