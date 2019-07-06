export default{
    initLogin(ctx){
        let loginInfo = getLogin();
        ctx.commit("loginUpdate");
        ctx.commit("loginInfoUpdate",loginInfo.tel);
    },
    loginInfoGet(ctx,tel){//点及登录，添加信息进入localStorage
        let loginInfo = getLogin(); //获取登录信息
        loginInfo.isLogin = true;
        loginInfo.tel = tel;
        localStorage.loginInfo = JSON.stringify(loginInfo);
        ctx.commit("loginUpdate");
        ctx.commit("loginInfoUpdate",loginInfo.tel);
    },
    loginInfoDelete(ctx){
        let loginInfo = getLogin(); //获取登录信息
        loginInfo.isLogin = false;
        loginInfo.tel = "";
        localStorage.loginInfo = JSON.stringify(loginInfo);
        ctx.commit("loginUpdate");
        ctx.commit("loginInfoUpdate",loginInfo.tel);
    }
}

function getLogin(){
    return JSON.parse(localStorage.loginInfo?localStorage.loginInfo:"{}")
}