<template>
    <div>
        <div class="nav jc-around w-100  pt-3 px-2 pb-2">
            <div v-for="(skill,i) in skills" :key="i">
                <div class="skillimage nav-skill " :class="{active : active === i}" :style="{'background-image': `url(${skill.skiIcon})`}"
                @click="$refs.list.swiper.slideTo(i)"
                ></div>
            </div>
        </div>
        <div>
            <swiper ref="list" :options='{autoHeight :true}'
                 @slide-change="() => active = $refs.list.swiper.realIndex"
                    >
                      <swiper-slide  v-for="(skill,i) in skills" :key="i">
                        <slot name="skill" :skill="skill"></slot>
                      </swiper-slide>
            </swiper>
        </div>
    </div>
    
</template>
<script>
export default {
    props: {
        skills:{
            type:Array,
            require:true
        }
    },
    name:'HeroSkills',
    data () {
        return {
            active: 0,
        }
    }
}
</script>
<style lang='scss'>

</style>