<template>
     <div class="card p-3 mt-3 bg-white">
           <div class="card-hrader d-flex pb-3">
              <i class="iconfont" :class="`icon-${icon}`"></i>
              <div class="fs-xl flex-grow-1 px-2">{{ title }}</div>
              <i class="iconfont icon-menu"></i>
            </div> 
          <div class="card-body pt-3">
            <slot></slot>
            <!-- <div class="nav jc-between">
              <div class="nav-item active">
                <div class="nav-link">热门</div>
              </div>
              <div class="nav-item">
                <div class="nav-link">新闻</div>
              </div>
              <div class="nav-item ">
                <div class="nav-link">公告</div>
              </div>
             <div class="nav-item ">
                <div class="nav-link">活动</div>
              </div>
              <div class="nav-item ">
                <div class="nav-link">赛事</div>
              </div>
            </div> -->
            <!-- start of contern -->
            <!-- <div class="pt-3">
              <swiper>
                <swiper-slide v-for="n in 5" :key="n">
                  <div v-for="m in 5" :key="m" class="py-2">
                    <span>[新闻]</span>
                    <span>|</span>
                    <span>12月3日全服不停机更新公告</span>
                    <span>12/02</span>
                  </div>
                </swiper-slide>
              </swiper>
            </div> -->
          </div>
         </div>
</template>
<script>
export default {
    props:{
        title:{type:String,require:true},
        icon:{type:String,require:true}
    }
}
</script>
<style lang='scss'>
@import '../assets/scss/_variables.scss';
  .card{
    .card-hrader{
      border-bottom: 1px solid $border-color
    }
    border-bottom: 1px solid $border-color
  }
</style>