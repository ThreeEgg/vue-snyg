<template>
    <div class="info-img">
        <div class="imgbox">
            <img src="https://image.suning.cn/uimg/sop/commodity/176109481611612045611809_x.jpg?from=mobile" alt="">
            <img 
                v-for="img in imgbox"
                :key="img"
                :src="img" 
            alt="">
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
import getImages from "@/modules/util-getImages"
export default {
    name:"InfoImg",
    data(){
        return{
            imgbox:[]
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
            this.imgbox = res.data.data.good[0].info_img;
            //console.log(this.imgbox)
            instance.close();
            this.isShow = true;
        })
    },
}
</script>

<style lang="scss">
    .info-img{
        margin-bottom:.60rem;
        width:100%;
        .imgbox{
            width:100%;
            img{
                width:100%;
            }
        }
    }
</style>
