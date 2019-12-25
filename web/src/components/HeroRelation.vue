<template>
    <div >
        <div class="pt-3">
           <span class="fs-xl text-grry-1">{{relation}}</span>
        </div>
        <div class="border-bottom pb-3">
            <router-link tag="div" :to="`/hero/${item.hero._id}`" v-for="(item,i) in partners" :key="i" class="d-flex ai-center py-2">
            <img :src="item.hero.avatar" style="width: 50px;height:50px">
             <div class="fs-sm text-dark-1 fontline p-2">{{item.description}}</div>
            </router-link>
        </div>
     </div>
</template>
<script>
export default {
    props: {
        relation:{
            type:String,
            require:true
        },
        partners:{
            type:Array,
            require:true
        }
    },
    data () {
        return {
            
        }
    }
}
</script>
<style lang='scss'>

</style>