<template>
  <el-carousel :interval="5000" arrow="always" height="4.2rem">
    <el-carousel-item v-for="item of list" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .el-carousel
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 26.67%
    .swiper-img
      width: 100%
</style>
