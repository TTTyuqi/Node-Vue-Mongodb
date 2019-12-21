<template>
  <div>
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide>
          <img class="w-100" src="../assets/images/a806e41784c93c10cc77d7a146892090.jpeg"/>
        </swiper-slide>
        <swiper-slide>
          <img  class="w-100" src="../assets/images/abc99d524ba1d3ddd1d6c28a8c195c4e.jpeg"/>>
        </swiper-slide>
        <swiper-slide>
          <img  class="w-100" src="../assets/images/6b4891f3eb26069d04b52f83b72f2bf4.jpeg"/>>
        </swiper-slide>
        <div class="swiper-pagination pagination-home text-right mb-4 pr-4" slot="pagination"></div>
     
      </swiper>
         <!-- end of swiper -->
         <div class="nav-icons"> 
         <div class=" bg-white d-flex flex-wrap pt-3">
           <div class="nav-items text-center mb-3 text-grey-1" >
              <i class="sprite sprite-news"></i>
              <div class="py-2">爆料站</div>
           </div>
            <div class="nav-items text-center mb-3 text-grey-1" >
              <i class="sprite sprite-storys"></i>
              <div class="py-2">故事站</div>
           </div>
            <div class="nav-items text-center mb-3 text-grey-1" >
              <i class="sprite sprite-stoys"></i>
              <div class="py-2">周边商城</div>
           </div>
           <div class="nav-items text-center mb-3 text-grey-1" >
              <i class="sprite sprite-tiyan"></i>
              <div class="py-2">体验服</div>
           </div>
             <div class="nav-items text-center mb-3 text-grey-1" >
              <i class="sprite sprite-newpeo"></i>
              <div class="py-2">新人专区</div>
           </div>
           <div class="nav-items text-center mb-3 text-grey-1" >
              <i class="sprite sprite-honer"></i>
              <div class="py-2">荣耀.传承</div>
           </div>
           <div class="nav-items text-center mb-3 text-grey-1" >
              <i class="sprite sprite-battel"></i>
              <div class="py-2">模拟战资料库</div>
           </div>
          <div class="nav-items text-center mb-3 text-grey-1" >
              <i class="sprite sprite-home"></i>
              <div class="py-2">王者营地</div>
           </div>
          <div class="nav-items text-center mb-3 text-grey-1" >
              <i class="sprite sprite-wechat"></i>
              <div class="py-2">公众号</div>
           </div>

         </div>
         <div class="bg-lighr py-2 fs-sm text-center">
           <i class="sprite sprite-arrow mr-2"></i>
           <span>收起</span>
         </div>
         </div>
         <!-- end of nav icons -->
        <my-list-card title="新闻资讯" icon="menu-1" :categories="newCats">
          <template #item="{categorie}">
               <router-link
               tag='div'
               :to='`/article/${item._id}`'
                v-for="(item,i) in categorie.newList" :key="i" class="py-2 fs-lg d-flex">
                    <span class="text-info" style=" white-space:nowrap">[{{item.categoriesName}}]</span>
                    <span class="px-2">|</span>
                    <span class="flex-grow-1 text-dark-1 text-ellipsis pr-2">{{ item.title }}</span>
                    <span class="text-grey-1 fs-sm">{{ item.createdAt | showdata}}</span>
                </router-link>
          </template>
        </my-list-card>
         <my-list-card title="英雄列表" icon="card-hero" :categories="heroCats">
          <template #item="{categorie}">
            <div class="d-flex flex-wrap" style="margin:-0.5rem">
               <router-link tag="div" :to="`/hero/${item._id}`" v-for="(item,i) in categorie.heroList" :key="i" class="p-2 " style="width: 20%">
                 <img :src="item.avatar" class="w-100">
                 <div class="text-center">{{item.name}}</div>
                </router-link>
              </div>
          </template>
         </my-list-card>
      

  </div>
</template>
<script>
import MyListCard from '../components/MyListCard'
import dayjs from 'dayjs'
export default {
  components: {
    MyListCard
  },
  filters: {
    showdata(val){
      return dayjs(val).format('MM/DD')
    }
  },
  data(){
    return {
        swiperOption: {
          pagination: {
            el: '.pagination-home'
          }
        },
        newCats:[],
        heroCats:[],
    }
  },
  methods: {
    async feactnewsList(){
      const news = await this.$http.get('/news/list')
      this.newCats = news.data
    },
    async feactherosList(){
      const hero = await this.$http.get('/heroes/list')
      this.heroCats = hero.data
    }
  },
  created () {
    this.feactnewsList()
    this.feactherosList()
  }
}
</script>
<style lang="scss">
@import '../assets/scss/_variables.scss';

.pagination-home{
  .swiper-pagination-bullet{
    opacity: 1;
    border-radius: 0.1538rem;
    background: #fff;
    &.swiper-pagination-bullet-active{
      background: map-get($colors,'info' )
    }
  }
} 

.nav-icons{
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-items{
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n){
      border-right: none;
    }
  }
}
</style>

