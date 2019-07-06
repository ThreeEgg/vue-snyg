<template>
    <div class="cart">
        <mt-header title="购物车" fixed>
            <router-link slot="left" 
            :to="{name:'enjoy'}">
                <mt-button icon="back"></mt-button>
            </router-link> 
            <div  slot="right">
                编辑&nbsp;<mt-button icon="more"></mt-button>
            </div>
            
        </mt-header>
        <div class="empty"
            v-if="$store.state.Cart.cart.length === 0"
        >
            购物车是空的哦~
        </div>
        <Cartitem v-else></Cartitem>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Cartitem from "./Cartitem"
import Tabbar from "@/components/Tabbar"
export default {
    components:{
        Cartitem,Tabbar
    },
    created(){
        if(!this.$store.state.Login.tel){
            this.$router.push("/mine");
        }
    },
}
</script>

<style lang="scss">
    .cart{
        margin-top: .4rem;
        margin-bottom:1rem;
        .empty{
            width: 100%;
            height: .5rem;
            margin: 2rem auto;
            text-align: center;
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
    }
    
</style>
