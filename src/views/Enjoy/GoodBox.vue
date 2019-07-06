<template>
    <div class="good-box"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
    >
        <GoodItem
            v-for="good in goods"
            :key="good.id"
            :name="good.name"
            :imgSrc="good.img"
            :title="good.title"
            :price="good.price"
            :id="good.id"
            :itemTotal="good"
        ></GoodItem>
        
    </div>
</template>

<script>
import GoodItem from "./GoodItem"
import { Toast } from 'mint-ui'
export default {
    data(){
        return{
            goods:[],
            loading:false,
            limit:6,
            page:1,
            hasMore:true
        }
    },
    watch:{

    },
    components: {
        GoodItem
    },
    methods:{
        loadMore(){
            if(!this.hasMore){
                this.loading = true;
                Toast({
                    message: "我是有底线的...",
                    position: "bottom"
                },1500)
                return;
            }
            this.getGoods();
        },
        getGoods(){
            let {limit,page} = this;
            this.loading = true;
            let instance = Toast({
                message: '骚等..',
                iconClass: 'fa fa-spinner fa-pulse',
            },-1);
            this.$http.get("/api/sn/goods",{//http://www.forgettime.cn:8088/sn/goods
                params: {
                    limit,
                    page
                }
            }).then(res=>{
                instance.close();
                this.loading = false;
                this.goods = this.goods.concat(res.data.data.object_list);
                if(this.limit * this.page >= res.data.total){
                    this.hasMore = false;
                    return;
                }
                this.page++;
            }) 
        }
    },
    created(){
        
    },
    activated(){
        this.loading = false;
    },
    deactivated(){
        this.loading = true;
    }
}
</script>

<style lang="scss">
    .good-box{
        width:100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom:.60rem;
    }
</style>
