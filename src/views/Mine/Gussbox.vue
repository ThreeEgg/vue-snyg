<template>
    <div class="guss-box"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">

        <div class="guss-item"
            v-for="item in gussItems"
            :key="item.id"
        >
            <div class="item-pic">
                <img :src="item.img" alt="">
            </div>
            <p class="name">{{item.name}}</p>
            <p class="desc">{{item.description}}</p>
            <p class="price">
                <i>￥</i><span>{{item.price}}</span>
                <button
                    @click="addGoodstoCart(item)"
                    class="buy"
                >加购</button>
            </p>
        </div>
    </div>
    
</template>

<script>
import { Toast } from 'mint-ui';
import { mapActions } from "vuex";
export default {
    data(){
        return {
            gussItems:[],
            loading:false,
            limit:6,
            page:1,
            hasMore:true//默认还有更多数据
        }
    },
    methods:{
        ...mapActions(["addGoodstoCart"]),
        loadMore() {
            if(!this.hasMore){
                this.loading=true;
                return false
            }
            this.getGussitems();

        },
        getGussitems(){
            let {limit,page} = this;
                let instance = Toast({
                    position: 'middle',
                    iconClass: 'fa fa-spinner fa-pulse',
                    
                    },-1);
                   this.loading=true;//请求数据之前关闭无限滚动
                this.$http.get("/api/sn/goods",{
                    params:{
                        limit,
                        page
                    }
                }).then(res=>{
                    this.loading=false;//拿到数据之后开启无限滚动
                    instance.close();
                    this.gussItems = this.gussItems.concat(res.data.data.object_list)
                    if(this.limit*this.page > res.data.data.total){//判断是否有更多数据
                        this.hasMore = false;
                        Toast({
                            message: '我是有底线的',
                            position: 'bottom',
                            duration:2000
                        });
                        return false
                    }
                    this.page++;
                })
                
            },

        },
        created(){
            
        }
}
</script>

<style lang="scss">
    .guss-box{
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-flow: wrap;
        padding-right: .05rem;
        .guss-item{
            width: 48%;
            height: 2.5rem;
            border:1px solid #bbb;
            margin-bottom: .10rem;
            background: #fff;
            .item-pic{
                height: 70%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
           .name,.desc{
                width: 100%;
                font-size: .14rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                padding: 0 .10rem;
            }
            .price{
                color: #FF4D4D;
                padding: .05rem .10rem;
                font-size: .16rem;
                .buy{
                    float:right;
                    border:none;
                    background: #FED53B;
                    padding:.02rem .10rem;
                    box-shadow:-1px -1px 1px #FFBE12;
                    outline: none;
                    font-size: .16rem;
                    border-radius: .05rem;
                }
            }
        }
    }
</style>
