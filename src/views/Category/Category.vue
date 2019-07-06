<template>
    <div class="category">
        <div class="sousuo">
            <router-link to="/enjoy" class="fa fa-angle-left"></router-link>
            <div class="input">
                <router-link to="/enjoy" class="item1 fa fa-search"></router-link>
                <a>家居建材每300减40</a>
            </div>
        </div>
        
        <div class="content">
            <ul class="list1">
                <template  v-if="item01 != null" >
                    <!-- active选中样式 -->
                        <li v-for="(item) in item01" :class = "[(item.state==oselect?'active':''),'']" :key="item.key" @click="get(item.select,item.state)" >{{item.title}}</li>
                </template>
            </ul>

            <ul class="list2">
                <div class="li2-content">

                    <div v-for="(Bt,index) in itemBt"
                        :key="index"
                    >
                        <!-- 标题1 -->
                        <template  v-if="itemBt.length != 0">
                            <div :key="index"> 
                                <div class="li2_bt">{{itemBt[index].title}}</div>
                                <div class="line"></div>
                            </div>
                        </template>
                        <!-- 标题1 -->


                        <!-- 内容 -->
                        <ul class="category_content">  
                            <!-- 分类1 -->
                            <template  v-if="Isitem != null" >
                                <template
                                    v-for="items in Isitem"  
                                >
                                    <li 
                                        :key="items.key" 
                                        v-if="items.type != 'bt' && items.type == itemBt[index].list"
                                    >
                                    <router-link to="/categorylist">
                                        <img :src="items.img" alt="">
                                        <span>{{items.title}}</span>
                                    </router-link>
                                    </li>

                                </template>
                            </template>   
                        </ul>
                        <!-- 内容 -->
                </div>
            </div>
        </ul>
        </div>
        <!-- <Tabbar></Tabbar> -->
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import Tabbar from "@/components/Tabbar"
import Item from "@/views/Category/item"
import { isString } from 'util';
export default {
    name:"category",
    components:{
        Tabbar,Item
    },
    data(){
        return {
            Isitem:[], 
            type:'list1',
            itemBt:[],
            item01:[],
            oselect:"1"
            }
    },
    computed:{
        item(){
           
        }
    },
     methods:{
        get(type,state){
            if(state){
                this.oselect =  state;
            }
          
          var list = ""; //要加载的列表
            this.type = type;
             this.itemBt = [];
               this.$http("/api/sn/lists").then(res=>{
                   //请求的是数组中第0个商品
                this.Isitem = res.data.data.object_list[0][this.type]; 
                this.item01 = res.data.data.object_list[0].class;
               res.data.data.object_list[0][this.type].filter(item=>{
                      if(item.type == 'bt'){
                         this.itemBt.push(item);
                     }  
                 });

            //  this.Isitem = res.data[this.type]; 
            //     this.item01 = res.data.class;
            //    res.data[this.type].filter(item=>{
            //           if(item.type == 'bt'){
            //              this.itemBt.push(item);
            //          }  
            //      });
               
                })
        }
    },
    created(){
        this.get('list1');
    }
}

</script>

<style lang="scss" scoped>
.item1{
    width:0.28rem;
    text-align:center;
    display:inline-block;
    background:"https://res.suning.cn/project/search/wap/v4/list/css/images/search-icon3.png";     
}

.input{
    position: absolute;
    top: 0.07rem;
    left:0.33rem;
    width: 86%;
    height: 0.30rem;
    background: #FFF;
    border: 1px solid #CCC;
    border-radius: 4px;
    a{
        font-size:0.13rem;
        display:inline-block;
        height:0.30rem;
        color:rgb(190, 190, 190);
    }
   
}

.fanhui{
    width:0.13rem;
    height:0.30rem;
    background: red;
}

.list1{
    overflow-y:auto;
    width:0.86rem;
    height: 6.23rem;
    position:fixed;
    z-index: 10;
    line-height:0.46rem;
    text-align:center;
   .active{
       border-color:orange;
       border-width: 0 0 0 0.04rem;
       background:white; 
   }
    li{
        font-size:0.13rem;
        height:0.46rem;
        background:#f4f4f4;
        border:1px solid #e9e9e9;
        border-width:0px 1px 1px 0px;
    }
}   

.list2{
    overflow-y:auto;
    margin-top:0.44rem;
    height: 6.23rem;
    margin-left:0.86rem;
    line-height:0.47rem;
    padding:10px;
    background:white;
    .li2-content{
        width:2.70rem;
        
        position: relative;  
       .li2_bt{
           margin-top:0.30rem;
           margin-bottom:0.20rem;
           position:relative;
           z-index:2;
           line-height:0.12rem;
           font-size:0.12rem;
           color:#ff6600;
    
        }
        .category_content{
           overflow:hidden
        }
       .line{
           margin:0.055rem 0px;
           position:absolute;
           z-index:0;
           top:0;
           width:100%;
           height:1px;
           background:#f2f2f2;
       }
       ul li{
            width:0.90rem;
            margin-top:0.15rem;

            float:left
            
        }
        img{
            width:0.60rem;
            height: 0.60rem;
            margin:0px 15px 5px 15px;
           
        }
        span{
             display:block;
             text-align:center;
             font-size:0.12rem;
             line-height:0.20rem;
        }
    }
   
}

.sousuo{
    width:100%;
    height:0.44rem;
    background:#F8F8F8;
    z-index:11;
    box-shadow:0 1px 1px #DCDCDC;
    position:fixed;
    top:0;
     .fa-angle-left{
        font-size:0.27rem;
        margin-top:0.07rem;
        margin-left:0.11rem;
    }
}
</style>
