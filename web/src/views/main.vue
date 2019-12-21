<template>
<div>
  <div class="topbar bg-black  py-2 px-4 d-flex ai-center">
    <img src="../assets/logo.png" height="40px">
    <div class="px-3 flex-grow-1">
      <div class="text-white my-1">王者荣耀</div>
      <div class="text-grey-1 fs-xxs">团队成就更多</div>
    </div>
    <button type="button" class="btn bg-primary">立即下载</button>
  </div>
  <div class="bg-primary py-3 px-4 fs-xl">
    <div class="nav nav-inverse text-white jc-around">
      <div class="nav-item active">
        <router-link class="nav-link" tag='div' to='/'>首页</router-link>
      </div>
      <div class="nav-item">
        <router-link class="nav-link" tag='div' to='/'>攻略中心</router-link>
      </div>
      <div class="nav-item">
        <router-link class="nav-link" tag='div' to='/'>赛事中心</router-link>
      </div>
    </div>
  </div>
  <router-view></router-view>
</div>
  
</template>
<script>
export default {

  data () {
    return {
      
    }
  }
}
</script>
<style lang="scss">
.topbar{
  position: sticky;
  top: 0px;
  z-index: 999;
}
</style>
