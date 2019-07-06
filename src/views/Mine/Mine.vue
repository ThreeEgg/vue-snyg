<template>
    <div class="mine">
        <header>
            <div class="header-content">
                <router-link
                    :to="{name:'minelogin'}"
                >联系客服</router-link>
                <i>|</i>
                <span>企业注册</span>
            </div>
        </header>
        <!-- 验证码登录 -->
        <div 
            class="login-content"
            v-if="show"
            >
            <h2>欢迎登录苏宁易购</h2>
            <div class="tel-inputbox">
                <input 
                    class="tel-input" 
                    type="text" 
                    placeholder="请输入手机号" 
                    v-model="tel"
                    @keyup="filterTel"
                >
            </div>
            <div class="code-inputbox">
                <input 
                    class="code-input" 
                    type="text" 
                    placeholder="请输入验证码" 
                    v-model="code"
                    @keyup="filterCode"
                >
                <button 
                    class="get-code"
                    @click="getCode"
                    v-if="isShow"
                >{{text}}</button>
                <button 
                    class="get-code"
                    v-else
                >{{time}}s后重新获取</button>
            </div>
            <div class="btnBox">
                <div class="login-btn" @click="login">
                    登录
                </div>
                <div class="other-btn"
                    @click="show=false"
                >
                    账号密码登录
                </div>
            </div>
        </div>
        <!-- 账号密码登录 -->
        <div 
        class="login-content2"
        v-else
        >
            <h2>欢迎登录苏宁易购</h2>
            <div class="tel-inputbox">
                <input class="tel-input" type="text" placeholder="请输入手机号/用户名/邮箱">
            </div>
            <div class="psssword-inputbox">
                <input class="password-input" type="text" placeholder="请输入密码">
            </div>
            <div class="btnBox">
                <div class="login-btn">
                    登录
                </div>
                <div class="other-btn"
                    @click="show=true"
                >
                    验证码登录
                </div>
            </div>
        </div>
        <footer>
            <div class="other-loginin">
                <span class="f-loginin">其他登录方式</span>
            </div>
        <div class="icon-box">
            <div class="qq-icon">
                <img src="@/assets/mine/icon_qq.png" alt="">
            </div>
            <div class="epp-icon">
                <img src="@/assets/mine/icon_epp.png" alt="">
            </div>
            <div class="k-icon">
                <img src="@/assets/mine/icon_k.png" alt="">
            </div>
        </div>
        <div class="agree">
            <span>我同意</span>
            <i>《苏宁易购会员章程》</i>
            <i>《易付宝协议》</i>
        </div>
        </footer>
    </div>
</template>

<script>
import sendMessage from "@/modules/message"
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            show:true,
            text:"获取验证码",
            time:30,
            isShow:true,
            sendCode:"",
            tel:"",
            code:"",
            isCode:false
        }
    },
    methods:{
        sendMessage,
        testCodeNum(n){//数字验证码
            var arr = [];
            for(var i = 0; i < n; i++){
                var num = parseInt(Math.random() * 10);
                arr.push(num);
            }
            return arr.join("");
        },
        filterTel(){
            this.tel = this.tel.replace(/\s/g, "");
            this.tel = this.tel.replace(/\D/g, "");
            this.tel = this.tel.substring(0,11);
        },
        filterCode(){
            this.code = this.code.replace(/\s/g, "");
            this.code = this.code.replace(/\D/g, "");
            this.code = this.code.substring(0,4);
        },
        getCode(){
            var reg = /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/;
            if(!reg.test(this.tel)){
                Toast({
                    message: "请输入正确的手机号",
                    position: "middle"
                },1000);
                this.isCode = false;
            }else{
                this.sendCode = this.testCodeNum(4);
                console.log(this.sendCode);
                this.sendMessage(this.tel,[this.sendCode])
                setTimeout(()=>{
                    this.sendCode = this.testCodeNum(4);
                },300000)
                this.isShow = false;
                this.isCode = true;
                var timer = setInterval(()=>{
                    if(this.time-- == 0){
                        this.isShow = true;
                        this.time = 30;
                        clearInterval(timer);
                    }
                },1000)
            }
            console.log(this.code);
        },
        login(){
            if(!this.isCode){
                Toast({
                    message: "请先获取验证码",
                    position: "middle"
                },1000)
            }else if(this.sendCode != this.code){
                Toast({
                    message: "验证码错误",
                    position: "middle"
                },1000)
            }else{
                Toast({
                    message: "登陆成功",
                    position: "middle"
                },1000)

                this.$store.dispatch("loginInfoGet",this.tel);
                setTimeout(()=>{
                    this.$router.push("/minelogin");
                },1000)
                
                
            }
        }
    },
    created(){
        if(this.$store.state.Login.tel){
            this.$router.push("/minelogin");
        }
    },
    components:{
        
    }
}
</script>

<style lang="scss" scoped>
html{background:#fff;
    
    .mine{
        background:#fff;
        height: 100%;
        header{
            width:100%;
            height: .30rem;
            padding: .07rem .12rem 0 .12rem;
            .header-content{
                float:right;
                font-size: .14rem;
                color:#333;
                i{
                    margin:0 .15rem 0;
                }
            }
        }
        .login-content,.login-content2{
            width: 100%;
            height:2.74rem;
            margin-top:.28rem;
            padding:0 .38rem;
            h2{
                font-size: .16rem;
            }
            .tel-inputbox{
                width:100%;
                height: .45rem;
                margin-top:.30rem;
                border-bottom: 1px solid #ddd;
                position: relative;
                .tel-input{
                    width: 100%;
                    height: .34rem;
                    border:none;
                    outline: none;
                    font-size: .14rem;
                    position: absolute;
                    left:0;
                    bottom:.02rem;
                    
                }
                ::-webkit-input-placeholder { 
                    color:#bbb;  
                } 
            }
            .code-inputbox{
                width:100%;
                height: .39rem;
                margin-top:.15rem;
                .code-input{
                    width: 1.92rem;
                    height: .39rem;
                    border:none;
                    outline: none;
                    font-size: .14rem;
                    border-bottom:1px solid #ddd; 
                }
                ::-webkit-input-placeholder { 
                    color:#bbb;  
                }
                button{
                    width: 1rem;
                    height: .39rem;
                    border:1px solid #FF6C00;
                    color:#FF6C00;
                    border-radius: .15rem;
                    background: #fff;
                    outline: none;
                    font-size: .13rem;
                }
            }
            .psssword-inputbox{
                width:100%;
                height: .39rem;
                margin-top:.15rem;
                border-bottom: 1px solid #ddd;
                position: relative;
                .password-input{
                    width: 100%;
                    height: .34rem;
                    border:none;
                    outline: none;
                    font-size: .14rem;
                    position: absolute;
                    left:0;
                    bottom:.02rem;
                    
                }
                ::-webkit-input-placeholder { 
                    color:#bbb;  
                } 
            }
            .btnBox{
                width:100%;
                margin-top:.30rem;
                .login-btn{
                    width:100%;
                    height: .45rem;
                    background: #FF6C00;
                    border:none;
                    border-radius: .22rem;
                    text-align: center;
                    line-height: .45rem;
                    color:#fff;
                    font-size: .16rem;
                }
                .other-btn{
                    width: .75rem;
                    margin:.20rem auto;
                    color: #333;
                    font-size: .12rem;
                }
            }
        }
        footer{
            margin:1.5rem .72rem .72rem;
            .other-loginin{
                width: 100%;
                height: .18rem;
                margin-bottom: .20rem;
                .f-loginin{
                    font-size: .12rem;
                    height: .18rem;
                    color:#bbb;
                }
                .f-loginin::before{
                    content: "　　　　 ";
                    text-decoration: line-through;
                    display: block;
                    padding-right: .2rem;
                    color:#ddd;
                    display: inline;
                    }
                .f-loginin::after{
                    content: "　　　　 ";
                    text-decoration: line-through;
                    padding-left: .2rem;
                    color:#ddd;
                }
            }
            .icon-box{
                height: .33rem;
                margin-bottom:.18rem;
                display: flex;
                justify-content: space-between;
                img{
                    width: .33rem;
                    height: .33rem;
                }
            }
            .agree{
                font-size: .10rem;
                text-align: center;
                span{
                    color:#bbb;
                }
                i{
                    text-decoration: underline;
                }
            }
            
        }  
    }
}
</style>
