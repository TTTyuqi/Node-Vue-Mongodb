<template>
         <my-card :title="title" :icon="icon">
            <div class="nav jc-between">
              <div class="nav-item " :class="{active : active === i}" v-for="(categorie,i) in categories" :key="i"
               @click="$refs.list.swiper.slideTo(i)">
                <div class="nav-link">{{categorie.name}}</div>
              </div>
            </div>
            <!-- start of contern -->
            <div class="pt-3">
              <swiper ref="list" :options='{autoHeight :true}'
              @slide-change="() => active = $refs.list.swiper.realIndex"
              >
                <swiper-slide  v-for="(categorie,i) in categories" :key="i">
                  <slot name="item" :categorie="categorie"></slot>
                </swiper-slide>
              </swiper>
            </div>
         </my-card>
</template>
<script>
import MyCard from './MyCard'

export default {
    components: {
        MyCard,
    },
    props:{
        title:{type:String,require:true},
        icon:{type:String,require:true},
        categories:{type:Array,require:true}
    },
    data () {
        return {
            active: 0,
        }
    }
}
</script>
<style lang='scss'>

</style>