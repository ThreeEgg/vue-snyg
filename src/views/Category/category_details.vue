<template>
    <div class="categoryDetails" >
        <div v-if="HeaderClass=='category_Header'" :class="HeaderClass">
            <span class="Header_left"><router-link to="/categorylist"><img src="https://res.suning.cn/project/pdsWeb/wapV3/style/images/nav-back.png" alt=""></router-link></span>
            <span class="Header_right"><router-link to="/cart"><img src="https://res.suning.cn/project/pdsWeb/wapV3/style/images/nav-cart.png" alt=""></router-link>
            <a href=""><img src="https://res.suning.cn/project/pdsWeb/wapV3/style/images/nav-more.png" alt=""></a></span>
        </div>
    
        <div v-if="HeaderClass=='category_Header02' || HeaderClass=='category_Header03'" class="category_Header02">
            <span class="Header02_bt">
                <router-link to="/categorylist"><img src="https://res.suning.cn/project/pdsWeb/wapV3/style/images/nav-back2.png" class="header02_imglf"></router-link>
                商品详情
                <span class="header02_imglf02">
                    <img src="https://res.suning.cn/project/pdsWeb/wapV3/style/images/nav-cart2.png" class="header03_imglf">
                    <img src="https://res.suning.cn/project/pdsWeb/wapV3/style/images/nav-more2.png" class="header04_imglf">
                </span>
            
            </span>
        </div>

        <div class="category_Header03" v-if="HeaderClass=='category_Header03'">
            <span 
                    v-for="(Istitle,index) in Isdata[intem_select].info_title" 
                    :key="index"
                    @click="select(index)"
                    :class="[info_select==index?'details_active':'']"
                >{{Istitle}}</span>
        </div>
        <!-- 内容区域 -->
        <div class="content" v-if="Isdata[intem_select] != null">
            <div class="win">
                <!-- <img src="https://imgservice.suning.cn/uimg1/b2c/atmosphere/oLBXcxVCBLGMXPiMQvSdWA.jpg_400w_400h_4e_100Q" alt=""> -->
                <Banner id="banner" :banner_data="Isdata[intem_select]"></Banner>
            </div>
            <ul class="txt">
                <li class="money">
                    <template >
                        <span class="Present_price" >￥{{Isdata[intem_select].price}}</span>
                        <span class="Original_price ">￥{{Isdata[intem_select].price}}</span> 
                        <div class="money_Tips">支持支付宝</div>   
                    </template>
                    
                </li>
            
            <!-- 获取商品价格标签 -->
            <div class="bt" >
                {{Isdata[intem_select].name}}
            </div>
            <!-- 获取商品价格标签 -->
            </ul>
            <!-- 选择商品的参数 -->
            <!-- <div class="select">
                商品参数
            </div> -->
            <!-- 选择商品的参数 -->

            <!-- 配送地址 -->
            <!-- <div class="Delivery">
                配送地址
            </div> -->
            <!-- 配送地址 -->

            <div class="evaluate">
                <div class="evaluate_num">
                    <span class="evaluate_left">评价(8900+)</span>
                    <span class="evaluate_right">好评率</span>
                </div>

                <div class="evaluate_item">
                    <p><img src="https://res.suning.cn/project/pdsWeb/wapV3/style/images/orgstar.png" alt=""></p>
                    <p>评价//</p>
                </div>
                
            </div>
            <!-- 参数查看按钮 -->
            <div class="SelectGinseng">
                <span 
                    v-for="(Istitle,index) in Isdata[intem_select].info_title" 
                    :key="index"
                    @click="select(index)"
                    :class="[info_select==index?'details_active':'']"
                >{{Istitle}}</span>
            </div>
            <!-- 参数查看按钮 -->
            <div class="GinsengDetails">
                <div class="tuwen" v-if="info_select==0">
                    <template  v-for="(img,index) in Isdata[intem_select].info_img">
                    <img id="info_img" :src="img" v-if="index < 5" :key="img.key" alt="">
                    </template>
                </div>
                <div class="guige" v-if="info_select==1">
                    <span class="guige_main_bt">商品参数</span>
                    
                    <div 
                        v-for="param in Isdata[intem_select].info_param" 
                        :key="param.key"
                        class="guige_item"
                    >
                        <p class="guige_bt">{{param.summarize}}</p>
                        <ul class="guige_content">
                            <li 
                                v-for="details in param.details"
                                :key="details.key"
                            ><span class="txt_left">{{details.mark}}</span><span>{{details.content}}</span></li>
                        </ul>
                    </div>

                </div>

                <div class="baozhuang"></div>
            </div>
        </div>
        <!-- 内容区域 -->
        
        <div class="bottom">
            <ul>
                <li><img src="https://res.suning.cn/project/pdsWeb/wapV3/style/images/action-service.png" alt=""></li>
                <li><img src="https://res.suning.cn/project/pdsWeb/wapV3/style/images/action-favourite.png" alt=""></li>
                <li><img src="https://res.suning.cn/project/pdsWeb/wapV3/style/images/action-shop.png" alt=""></li>
            </ul>
            <span>立即购买</span>
            <span @click="addGoodstoCart(Isdata[intem_select])">加入购物车</span>
        </div>

    </div>
</template>

<script>
import { mapActions } from "vuex";
import { Toast } from 'mint-ui';
import Banner from "./Banner"
export default {
    name:"categorydetails",
    components:{
        Banner
    },
    data(){
        return { Isdata:[],HeaderClass:"category_Header",info_select:"0",intem_select:2  }
    },
    watch:{
        // intem_select:{
        //     immediate:true,
        //     handler(newValue,oldValue){
        //         this.
        //     }
        // }
    },
    methods:{
        ...mapActions(["addGoodstoCart"]),
        getScroll(){
            
            let Isscroll = document.documentElement.scrollTop || document.body.scrollTop;
            if(Isscroll < 300){
                this.HeaderClass = 'category_Header'; 
            }
            if(Isscroll >= 300){
                this.HeaderClass = 'category_Header02';    
            }
            
        },
        select(num){
            this.info_select = num;
        }
    },

    created(){
        this.intem_select = this.$route.query.ating;
        // console.log(this.intem_select);
        window.addEventListener("scroll",this.getScroll)
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
                this.Isdata = res.data.data.object_list;
                // console.log(this.Isdata)
                info.close();
                
            });
    }
}
</script>

<style lang="scss" scoped>
.details_active{
    border-bottom:0.02rem solid orange !important;
    
}
    #banner{
        height:3.75rem;
    }
    .category_Header{
        width:100%;
        z-index:5;
        position:fixed;
        text-align: center;
        padding:0 0.10rem;
        height:0.44rem;
        img{
            display:inline-block;
            width:0.33rem;
            height:0.33rem;
            margin-top:0.055rem;
        }
        span{
            height:100%;
        }
        .Header_left{
            float:left;
        }
        .Header_right{
            width:0.70rem;
            float:right;
            a:first-of-type{
                margin-right:0.04rem;
            }
        }
    }

    .category_Header02{
        width:100%;
        z-index:5;
        padding:0 0.10rem;
        position:fixed;
        text-align: center;
        background:white;
        border-bottom:0.01rem solid #ddd;
        line-height:0.44rem;
        height:0.44rem;
        .Header02_bt{
            display: inline-block;
            width:100%;
            position:relative;
            font-size: .16rem;
            img{
                width:0.33rem;
                height:0.44rem;
            }
            .header02_imglf{
                left:0;
                position:absolute;
            }
            .header02_imglf02{
            
                width:0.70rem;
                right:0;
                position:absolute;
                img{
                    width:0.30rem;
                    height:0.30rem;
                    margin:0.05rem 0;
                    float:left;
                }
                img:last-of-type{
                    float:right;
                }
            }
            
        }
    }

        .category_Header03{
            width:100%;
            margin-top:0.44rem;
            background: white;
            position: fixed;
            z-index: 5;
            text-align: center;
            span{
                color:#333;
                margin:0 0.07rem;
                height:0.39rem;
                text-align:center;
                line-height:0.39rem;
                font-size:0.14rem;
                border-bottom:0.02rem solid white;
                display:inline-block;
            }
        }
    // 内容的样式
    .content{
        background:#f2f2f2;
        margin-bottom:0.49rem;
        .win{
            height:3.75rem;
            img{
                width:100%;
                height:100%;
            }
        }

        .txt{
            background:white;
            padding:0.12rem 0.12rem 0 0.12rem;
            .money{
                background:white;
                margin-bottom:0.05rem;
                .Present_price{
                    font-size:0.24rem;
                    color:#f60;
                }
                .Original_price{
                    color:#999;
                    font-size: .14rem;
                }
                .money_Tips{
                    font-size:0.13rem;
                    line-height:0.20rem;
                    color:#666;
                }
            }

            .bt{
                margin-bottom:0.08rem;
                font-size: .14rem;
                // background:orange;
            }


        }

        
        .select{
            height:0.42rem;
            padding:0.10rem;
            // background:rgb(44, 30, 30);
        }

        .Delivery{
            height:0.39rem;
            // background:rgb(223, 62, 62);
        }

        .evaluate{
            background:white;
            .evaluate_num{
                overflow:hidden;
                background:white;
                border-bottom:0.01rem solid #ccc;
                padding:0.10rem;
                .evaluate_left{
                    font-size:0.14rem;
                    line-height:0.19rem;
                    float:left;
                }
                .evaluate_right{
                    line-height:0.19rem;
                    font-size:0.14rem;
                    float:right;
                }
            }

            .evaluate_item{
                img{
                    width:0.64rem;
                    height:0.10rem;
                    margin-top:0.03rem;
                    margin-left:0.03rem;
                }
                p{
                    padding:0.10rem; 
                    font-size: .14rem;
                }
                background:white;
                border-bottom:0.01rem solid #ccc;
            }
        }

        .SelectGinseng{
            background:white;
            text-align:center;
            margin:0.10rem 0;
            span{
                color:#333;
                margin:0 0.07rem;
                height:0.39rem;
                text-align:center;
                line-height:0.39rem;
                font-size:0.14rem;
                border-bottom:0.02rem solid white;
                display:inline-block;
            }
        }

        .GinsengDetails{
            background:white;
            .tuwen{
                #info_img{
                    width:100%;
                    height:auto;
                }
                background:orchid;
            
            }


            .guige{
                padding:0.12rem 0.13rem;
                margin-bottom:0.49rem;
                background:white;
                font-size:0.14rem;
                /* .guige_main_bt{
                
                } */

                .guige_item{
                    background:white;
                    color:#909090;
                    font-size:0.10rem;
                
                    .guige_bt{
                        font-size:0.13rem;
                        border-top:0.01rem dashed #dcdcdc;
                        margin-top:0.15rem;
                        padding-top:0.10rem;
                    }
                    .guige_content{
                        margin-top:0.10rem;
                        li{
                          font-size:0.13rem;
                          margin-bottom: 0.10rem;   
                        }
                        .txt_left{
                            display: inline-block;
                            width:1.15rem;
                        }
                    }
                }
            }
            
        }



    }
    
    .bottom{
        width:100%;
        height:0.49rem;
        position:fixed;
        bottom:0;
        display:flex;
        background:white;
        ul{
            display: flex;
            li{
                width:0.51rem;
                height:0.50rem;
                margin:0 0.04016rem;
                text-align:center;
                display:flex;
                flex-direction:column;
            
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
        span{
            display:inline-block;
            width:0.94953rem;
            height:0.35rem;
            background:rgb(3, 154, 214);
            text-align:center;
            line-height:0.35rem;
            color:white;
            font-size:0.14rem;
        }

        span:first-of-type{
            margin-right:0.03rem;
            margin-top:0.07rem;
            background: linear-gradient(90deg,#ffd000,#ff9200);
            border-radius:0.05rem 0 0 0.05rem;
        }
        span:last-of-type{
        
            margin-top:0.07rem;
            margin-right:0.06rem;
            background: linear-gradient(90deg,#ff8e00,#f50 97%);
            border-radius:0 0.05rem 0.05rem 0;
        }
       
    }
</style>
