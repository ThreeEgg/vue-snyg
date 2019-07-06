<template>
    <div class="goodsbox"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
        <goodItem 
            v-for="good in goods"
            :key="good.id"
            :good="good"
        ></goodItem>
        
    </div>
</template>
<script>
import goodItem from "./goodItem";
import {Toast} from "mint-ui";
export default {
    components:{
    goodItem
    },
    data(){
        return{
            goods:[],
            loading:false,
            limit:4,
            page:1,
            hasMore:true
        }
    },
    methods:{
        loadMore(){
            if(!this.hasMore){
                this.loading=true;
                Toast({
                    message: '我是有底线的...',
                    position:"bottom"
                },1000);
                return false;
            }


            this.getGoods()
        },
        getGoods(){
            let{limit,page}=this;
            this.loading = true;
            let instance =Toast({message:"正在加载..."},-1);
            this.$http.get("/api/sn/goods",{
                params:{
                    limit,
                    page
                }
            }).then(res=>{
                instance.close()
                this.loading = false
                this.goods=this.goods.concat(res.data.data.object_list)
                if(this.limit*this.page>=8){
                    this.hasMore = false;
                    return false;
                }
                this.page++
            })
        }
    },
    created(){
        
    }
}
</script>
<style lang="scss">
    .goodsbox{
        width:3.75rem;
        margin-top:0.14rem;
        padding-bottom: 0.7rem;
    }
</style>


