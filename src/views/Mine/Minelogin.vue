<template>
    <div class="mine-login">
        <mt-header title="我的易购">
            <router-link slot="left" 
            :to="{name:'enjoy'}">
                <mt-button icon="back"></mt-button>
            </router-link> 
            <mt-button icon="more" slot="right" @click="isQuit=!isQuit"></mt-button>
        </mt-header>
        <div class="quit" v-if="isQuit" @click="loginQuit">退出</div>
        <div class="sn-banner">
            <span class="sn-setting fa fa-cog"></span>
            <div class="user-info">
                <div class="user-logo">
                    <div class="logo-img"></div>
                    <div class="logo-txt">&nbsp;&nbsp;去实名认证</div>
                </div>
                <div class="user-detail">
                    <div class="user-name">
                        <span>{{tel | filterTel}}</span>
                    </div>
                    <div class="user-level">
                        <span>生态值&nbsp;&nbsp;127</span>
                    </div>
                </div>
            </div>
            <div class="vip">
                <img src="@/assets/mine/free-try.jpg" alt="">
            </div>
        </div>
        <BackTop></BackTop>
        <div class="money-list">
            <div class="money-item"
            v-for="item in moneyList"
            :key="item.id"
            >
                <span>{{item.money}}</span>
                <i>{{item.type}}</i>
            </div>
            <div class="myBag">
                <i class="fa fa-credit-card"></i>
                <span>我的钱包</span>
            </div>
        </div>
        <div class="sn-order">
            <div class="order-title">
                <router-link
                :to="{name:'cart'}"
                >我的购物车</router-link>
                <i>查看全部订单<b class="fa fa-chevron-right"></b></i>
            </div>
            <div class="order-list">
                <div class="order-item"
                    v-for="item in orderList"
                    :key="item.id"
                >
                    <span :class="['fa','fa-'+item.icon]"></span>
                    <i>{{item.desc}}</i>
                </div>
            </div>
        </div>
        <div class="sn-server"> 
            <div class="server-item"
                v-for="item in server"
                :key="item.id"
            >
            <img :src="item.pic" alt="">
            <span>{{item.desc}}</span>

            </div>
        </div>
        <div class="guss-like">
            <div class="guss-title" @click="addGoodstoCart">猜你喜欢</div>
                <!-- 广告列表 -->
                <Gussbox></Gussbox>
        </div>
        
    </div>
</template>

<script>
import Gussbox from "./Gussbox"
import BackTop from "@/components/BackTop"
import { mapActions,mapMutations } from 'vuex'
export default {
    data(){
        return {
            moneyList:[
                {id:1,money:0,type:"优惠券"},
                {id:2,money:0,type:"领云钻"},
                {id:3,money:0,type:"优任性付"},
                {id:4,money:"+0.00",type:"零钱宝"}
            ],
            orderList:[
                {id:1,icon:"credit-card",desc:"待支付"},
                {id:2,icon:"bus",desc:"待收货"},
                {id:3,icon:"pencil-square-o",desc:"待评价"},
                {id:4,icon:"bitbucket-square",desc:"退还/售后"},
                {id:5,icon:"list-alt",desc:"常购清单"}
            ],
            server:[
                {id:1,pic:require("@/assets/mine/sv_1.png"),desc:"商品关注"},
                {id:2,pic:require("@/assets/mine/sv_2.png"),desc:"店铺关注"},
                {id:3,pic:require("@/assets/mine/sv_3.png"),desc:"足迹"},
                {id:4,pic:require("@/assets/mine/sv_4.png"),desc:"客户服务"},
                {id:5,pic:require("@/assets/mine/sv_5.png"),desc:"必抢清单"},
                {id:6,pic:require("@/assets/mine/sv_6.png"),desc:"拼购"},
                {id:7,pic:require("@/assets/mine/sv_7.png"),desc:"校园VIP"},
                {id:8,pic:require("@/assets/mine/sv_8.png"),desc:"我的活动"}

            ],
            isQuit:false,
            tel:""
        }
    },
    methods:{
        ...mapActions(["addGoodstoCart"]),
        loginQuit(){
            this.$store.dispatch("loginInfoDelete");
            this.$router.push("/mine");
            
        },
    },
    created(){
        if(this.$store.state.Login.tel){
            this.tel = this.$store.state.Login.tel;
        }else{
            this.$router.push("/mine");
        }
    },
    filters:{
        filterTel(val){
            return val.substring(0,3)+ "****" +val.substring(7)
        }
    },
    components:{
        Gussbox,BackTop
    }
}
</script>

<style lang="scss">
    .mine-login{
        width: 100%;
        .quit{
            position:fixed;
            top:.5rem;
            right:0;
            z-index: 14;
            font-size:.14rem;
            background: #fff;
            color:#333;
            width:.40rem;
            height:.40rem;
            line-height:.40rem;
            text-align: center;
            border-radius:0 0 .08rem .08rem;
        }
        .mint-header{
            background: #fafafa;
            color: #000;
            height:.5rem;
        }
        .mint-header-title{
            font-size: .16rem;
        }
        .mint-header-button{
            font-size: .16rem;
        }
        i{
            font-size: .16rem;
        }
        .sn-banner{
            width: 100%;
            height: 1.3rem;
            background: linear-gradient(90deg, /* 90度方向上绘制渐变色  */#FFBE12 10%,#FDBF16 30%,#FFBF17 50%,#FECC2B 70%,#FED53B 100%);
            padding: .35rem .14rem 0;
            position: relative;
            .sn-setting{
                position:absolute;
                right: .10rem;
                top: .10rem;
                font-size: .30rem;
                color:#fff; 
            }
            .user-info{
                height: .65rem;
                position: relative;
                .user-logo{
                    width: .65rem;
                    height: .65rem;
                    float: left;
                    .logo-img{
                        width: 100%;
                        height: 100%;
                        background: url("../../assets/mine/user-icon.jpg");
                        background-size: 100%;
                        border-radius: 50%;
                        border: 2px solid #EAAA00;
                    }
                    .logo-txt{
                        width: .75rem;
                        font-size: .12rem;
                        color:#fff;
                        position: absolute;
                        bottom: -0.03rem;
                        left: -0.04rem;
                        background: #555;
                        border-radius: .07rem;
                    }

                }
                .user-detail{
                    width: .88rem;
                    height: .65rem;
                    margin:0 .10rem;
                    float: left;
                    padding-top: .1rem;
                    font-size: .12rem;
                    .user-name{
                        height: .2rem; 
                    }
                    .user-level{
                        height: .16rem;
                        width: .78rem;
                        color: #fff;
                        background: #000;
                        border-radius: .1rem;
                        padding-left: .05rem;
                    }
                }
            }
            .vip{
                width: 1.2rem;
                height: .7rem;
                position: absolute;
                right: 0;
                bottom:0;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .money-list{
            height: .75rem;
            background: #fafafa;
            margin-bottom: .10rem;
            .money-item{
                width: .74rem;
                height: .67rem;
                padding-bottom: .08rem;
                float: left;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: .14rem;
                span{
                    margin: .05rem 0;
                }
            }
            .myBag{
                float: left;
                width: .75rem;
                height: .75rem;
                display: flex;
                flex-direction: column;
                // justify-content: center;
                align-items: center;
                font-size: .14rem;
                border-left: 1px solid #eee;
                i{
                    color: #EAAA00;
                    font-size: .20rem;
                    padding-top: .15rem;

                }
            }
        }
        .sn-order{
            background: #fafafa;
            .order-title{
                height: .4rem;
                display: flex;
                padding: 0 .10rem;
                justify-content: space-between;
                font-size: .14rem;
                align-items: center;
                border-bottom: 1px solid #ddd;
                i{
                    font-size: .12rem;
                    color:#555;
                }
            }
            .order-list{
                display: flex;
                justify-content: space-around;
                padding: .15rem 0 .20rem;
                margin-bottom: .10rem;
                .order-item{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    span{
                        font-size: .20rem;
                        margin-bottom: .05rem;
                    }
                    i{
                        font-size: .12rem;
                        color: #555;
                    }
                }
            }
        }
        .sn-server{
            background: #fafafa;
            height: 1.7rem;
            .server-item{
                width: 25%;
                height: .8rem;
                float: left;
                padding-top: .15rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                img{
                    width:.25rem;
                    height: .25rem;
                }
                span{
                    font-size: .12rem;
                    margin-top: .08rem;
                }
            }
        }
        .guss-like{
            .guss-title{
                padding:.10rem 0;
                margin: 0 1.57rem;
                font-size: .14rem;
            }
        }
    }
    
</style>
