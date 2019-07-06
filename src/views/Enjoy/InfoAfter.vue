<template>
    <div class="info-after">
        <div class="afterbox">
            <div 
                class="after-item"
                v-for="item in afterbox"
                :key="item.id"
            >
                <span>{{item.summarize}}</span>
                <p>{{item.content}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
import getImages from "@/modules/util-getImages"
export default {
    name:"InfoAfter",
    data(){
        return{
            afterbox:[]
        }
    },
    methods:{
        getImages
    },
    created(){
        let instance = Toast({
            message: '骚等..',
            iconClass: 'fa fa-spinner fa-pulse',
        },-1);
        this.$http.get("/api/sn/goods_detail/?id="+this.$route.params.id).then(res=>{
            //console.log(res.data)
            this.afterbox = res.data.data.good[0].info_after;
            //console.log(this.afterbox)
            instance.close();
        })
    },
}
</script>

<style lang="scss">
    .info-after{
        width:100%;
        height:auto;
        padding: 0 .13rem;
        margin-bottom:.60rem;
        margin-top:.1rem;
        background:#fff;
        .afterbox{
            width:100%;
            height:auto;
            .after-item{
                width:100%;
                height:auto;
                padding-bottom: .2rem;
                border-bottom: 1px solid #dcdcdc;
                span{
                    display: block;
                    color:#333;
                    font-size:.14rem;
                    padding:.1rem 0 .12rem;
                }
                p{
                    color:#909090;
                    font-size:.14rem;
                }
            }
        }
    }
</style>