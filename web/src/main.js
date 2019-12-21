import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入全局的scss
import './assets/scss/style.scss'
//引入vue-swiper轮播图的插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
//引入vue-swiper的样式
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
//引入iconfonts字体图标
import './assets/fonts/iconfont.css'
//引入axios
import http from './http/http'
Vue.prototype.$http = http
import router from './router'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
