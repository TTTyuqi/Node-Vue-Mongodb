<template>
  <div class="page-hero" v-if='moudel'>
    <div class="topbar bg-black  py-2 px-4 d-flex ai-center">
      <img src="../assets/logo.png" height="40px">
      <div class="px-3 flex-grow-1">
        <span class="text-white my-1">王者荣耀</span>
        <span class="ml-2 text-white">攻略站</span>
      </div>
      <router-link tag="div" to="/" class="text-white">更多英雄 &gt;</router-link>
    </div>
    <div class="top" :style="{'background-image': `url(${moudel.banner})`}">
      <div class="info text-white p-3 h-100 d-flex flex-column jc-end">
        <div class="fs-sm">{{ moudel.title}}</div>
        <h2 class="my-2">{{ moudel.name}}</h2>
        <div class="fs-sm">{{ moudel.caterorus.map(v => v.name).join('/')}}</div>
        <div class="d-flex jc-between pt-2">
          <div class="scores d-flex ai-center" v-if='moudel.scores'>
            <span>难度</span>
            <span class="bage bg-primary">{{moudel.scores.diffcult}}</span>
              <span>技能</span>
            <span class="bage bg-bule-1">{{moudel.scores.skill}}</span>
              <span>攻击</span>
            <span class="bage bg-danger">{{moudel.scores.attack}}</span>
              <span>生存</span>
            <span class="bage bg-dark">{{moudel.scores.survive}}</span>
          </div>
          <router-link tag='div' to='/' class="text-grry">皮肤 2 &gt;</router-link>
        </div>
      
      </div>
    </div>
  
  </div>
</template>
<script>
export default {
  props:{
    id:{required: true}
  },
  data () {
    return {
      moudel:{}
    }
  },
  methods: {
    async fech(){
      const data = await this.$http.get(`/hero/${this.id}`)
      console.log('data',data)
      this.moudel = data.data
    }
  },
  created () {
    this.fech()
  }
}
</script>
<style lang='scss'>
.page-hero{
  .top{
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: 100% auto;
  }
  .info{
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1));
    .scores{
      .bage{
        margin: 0 0.25rem;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        line-height: 0.9rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.6rem;
        border: 1px solid rgba(255,255,255,0.2)
      }
    }
  }

}

</style>
