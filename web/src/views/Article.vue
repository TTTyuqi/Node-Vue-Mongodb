<template>
  <div class="page-article" v-if='moudel'>
   <div class="d-flex py-3 px-2 border-bottom">
     <div class="iconfont icon-Back"></div>
     <strong class="flex-grow-1 pl-2 text-bule"> {{ moudel.title }}</strong>
     <div class="text-grry fs-sm">{{moudel.createdAt | showdata}}</div>
   </div>
   <div v-html="moudel.body" class="px-3 body fs-lg"></div>
   <div class="px-3 border-top py-3">
     <div class="d-flex">
       <i class="iconfont icon-menu-1"></i>
       <strong class="text-bule pl-2 fs-lg">相关资讯</strong>
     </div>
     <div class="pt-2"> 
       <router-link 
       class="pt-2 fs-lg"
       tag='div' :to="`/article/${item._id}`" v-for="item in moudel.related" :key='item._id'>{{ item.title}}</router-link>
     </div>

   </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
  props: {
    id:{ required: true}
  },
  filters: {
    showdata(val){
      return dayjs(val).format('MM/DD')
    }
  },
  data () {
    return {
      moudel: {}
    }
  },
  methods: {
    async fech(){
      const data = await this.$http.get(`/article/${this.id}`)
      console.log('data ',data)
      this.moudel = data.data
    }
  },
  watch: {
    id(){
      this.fech()
    }
  },
  created () {
    this.fech()
  }
}
</script>
<style lang="scss">
.page-article{
  .body{
    img{
      max-width: 100%;
      height: auto;
    }
    iframe{
      width: 100%;
      height: auto;
    }
  }
}

</style>