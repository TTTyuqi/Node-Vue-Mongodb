<template>
    <div class="px-3 py-2 mt-3" style="background-color: white;">
        <div>
            <div class=" d-flex ai-center">
                <i class="iconfont text-dark-1" :class="`icon-${icon}`"></i>
                <h3 class="flex-grow-1 px-2 text-black fs-xxl">出装推荐</h3>
            </div>
            <div>
                <span class="fs-xl text-grry-1">顺风出装</span>
            </div>
            <div class="d-flex jc-around ai-center py-2">
                <div v-for="(item,i) in itmes1" :key="i" class=" text-center">
                    <div class="tiemimage mb-2" :style="{'background-image': `url(${item.icon})`}"></div>
                    <span class="fs-sm text-ellipsis">{{item.name}}</span>
                </div>
            </div>
            <div class=" text-grry py-3 fontline border-bottom pb-4">
                <slot name="trips1"></slot>
                <!--<span>小提示: 司马懿缺乏回复手段，需要用噬神之书来补充其持续作战的能力，巫术法杖则会让司马懿的刺杀更具爆发力</span>-->
            </div>
            <div class="py-3">
                <span class="fs-xl text-grry-1">逆风出装</span>
            </div>
            <div class="d-flex jc-around ai-center py-2">
                <div v-for="(item,i) in itmes2" :key="i" class=" text-center">
                    <div class="tiemimage mb-2" :style="{'background-image': `url(${item.icon})`}"></div>
                    <span class="fs-sm text-ellipsis">{{item.name}}</span>
                </div>
            </div>
            <div class=" text-grry py-3 fontline  pb-4">
                <slot name="trips2"></slot>
                <!--<span>小提示: 司马懿利用被动可以洞悉对手位置并且大招也能超越距离发起突袭，综合下来说司马懿非常适合打野位置</span>-->
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            icon:{
                type:String,
                require:true
            },
            itmes1:{
                type: Array,
                require: true
            },
            itmes2:{
                type: Array,
                require: true
            }
        },
        data(){
            return {

            }
        }
    }
</script>
<style lang="scss">

</style>