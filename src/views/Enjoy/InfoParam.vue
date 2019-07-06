<template>
    <div class="info-param">
        <h1>
            <span>商品参数</span>
            <i 
                :class="['fa',{'fa-angle-down':isShow},{'fa-angle-up':!isShow}]"
                @click="isShow=!isShow"
            ></i>
        </h1>
        <div 
            class="param-item" 
            v-show="isShow"
            v-for="item in parambox"
            :key="item.id"
        >
            <h2>{{item.summarize}}</h2>
            <ul>
                <li
                    v-for="sItem in item.details"
                    :key="sItem.mark"
                >
                    <div>{{sItem.mark}}</div>
                    <span>{{sItem.content}}</span>
                </li>
            </ul>
        </div>
        <div class="look">
            <div class="left"><hr></div>
            <span>看了又看</span>
            <div class="right"><hr></div>
        </div>
        <GoodBox></GoodBox>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
import getImages from "@/modules/util-getImages"
import GoodBox from "./GoodBox"
export default {
    name:"InfoParam",
    data(){
        return{
            parambox:[],
            isShow:true
        }
    },
    methods:{
        getImages
    },
    created(){
        //console.log(this.$route)
        let instance = Toast({
            message: '骚等..',
            iconClass: 'fa fa-spinner fa-pulse',
        },-1);
        this.$http.get("/api/sn/goods_detail/?id="+this.$route.params.id).then(res=>{
            //console.log(res.data)
            this.parambox = res.data.data.good[0].info_param;
            //console.log(this.parambox)
            instance.close();
            this.isShow = true;
        })
    },
    components:{
        GoodBox
    }
}
</script>

<style lang="scss">
    .info-param{
        margin-bottom:.60rem;
        background: #fff;
        h1{
            margin-top:.2rem;
            width:100%;
            height:.60rem;
            padding: 0 .1rem;
            background: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span{
                font-size:.16rem;
                color:#333;
            }
            i{
                font-size:.30rem;
                color:#333;
            }
        }
        .param-item{
            width:3.55rem;
            height:auto;
            margin:0 .1rem;
            border-top:1px dashed #333;
            padding-bottom: .2rem;
            h2{
                width:100%;
                height:.4rem;
                font-size:.12rem;
                color:#ccc;
                line-height: .4rem;
            }
            ul{
                width:100%;
                height:auto;
                li{
                    width:100%;
                    height:.16rem;
                    font-size:.14rem;
                    color: #909090;
                    margin-bottom: .1rem;
                    div{
                        width:1.15rem;
                        height:.16rem;
                        line-height: .16rem;
                        float: left;
                    }
                    span{
                        display: block;
                        float: left;
                        height:.16rem;
                        width:2.40rem;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
        .look{
            width:100%;
            height:.44rem;
            padding:0 .10rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            div{
                width:1.35rem;
                hr{
                    height:2px;
                    background: #c8c8c8;
                }
            }
            span{
                display: block;
                padding:0 .10rem;
                font-size:.14rem;
                color:#333;
            }
        }
    }
</style>
