export default {
    loginUpdate(state){
        state.isLogin = !state.isLogin;
        // console.log(state.isLogin);
    },
    loginInfoUpdate(state,tel){
        state.tel = tel;
    }
}