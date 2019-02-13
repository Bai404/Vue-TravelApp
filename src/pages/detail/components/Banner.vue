<template>
  <div>
    <div class="banner" @click="bannerClick">
      <div class="img-wrapper">
        <img class="banner-img" :src="bannerImg">
      </div>
      <div class="info">{{this.sightName}}</div>
      <div class="number"><span class="iconfont"></span><em>{{this.bannerImgs.length}}</em></div>
    </div>
    <common-gallary :imgs="bannerImgs" v-show="showGallary" @closeGallary="handleCloseGallary"></common-gallary>
  </div>
</template>

<script>
import commonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    commonGallary
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    bannerClick () {
      this.showGallary = true
    },
    handleCloseGallary () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 55%;
    .banner-img
      width: 100%;
      vertical-align: top;
    .info
      position: absolute;
      right: .2rem;
      bottom: .36rem;
      left: .2rem;
      min-height: .4rem;
      z-index: 1;
      line-height: .4rem;
      color: #fff;
      font-size: .36rem;
      text-shadow: 0 1px 2px rgba(0,0,0,0.70);
    .number
      position: absolute;
      left: .2rem;
      bottom: .86rem;
      width: 1.2rem;
      height: .4rem;
      background: rgba(0,0,0,.5);
      border-radius: .2rem;
      font-size: .24rem;
      color: #fff;
      line-height: .4rem;
      text-align: center;
</style>
