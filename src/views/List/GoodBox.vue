<template>
    <div class="goodbox">
        <GoodItem
            v-for="good in goods"
            :key="good.id"
            :good="good"
        ></GoodItem>
    </div>
</template>

<script>
import GoodItem from "./GoodItem"
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            goods:[]
        }
    },
    components:{
        GoodItem
    },
    created(){
        let load = Toast({
            message: '骚等..',
            iconClass: 'fa fa-spinner fa-pulse',
        },-1)
        this.$http.get("/api/sn/goods",{
            params:{
                limit:3
            }
        }).then(res=>{
            load.close();
            // console.log(res.data.data.object_list);
            this.goods = res.data.data.object_list;
        })
    }
}
</script>

<style lang="scss">
    .goodbox{
        width:100%;
        height:100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background:#fff;
        margin-bottom:.2rem;
    }
</style>
