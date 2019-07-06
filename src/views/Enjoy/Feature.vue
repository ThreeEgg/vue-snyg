<template>
    <div class="feature">
        <h1>
            <i class="fa fa-chrome"></i>
            特色专享
        </h1>
        <div class="item-box">
            <FeatureItem
                v-for="feature in features"
                :key="feature.id"
                :feature="feature"
            ></FeatureItem>
        </div>
    </div>
</template>

<script>
import FeatureItem from "./FeatureItem"
export default {
    data(){
        return{
            features:[
                {id:1,title:"城市专享",desc:"必抢好物",imgSrc:"https://www.forgettime.cn/vue-pro/images/menu/list_1.webp"},
                {id:2,title:"汽车生活",desc:"抢15天使用权",imgSrc:"https://www.forgettime.cn/vue-pro/images/menu/list_2.webp"},
                {id:3,title:"苏宁3C",desc:"定金最高抵1000",imgSrc:"https://www.forgettime.cn/vue-pro/images/menu/list_3.webp"},
                {id:4,title:"二手优品",desc:"低价抢苹果X",imgSrc:"https://www.forgettime.cn/vue-pro/images/menu/list_4.webp"},
                {id:5,title:"以旧换新",desc:"购新更省钱",imgSrc:"https://www.forgettime.cn/vue-pro/images/menu/list_5.webp"},
                {id:6,title:"帮客服务",desc:"到家生活服务",imgSrc:"https://www.forgettime.cn/vue-pro/images/menu/list_6.webp"},
                {id:7,title:"助农扶贫",desc:"流心咸鸭蛋",imgSrc:"https://www.forgettime.cn/vue-pro/images/menu/list_7.webp"},
                {id:8,title:"时尚潮流",desc:"24h热销6178件",imgSrc:"https://www.forgettime.cn/vue-pro/images/menu/list_8.webp"}
            ]
        }
    },
    components:{
        FeatureItem
    }
}
</script>

<style lang="scss">
    .feature{
        width:3.51rem;
        height:2.85rem;
        margin:5px .12rem;
        border-radius: 10px;
        h1{
            height:.30rem;
            margin-bottom: 1px;
            font-size:.20rem;
            font-weight: 900;
            i{
                color:rgb(100,200,131);
                font-size:.24rem;
            }
        }
        .item-box{
            width:3.51rem;
            height:2.52rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }
</style>
