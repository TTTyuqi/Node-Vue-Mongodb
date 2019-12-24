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
    <div class="nav px-4 pt-3">
      <div class="border-bottom d-flex jc-around pb-2" style="margin: 0 auto;width: 100%">
        <div class="nav-item mx-5 " :class="{active : active === 0}"
             @click="$refs.list.swiper.slideTo(0)">
          <div class="nav-link fs-lg py-1">英雄初识</div>
        </div>
        <div class="nav-item mx-5 " :class="{active : active === 1}"
             @click="$refs.list.swiper.slideTo(1)">
          <div class="nav-link fs-lg py-1">进阶攻略</div>
        </div>
      </div>
    </div>
    <div >
      <swiper ref="list" 
              @slide-change="() => active = $refs.list.swiper.realIndex"
      >
        <swiper-slide key="0">
            <div class="px-3 py-2">
                <div class=" d-flex jc-around pb-3" style="margin: 0 auto;width: 100%">
                  <div class=" py-3 bg-lighr w-100 mr-3" style="border: 1px solid #f9f9f9;border-radius: 10px">
                    <div class="d-flex jc-center">
                      <i class="iconfont icon-menu-1 fs-xlg text-primary mr-3"></i>
                      <div class="fs-lg">英雄介绍视频</div>
                    </div>
                  </div>
                  <div class="py-3 bg-lighr w-100 " style="border: 1px solid #f9f9f9;border-radius: 10px">
                    <div class="d-flex jc-center">
                      <i class="iconfont icon-menu-1 fs-xlg text-primary mr-3"></i>
                      <div class="fs-lg">一图识英雄</div>
                    </div>
                  </div>
                </div>
                <hero-skills :skills='moudel.skills'>
                  <template #skill='{skill}'>
                    <div class="border-bottom pb-3">
                      <div class="d-flex ai-center px-2">
                        <h3 class="mr-4">{{ skill.skiName}}</h3>
                        <span class="fs-sm text-grry">(冷却值: {{ skill.delay }} 消耗: {{skill.cost}})</span>
                      </div>
                      <div class="px-2 ">
                        <div class="text-dark-1 fontline">{{skill.discription}}</div>
                      </div>
                    </div>
                    <div class="px-2 text-grry py-3 fontline">
                     小提示: {{skill.tipes}}
                    </div>
                  </template>
                </hero-skills>
            </div>
       
        </swiper-slide>
        <swiper-slide key="1">
         
        </swiper-slide>
      </swiper>
    </div>
  
  </div>
</template>
<script>
import HeroSkills from '../components/HeroSkills'
export default {
  components: {
    HeroSkills
  },
  props:{
    id:{required: true}
  },
  data () {
    return {
      moudel:{},
        active:0,
    }
  },
  methods: {
    async fech(){
      const data = await this.$http.get(`/hero/${this.id}`)
      console.log('data',data)
      this.moudel = data.data
    },

  },
  created () {
    this.fech()
  }
}
</script>
<style lang='scss'>
.page-hero{
  background-color: white;
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
