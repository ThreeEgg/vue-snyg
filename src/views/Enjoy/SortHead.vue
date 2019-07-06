<template>
    <div :class="['sort-head',{bg:isBg}]">
        <div class="left">
            <i class="fa fa-calendar-minus-o"></i>
            <span>分类</span>
        </div>
        <div class="center">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="这里是三组的搜索框">
        </div>
        <div class="right">
            <!-- <span @click="sedMessage(['17806263827'],['5698'])">登录</span> -->
            <router-link 
                v-if="!isLogin"
                :to="{name:'mine'}"
                tag="span"
            >登录</router-link>
            <router-link 
                v-else
                :to="{name:'minelogin'}"
                tag="span"
            >{{tel | telFilter}}</router-link>
        </div>
    </div>
</template>

<script>
import sedMessage from "@/modules/message.js"
export default {
    data(){
        return {
            isBg:false,
            isLogin:false,
            tel:""
        }
    },
    methods: {
        scrollBg(){
            var sTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(sTop > 0 && !this.isBg){
                this.isBg = true;
            }else if(sTop == 0 && this.isBg){
                this.isBg = false;
            }
        },
        sedMessage
    },
    created(){
        window.addEventListener("scroll",this.scrollBg);
        if(this.$store.state.Login.tel){
            this.isLogin = true;
            this.tel = this.$store.state.Login.tel
        }
    },
    filters:{
        telFilter(val){
            return val.substring(0,3);
        }
    }
}
</script>

<style lang="scss">
    .sort-head{
        width:100%;
        height:.40rem;
        position: fixed;
        top:0;
        z-index:30;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .left{
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            i{
                font-size: .18rem;
                color:#fff;
            }
            span{
                font-size: .12rem;
                color:#fff;
            }
        }
        .center{
            width:2.6rem;
            height:.28rem;
            position: relative;
            input{
                width:2.6rem;
                height:.28rem;
                border:0;
                border-radius: .15rem;
                outline: none;
                text-indent: .24rem;
                color:rgb(117,117,117);
                font-size: .12rem;
            }
            i{
                position: absolute;
                top:.06rem;
                left:.05rem;
                font-size: .16rem;
                color:rgb(213,213,213);
            }
        }
        .right{
            span{
                color:#fff;
                font-size: .14rem;
                
            }
        }
    }
    .bg{
        background: rgb(255,189,0);
    }
</style>
