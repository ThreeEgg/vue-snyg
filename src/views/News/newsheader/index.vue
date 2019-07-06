<template>
  <div class="news-header">
    <div class="left">
      <router-link to="/list"><i class="fa fa-angle-left"></i></router-link>
    </div>
    <div class="center">
      <span>{{msg}}</span>
    </div>
    <div class="right">
      <router-link to="/enjoy"><i class="fa fa-home"></i></router-link>
    </div>
  </div>
</template>
<style lang="scss">
    .news-header{
      width:3.75rem;
      height:0.5rem;
      display:flex;
      justify-content:space-between;
      line-height:0.5rem;
      position:fixed;
      background:white;
      z-index:10;
      .center{
        span{
          font-size: .16rem;
        }
      }
    }
    .right i,.left i{
      height:0.5rem;
      width:0.4rem;
      text-align: center;
      line-height: 0.5rem;
      font-size:0.2rem;
    }
</style>
<script>
export default {
    props:["msg"],
}
</script>
