import { CART_UPDATE } from './const';
import { Toast } from 'mint-ui';
export default {
    //初始化购物车在app.vue中调用
    initCar(ctx){
        //console.log(ctx);
        let cart = getCart(); 
        
        let cartInfo = getCartInfo();
        ctx.commit("AllCheckedUpdate",cartInfo.AllChecked);
        ctx.commit("totalUpdate",cartInfo.total);
        ctx.commit("totalPriceUpdate",cartInfo.totalPrice);
        ctx.commit("listUpdate",cartInfo.list)
        if(cartInfo.list){
            for(var i = 0;i < cartInfo.list.length; i++){
                for(var j = 0; j < cart.length; j++){
                    if(cartInfo.list[i].id == cart[j].id){
                        cart[j].isChecked = cartInfo.list[i].isChecked
                    }
                }
            }
        }
        ctx.commit(CART_UPDATE,cart);
        localStorage.cartInfo = JSON.stringify(cartInfo);
        ctx.dispatch("lists");
    },
    addGoodstoCart(ctx,goodInfo){
        // console.log(ctx)//ctx是一个store对象，里面有各种方法commit，dispatch，state，getters，。。。
        /* 
            1，从localstorage中取数据，判断是不是第一次添加，是的话存储到localstorage里，不是num+1
            2，将新的商品信息存储以后，更新localstorage
            3，更新vuex的state数据

        */
        //将数据库中的商品取出
        let cart = getCart();
        //遍历cart，查询购物车商品
        let isHas = false;
        isHas = cart.some(item=>{
            if(item.id===goodInfo.id){
                item.isChecked = false;
                item.num++;
                isHas = true;
                Toast({
                    message: '数量++',
                    position: 'middle',
                    duration:800
                });
                return true
            }
        })
        if(!isHas){//数据库中不存在相同商品,将新的商品数量为一，插入cart
            goodInfo.num = 1;
            goodInfo.isChecked = false;
            cart.push(goodInfo);
            Toast({
                message: '添加成功',
                position: 'middle',
                duration:800
            });
        }
        
        //通知后台更改cart
        localStorage.cart = JSON.stringify(cart);
        //更新state中的cart
        ctx.commit(CART_UPDATE,cart);
        //commit 调用mutations里面自定义的的CART_UPDATE方法，第二个参数cart是传递给CART_UPDATE方法的参数
        ctx.dispatch("lists");
        ctx.dispatch("listUpdate");
        ctx.dispatch("isCheckALL");
    },
    numAddGoodstoCart(ctx,goodInfo){
        
        let cart = getCart();
        //遍历cart，查询购物车商品
        let isHas = false;
        isHas = cart.some(item=>{
            if(item.id===goodInfo.id){
                item.num++;
                isHas = true;
                return true
            }
        })
        
        //通知后台更改cart
        localStorage.cart = JSON.stringify(cart);
        //更新state中的cart
        ctx.commit(CART_UPDATE,cart);
        //commit 调用mutations里面自定义的的CART_UPDATE方法，第二个参数cart是传递给CART_UPDATE方法的参数
        ctx.dispatch("lists");
        ctx.dispatch("listUpdate");
        ctx.dispatch("isCheckALL");
    },
    deduceGoodstoCart(ctx,goodInfo){
        // console.log(ctx)//ctx是一个store对象，里面有各种方法commit，dispatch，state，getters，。。。

        //将数据库中的商品取出
        let cart = getCart();
        //遍历cart，查询购物车商品
        cart.filter(item=>{//some  return true 的时候跳出循环，every  return false 跳出循环
            if(item.id===goodInfo.id){
                if(item.num===1){
                    Toast({
                        message: '商品数量不能再减啦！！',
                        position: 'middle',
                        duration:1000
                    });
                    return false
                }
                item.num--; 
            }
            return true
        })
        //通知后台更改cart
        localStorage.cart = JSON.stringify(cart);
        //更新state中的cart
        ctx.commit(CART_UPDATE,cart);
        //commit 调用mutations里面自定义的的CART_UPDATE方法，第二个参数cart是传递给CART_UPDATE方法的参数
        ctx.dispatch("lists");
        ctx.dispatch("listUpdate");
        ctx.dispatch("isCheckALL");
    },
    //删除商品
    deletGoodstoCart(ctx,goodInfo){
        let cart = getCart();
        //遍历cart，查询购物车商品
        cart.forEach((item,index,cart)=>{//forEach(当前项，索引，遍历的数组)
            if(item.id===goodInfo.id){
                cart.splice(index,1)
            }
        })
        //通知后台更改cart
        localStorage.cart = JSON.stringify(cart);
        //更新state中的cart
        ctx.commit(CART_UPDATE,cart);
        //commit 调用mutations里面自定义的的CART_UPDATE方法，第二个参数cart是传递给CART_UPDATE方法的参数
        ctx.dispatch("lists");
        ctx.dispatch("listUpdate");
    },
    lists(ctx){ //选中商品计算
        var totalNum = 0;
        var totalPrice = 0;
        if(ctx.state.list){
            ctx.state.list.forEach((item)=>{
                totalNum += item.num;
                totalPrice += item.price * item.num;
            })
        }
        ctx.commit("totalUpdate",totalNum);
        ctx.commit("totalPriceUpdate",totalPrice);
        var cartInfo = getCartInfo();
        cartInfo.total = totalNum;
        cartInfo.totalPrice = totalPrice;
        
        localStorage.cartInfo = JSON.stringify(cartInfo);
    },
    totalSelect(ctx){
        ctx.state.AllChecked = !ctx.state.AllChecked;
        var cartInfo = getCartInfo();
        var cart = getCart();
        cartInfo.AllChecked = ctx.state.AllChecked;
        if(ctx.state.AllChecked){
            ctx.state.cart.forEach((item)=>{
                item.isChecked = true;
            })
            cart.forEach((item)=>{
                item.isChecked = true;
            })
            ctx.state.list = ctx.state.cart;
            cartInfo.list = ctx.state.list;
            ctx.dispatch("lists");
        }else{
            ctx.state.cart.forEach((item)=>{
                item.isChecked = false;
            })
            cart.forEach((item)=>{
                item.isChecked = false;
            })
            ctx.state.list = [];
            cartInfo.list = ctx.state.list;
            ctx.dispatch("lists");
        }
        
        localStorage.cart = JSON.stringify(cart)
        localStorage.cartInfo = JSON.stringify(cartInfo);
    },
    isCheckALL(ctx){   //全选计算
        var cartInfo = getCartInfo();
        if(ctx.state.list.length == ctx.state.cart.length){
            ctx.state.AllChecked = true;
            cartInfo.AllChecked = true;
            localStorage.cartInfo = JSON.stringify(cartInfo);
            // console.log("全选了")
            return true;
        }else{
            ctx.state.AllChecked = false;
            cartInfo.AllChecked = false;
            localStorage.cartInfo = JSON.stringify(cartInfo);
            // console.log("没有全选")
            return false;
        }
    },
    listUpdate(ctx){ //遍历cart，将选中的放入到list中，更新localStorage
        var list = [];
        ctx.state.cart.forEach((item)=>{
            if(item.isChecked){
                list.push(item)
            }
        })
        ctx.state.list = list;
        ctx.dispatch("lists");
        var cartInfo = getCartInfo();
        cartInfo.list = ctx.state.list;
        localStorage.cartInfo = JSON.stringify(cartInfo);
    },
    singleSelect(ctx,good){//单个点击 判断list 是否等于cart    等于则全选了
        //仓库修改   localStorage修改
        //console.log(good);
        //console.log(ctx.state);
        
        ctx.state.cart.forEach((item)=>{
            if(item.id == good.id){
                item.isChecked = !item.isChecked;
            }
        });
        ctx.dispatch("listUpdate");
        var cartInfo = getCartInfo();
        var cart = getCart();
        cartInfo.list = ctx.state.list;
        cart = ctx.state.cart;
        localStorage.cartInfo = JSON.stringify(cartInfo);
        localStorage.cart = JSON.stringify(cart);
        ctx.dispatch("lists");
        ctx.dispatch("isCheckALL");
    }
}
function getCart(){
    return JSON.parse(localStorage.cart?localStorage.cart:"[]")
}
function getCartInfo(){
    return JSON.parse(localStorage.cartInfo?localStorage.cartInfo:"{}");
}