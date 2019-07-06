import { CART_UPDATE } from './const'
export default {
    [CART_UPDATE](state,newCart){
        state.cart = newCart
    },
    AllCheckedUpdate(state,newValue){
        state.AllChecked = newValue;
    },
    totalUpdate(state,newValue){
        state.total = newValue;
    },
    totalPriceUpdate(state,newValue){
        state.totalPrice = newValue;
    },
    listUpdate(state,newValue){
        state.list = newValue;
    }
}