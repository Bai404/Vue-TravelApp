<template>
  <div class="container" @click='gallaryClick'>
    <div class="wrapper">1
     <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide v-for="(item,index) of imgs" :key="index">
            <img class="swiper-img" :src="item">
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    gallaryClick () {
      this.$emit('closeGallary')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-pagination
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed;
    z-index: 2;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: #000;
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%
      .swiper-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>
