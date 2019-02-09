<template>
  <div class='icons'>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-con" :src="item.imgUrl">
          </div>
          <p class="icon-keywords">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .icons >>> .swiper-slide-active
    height: 0
    padding-bottom: 50%
  .icons
    overflow: hidden
    .icon
      position: relative
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      text-align: center
      .icon-img
        position: absolute
        left: 0
        right: 0
        top: .2rem
        bottom: .4rem
        width: 1.1rem;
        height: 1.1rem;
        margin: 0 auto
        display: block
        .icon-img-con
          height:100%
      .icon-keywords
        width: 100%
        position: absolute
        bottom: .25rem
        height: .4rem
        line-height: .4rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
