<template>
    <div class="menu">
        <MenuItem
            v-for="menu in menus"
            :key="menu.id"
            :title="menu.title"
            :imgSrc="menu.images"
        ></MenuItem>
    </div>
</template>

<script>
import MenuItem from "./MenuItem"
export default {
    data(){
        return {
            menus: [
                {id:1,title:"爆款手机",images:"https://www.forgettime.cn/vue-pro/images/menu/menu_1.webp"},
                {id:2,title:"苏宁超市",images:"https://www.forgettime.cn/vue-pro/images/menu/menu_2.webp"},
                {id:3,title:"生活家电",images:"https://www.forgettime.cn/vue-pro/images/menu/menu_3.webp"},
                {id:4,title:"苏宁生鲜",images:"https://www.forgettime.cn/vue-pro/images/menu/menu_4.webp"},
                {id:5,title:"母婴玩具",images:"https://www.forgettime.cn/vue-pro/images/menu/menu_5.webp"},
                {id:6,title:"限时抢购",images:"https://www.forgettime.cn/vue-pro/images/menu/menu_6.webp"},
                {id:7,title:"赚钱",images:"https://www.forgettime.cn/vue-pro/images/menu/menu_7.webp"},
                {id:8,title:"苏宁拼购",images:"https://www.forgettime.cn/vue-pro/images/menu/menu_8.webp"},
                {id:9,title:"苏宁家电",images:"https://www.forgettime.cn/vue-pro/images/menu/menu_9.webp"},
                {id:10,title:"签到有礼",images:"https://www.forgettime.cn/vue-pro/images/menu/menu_10.webp"}
            ]
        }
    },
    components: {
        MenuItem
    },
    created(){
        
    }
}
</script>

<style lang="scss">
    .menu{
        width:100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: center;
        background:#fff;
    }
</style>
