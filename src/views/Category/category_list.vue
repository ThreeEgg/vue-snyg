<template>
    <div class="categorys">
        <!-- 搜索栏 -->
        <div class="sousuo">
            <router-link to="/enjoy" class="fa fa-angle-left"></router-link>
            <div class="input">
                <router-link to="/enjoy" class="item item1 fa fa-search"></router-link>
                <a class="item">家居建材每300减40</a>
            </div>
        </div>
        <!-- 搜索栏 -->

        <div class="content">
            <!-- <div class="Tips">
                <img src="//image5.suning.cn/uimg/asbs/ad/1556616681953_imgWx_tmndir.jpg" alt="">
            </div> -->
        <ul class="sort">
            <li @click="Istxt">综合</li>
            <li @click="Istxt">销量</li>
            <li @click="Istxt">价格</li>
            <li @click="Istxt">筛选</li>
        </ul>
        <ul class="sort2">
            <li @click="Istxt">苏宁服务</li>
            <li @click="Istxt">品牌</li>
            <li @click="Istxt">尺寸</li>
            <li @click="Istxt">电视类型</li>
        </ul>
        <ul class="contentbox" v-if="item != null">
                <li 
                    v-for="(items,index) in item"
                    :key="index"
                    class="content_item"
                >
                    <router-link :to="{path:'/categorydetails',query:{ating:index}}">
                        <div class="img">
                            <img :src="items.img" alt="">
                        </div>
                    </router-link>
                        <div class="txt">
                            <router-link :to="{path:'/categorydetails',query:{ating:index}}">
                                <p class="bt">{{items.name}}</p>

                                <p class="Istxt">{{items.description}}</p>
                            </router-link>
                            <p class="money">
                                <span>￥{{items.price}}</span>
                                <button @click="addGoodstoCart(items)" class="buy">购买</button>
                            </p>
                        </div>  

                
            </li>
        </ul>
        </div>

        
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import getImg from "@/modules/util-getImages";
import { mapActions } from "vuex";
export default {
    name:"list",
    data(){
        return { 
            item:[],
            page:1,
            limit:10
            }
    },
    methods:{
        getImg,
        ...mapActions(["addGoodstoCart"]),
        Istxt(){
            Toast({
                message: '我是一个假按钮,没事你继续',
                iconClass: 'fa fa-cog fa-spin',
                duration: 400
            });
        },
        get(){
            let info = Toast({
                message: '正在加载中...',
                iconClass: 'fa fa-cog fa-spin'
            },-1);
            let {limit,page} = this;
            this.$http("/api/sn/goods",{
                params:{
                    limit,
                    page
                }
            
            }).then( res=>{
                this.item = res.data.data.object_list;
                info.close();
            
            });
        }
    },
    created(){
        this.get()
    }
}
</script>

<style lang="scss" scoped>
html{
    height:100%;
}
.categorys{
    .content{
        background:white;
        margin-top:0.44rem;
    .Tips{
        height:1.35rem;
        background:gray;
        img{
            height:1.35rem;
        }
    }
    .sort{
    height:0.44rem;

    
    li{
        font-size:0.14rem;
        float:left;
        text-align:center;
        line-height:0.44rem;
        width:0.9375rem;
        height:0.44rem;
    }

    
}

.sort2{
    padding:0.08rem 0.05rem;
    overflow:hidden;
    li{
        font-size:0.13rem;
        width:0.755028rem;
        height:0.28rem;
        line-height:0.28rem;
        background:#f5f5f5;
        padding:0 0.04rem;
        margin-right:0.10rem;
        text-align:center;
        float:left;
    }

    li:last-child{
        margin:0;
    }
}


    .contentbox {
        .content_item{
            padding:0.10rem;
            width:100%;
            height:1.69rem;
            .img{
                float:left;
                margin-right:0.10rem;
                img{
                    width:1rem;
                    height:1rem;
                }
            }
            .txt{
                
                height:100%;
                overflow:hidden;
                
            }
        }   
            .bt{
                font-size:0.13rem;
                margin-bottom:0.05rem;
                overflow:hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                margin-bottom:0.055rem;
            }

            .Istxt{
                font-size:0.12rem;
                padding-top:0.05rem;    
                padding-right:0.13rem;  
                margin-bottom:0.08rem;
            }
            .money{
                color:#f60;
                font-size: .16rem;
                span{
                    float:left;
                }
                .buy{
                    float:left; 
                    background:#fed53b;
                    border:0;
                    position:relative;
                    z-index:40; 
                    padding:0.02rem;  
                    width:0.38rem;
                    border-radius:0.05rem;  
                    height:0.25rem ;
                    margin-left:1.10rem;     
                }
                button{
                    font-size: .16rem;
                }
            }
        
        } 
    }
}

.sousuo{
    width:100%;
    height:0.44rem;
    background:#F8F8F8;
    z-index:41;
    box-shadow:0 1px 1px #DCDCDC;
    position:fixed;
    top:0;
    .fa-angle-left{
        font-size:0.27rem;
        margin-top:0.07rem;
        margin-left:0.11rem;
    }
}

.input{
    position: absolute;
    top: 0.07rem;
    left:0.33rem;
    width: 86%;
    height: 0.30rem;
    background: #FFF;
    border: 1px solid #CCC;
    border-radius: 4px;
    a{
        font-size:0.13rem;
        height:0.33rem;
        color:rgb(190, 190, 190);
    }
    .item:first-of-type{
        margin-left:0.08rem;
    }
    .item{
        height: 0.33rem;
        line-height:0.33rem;
        float:left;
    }
}


</style>
