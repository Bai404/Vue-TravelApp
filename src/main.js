// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Container, Input, Main, Header, Carousel, CarouselItem } from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import fastClick from 'fastClick'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(Container)
Vue.use(Input)
Vue.use(Main)
Vue.use(Header)
Vue.use(Carousel)
Vue.use(CarouselItem)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
