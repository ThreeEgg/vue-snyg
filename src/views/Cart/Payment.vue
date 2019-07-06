<template>
    <div class="payment">
        <mt-header title="确认订单">
            <router-link slot="left" 
            :to="{name:'cart'}">
                <mt-button icon="back"></mt-button>
            </router-link> 
        </mt-header>
        <div class="address">
            <div class="phone">收货人：小魔牛仔 {{tel | filterTel}}</div>
            <div class="deta">山东省青岛市市北区卓越世纪中心3号楼802</div>
        </div>
        <div class="goods-content">
            <div class="good-item"
                v-for="item in list"
                :key="item.id"
            >
                <div class="good-img">
                    <img :src="item.img" alt="">
                </div>
                <div class="good-des">
                    <div>{{item.name}}</div>
                </div>
                <div class="good-price">
                    ￥{{item.price}}*{{item.num}}
                </div>
            </div>
        </div>
        <div class="other-msg">
            <div class="msg-item"
                v-for="item in otherMsg"
                :key="item.id"
                >
                <div>{{item.left}}</div>
                <div><span>{{item.right}}</span><i class="fa fa-angle-right"></i></div>
            </div>
        </div>
        <div class="payment-deta">
            <div><span>商品总额</span><i>￥<b>{{totalPrice | filterTotalPrice}}</b></i></div>
            <div><span>商品数量</span><i>总计{{total}}件</i></div>
            <div><span>运费</span><i>+￥0</i></div>
        </div>
        <div class="total-price">
            <span>实付金额：<i>￥<b>{{totalPrice | filterTotalPrice}}</b></i></span>
        </div>
        <div class="pay-way">
            <div class="pay-item"
                v-for="item in payWay"
                :key="item.id"
                :style="{backgroundColor:item.color}"
                @click="pay"
            >
                {{item.way}}
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            otherMsg:[
                {id:1,left:"苏宁配送+商家配送",right:"可预约"},
                {id:2,left:"优惠券",right:"无可用"},
                {id:3,left:"苏宁卡",right:"无可用"},
                {id:4,left:"共0云钻，满500云钻可用"}
            ],
            payWay:[
                {id:1,way:"微信支付",color:"#06BA03"},
                {id:2,way:"支付宝",color:"#00A6E9"},
                {id:3,way:"苏宁支付",color:"#5397F8"}
            ],
            list:[],
            total:"",
            totalPrice:""
        }

    },
    methods:{
        pay(){
            Toast({
                message:"余额不足...",
                position:"middle"
            },1000)
        }
    },
    created(){
        // this.list = this.$route.query.list
        this.list = this.$store.state.Cart.list;
        // console.log(this.$route.query.list)
        this.total = this.$store.state.Cart.total;
        this.totalPrice = this.$store.state.Cart.totalPrice;
        this.tel = this.$store.state.Login.tel;
    },
    filters:{
        filterTel(val){
            return val.substring(0,3)+ "****" +val.substring(7)
        },
        filterTotalPrice(val){
            return val.toFixed(2);
        }
    }
}
</script>

<style lang="scss" >
    .payment{
        .mint-header{
            background: #fafafa;
            color: #000;
            height:.40rem;
            font-size: .16rem;
            .mintui{
                font-size: .20rem;
                .mintui-back{
                    font-size: .20rem;
                }
            }
            
        }
        .address{
            background: #fff;
            width: 100%;
            padding: .15rem 0;
            border-top: 1px solid #ddd ;
            margin-bottom: .2rem;
            .phone{
                padding: 0 .2rem;
                font-size: .14rem;
                font-weight: bold;
                margin-bottom: .1rem;
            }
            .deta{
                padding: 0 .2rem;
                font-size: .12rem;
                color: #888;
            }
        }
        .goods-content{
            width: 100%;
            .good-item{
                padding-left: .2rem;
                width: 100%;
                height:.8rem;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-bottom: .1rem;
                background: #fff;
                margin-left:0;
                .good-img{
                    width: .6rem;
                    height: .6rem;
                    margin-right: .2rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .good-des{
                    width: 1.8rem;
                    height:.5rem; 
                    font-size: .12rem;
                    div{
                        margin: auto;
                    }
                }
                .good-price{
                    font-size: .12rem;
                    width: .8rem;
                    height: .5rem;
                    padding: .2rem 0 0 .2rem;
                }
            }
        }
        .other-msg{
            width: 100%;
            padding: 0 .2rem;
            background: #fff;
            .msg-item{
                width: 100%;
                height: .4rem;
                border-bottom: 1px solid #ddd;
                display: flex;
                justify-content: space-between;
                font-size: .12rem;
                align-items: center;
                color: #888;
                span{
                    margin-right: .1rem;
                }
            }
        }
        .payment-deta{
            width: 100%;
            height: .9rem;
            display: flex;
            flex-direction: column;
            font-size: .12rem;
            color: #888;
            padding: 0 .2rem;
            background: #fff;
            margin-top: .1rem;
            div{
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-top: .1rem;
                i{
                    font-size: .14rem;
                    color: #F60;
                    b{
                        font-size: .16rem;
                    }
                }
            }
        }
        .total-price{
            width:100%;
            height: .6rem;
            padding: 0 .2rem;
            font-size: .16rem;
            display: flex;
            justify-content: flex-end;
            line-height: .6rem;
            font-weight: bold;
            span{
                i{
                    color: #F60;
                    b{
                        font-size: .16rem;
                    }
                }
                
            }
            

        }
        .pay-way{
            width: 100%;
            height: 1.6rem;
            padding: .1rem .2rem 0 .2rem;
            background: #fff;
            .pay-item{
                width: 100%;
                height: .4rem;
                font-size: .14rem;
                color: #fff;
                text-align: center;
                line-height: .4rem;
                border-radius: .06rem;
                margin-bottom: .1rem;
            }
        }
    }
</style>
