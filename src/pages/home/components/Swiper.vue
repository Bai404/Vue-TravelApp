<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item of imgList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      imgList: [
        {
          id:"0001",
          imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/e29e910fc244644f90fd941a009deb5f.jpg_750x200_f5ebe45e.jpg"
        },
        {
          id:"0002",
          imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/3921acb51460dc6fa9e3c7464fac5cbb.jpg_750x200_d992573a.jpg"
        },
        {
          id:"0003",
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1811/29/2a6b77b6ff72402.jpg_750x200_d4cec568.jpg"
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 26.67%
    .swiper-img
      width: 100%
</style>
