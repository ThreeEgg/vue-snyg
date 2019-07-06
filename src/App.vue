<template>
  <div id="app">
    <keep-alive include="enjoy,list,category,jiwu">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>


<script>
export default {
  created(){
    //初始化购物车
    this.$store.dispatch("initCar");
    //初始化登录信息
    this.$store.dispatch("initLogin");
  }
}
</script>

<style lang="scss">

</style>