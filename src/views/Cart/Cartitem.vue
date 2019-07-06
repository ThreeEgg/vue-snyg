<template>
<ul class="chart-list">
    <li class="cart-item"
        v-for="item in goods"
        :key="item.id"
    >
        <input class="check" type="checkbox" v-model="item.isChecked" @click="singleSelect(item)">
        <div class="cart-img">
            <img :src="item.img" alt="">
        </div>
        <div class="pro-box">
            <div class="pro-name">
                <div class="pro-des">
                    {{item.name}}
                </div>
                <div class="pro-deta">
                    {{item.description}}
                </div>
            </div>
            <div class="pro-edit">
                <div class="pro-price"><i>￥</i><span>{{item.price}}</span></div>
                <div class="pro-count">
                    <span class="add" @click="numAddGoodstoCart(item)">+</span>
                    <i class="num">{{item.num}}</i>
                    <span class="deduc" @click="deduceGoodstoCart(item)">-</span>
                </div>
                <div class="delete" @click="deletGoodstoCart(item)">删除</div>
            </div>
        </div>
    </li>
    <div class="checkedbar">
        <input type="checkbox" class="select-all" v-model="$store.state.Cart.AllChecked" @click="totalSelect">
        <p class="select-all-txt">全选</p>
        <div class="cart-total">
            <span class="total-txt">合计：</span>
            <span class="total-price"><i>￥</i><b>{{totalPrice | filterTotalPrice}}</b></span>
        </div>
        <div class="pay-btn">
            <span @click="payment">去结算(<i>{{total}}</i>)
            </span>
        </div>
    </div>
</ul>
    
</template>

<script>
import { mapState,mapActions } from 'vuex';
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            
        }
    },
    methods:{
        ...mapActions(["addGoodstoCart","deduceGoodstoCart","deletGoodstoCart","totalSelect","singleSelect","numAddGoodstoCart"]),
        payment(){
            if(!this.$store.state.Cart.total){
                Toast({
                    message:"请选中商品",
                    position:"middle"
                },800)
            }else{
                this.$router.push("/payment");
            }
            
        }
    },
    computed:{
        ...mapState({
            goods:state=>state.Cart.cart
        }),
        
        total(){
            //console.log(this.$store.state.Cart.total)
            return this.$store.state.Cart.total;
        },
        totalPrice(){
            return this.$store.state.Cart.totalPrice;
        }
    },
    filters:{
        filterTotalPrice(val){
            return val.toFixed(2);
        }
    }
}
</script>

<style lang="scss">
    .chart-list{
        width: 100%;
        .cart-item{
            width: 100%;
            height: 1.6rem;
            padding-top: .12rem;
            margin: .1rem 0;
            display: flex;
            background:#fff;
            position: relative;
            .check{
                width: .15rem;
                height: .15rem;
                position: absolute;
                left: .05rem;
                top: 35%;
                
            }
            .cart-img{
                width: 1.1rem;
                height: 1.13rem;
                margin:0 .1rem 0 .33rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .pro-box{
                width:2.4rem;
                height: 1.6rem;
                .pro-name{
                    width: 100%;
                    font-size:.12rem;
                    .pro-des{
                        width: 100%;
                        height: .3rem;
                        margin-bottom: .1rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        white-space: normal;
                    }
                    .pro-deta{
                        width: 100%;
                        height: .4rem;
                        color: #bbb;
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 2;
                        overflow: hidden;

                    }
                }
                .pro-edit{
                    padding-top: .3rem;
                    width: 100%;
                    display: flex;
                    .pro-price{
                        width: .8rem;
                        height: .2rem;
                        font-size: .16rem;
                        color: #FF4D4D;
                    }
                    .pro-count{
                        width: 1rem;
                        height: .23rem;

                        span{
                            float: left;
                            width:.23rem;
                            height: .23rem;
                            border: 1px solid #bbb;
                            background: #ddd;
                            color: #555;
                            font-size: .14rem;
                            text-align: center;
                            line-height: .23rem;
                            
                        }
                        .num{
                            width: .4rem;
                            height: .23rem;
                            border :none;
                            border-top: 1px solid #bbb;
                            border-bottom: 1px solid #bbb;
                            background: #fff;
                            float: left;
                            outline: none;
                            text-align: center;
                        }
                    }
                    .delete{
                        font-size: .14rem;
                        color: #FF4D4D;
                    }
                }
            }
        }
        .checkedbar{
            width: 100%;
            height: .5rem;
            background: #fff;
            display: flex;
            padding-left: 0.35rem;
            position: fixed;
            left: 0;
            bottom: .49rem;
            border-bottom: 1px solid #ddd;
            .select-all{
                width: .15rem;
                height: .15rem;
                position: absolute;
                left: .05rem;
                top: .1rem;
            }
            .select-all-txt{
                font-size: .12rem;
                padding-top: .12rem;
                width: .4rem;
            }
            .cart-total{
                width: 2rem;
                font-size: .16rem;
                padding: .12rem 0 0 .3rem;
                .total-price{
                    b{
                        font-size: .16rem;
                    }
                }
            }
            .pay-btn{
                width: 1.1rem;
                height: .5rem;
                text-align: center;
                line-height: .5rem;
                background: #FF6600;
                color: #fff;
                span{
                    font-size: .16rem;
                }
            }
        }
    } 
</style>

