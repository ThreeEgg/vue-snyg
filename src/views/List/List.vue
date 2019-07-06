<template>
    <div class="list">
        <div class="listHead">
            <router-link to="/enjoy">
                <i class="fa fa-chevron-left"></i>
            </router-link>
            <span>必抢清单</span>
        </div>
        <ListBar></ListBar>
        <router-link 
            class="totalbox"
            to="/jiwu"
            tag="div"
        >
            <p>望门投止思张俭</p>
            <GoodBox></GoodBox>
            <p>忍死须臾待杜根</p>
            <GoodBox></GoodBox>
            <p>我自横刀向天笑</p>
            <GoodBox></GoodBox>
            <p>去留肝胆两昆仑</p>
            <GoodBox></GoodBox>
        </router-link>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from "@/components/Tabbar"
import ListBar from "./ListBar"
import GoodBox from "./GoodBox"
export default {
    components:{
        Tabbar,ListBar,GoodBox
    }
}
</script>

<style lang="scss">
    .list{
        margin-bottom:.6rem;
        .listHead{
            width:100%;
            height:.375rem;
            background: #fff;
            margin:.02rem 0;
            position: relative;
            i{
                position: absolute;
                font-size: .24rem;
                color:#666;
                top:.07rem;
                left:.05rem;
            }
            span{
                display: block;
                margin:0 auto;
                font-size: .18rem;
                color:rgb(255,52,45);
                font-weight: 800;
                height:.375rem;
                line-height: .375rem;
                text-align: center;
            }
        }
        .totalbox{
            width:100%;
            padding:.1rem;
            height:auto;
            display: flex;
            flex-direction: column;
            background:rgb(250,42,102);
            p{
                padding: .02rem 0;
                font-size: .18rem;
                text-indent: .1rem;
                font-weight: 600;
                color:#333;
                background:#fff;
            }
        }
    }
</style>
