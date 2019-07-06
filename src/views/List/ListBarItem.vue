<template>
    <div 
        :class="['listBar-item',{active:current==listBarItem.id}]"
        @click="tab(listBarItem.id)"
    >
        <div class="imgbox">
            <img :src="listBarItem.imgSrc" alt="">
        </div>
        <span>{{listBarItem.desc}}</span>
    </div>
</template>

<script>
export default {
    props:["listBarItem"],
    data(){
        return{
            current:1
        }
    },
    methods:{
        tab(id){
            this.current = id;
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .listBar-item{
        width:.75rem;
        height:.575rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .imgbox{
            width:.25rem;
            height:.25rem;
            img{
                width:100%;
            }
        }
        span{
            font-size: .12rem;
            color:#fff;
        }
    }
    .active{
        background:rgb(205,0,49);
    }
</style>
