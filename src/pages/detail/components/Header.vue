<template>
  <div>
    <router-link tag="div" :to="'/'" class="abs" v-show="showAbs">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    <div class="header" v-show="!showAbs">
      <router-link tag="div" :to="'/'" class="header-left">
          <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
      <div class="header-title">景点详情</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .abs
    position: absolute;
    font-size: .36rem;
    color: #fff;
    text-align: center;
    left: .2rem;
    top: .2rem;
    width: .72rem;
    height: .72rem;
    line-height: .72rem;
    background-color: #000;
    opacity: .5;
    border-radius: .36rem;
  .header
    position: fixed
    top:0
    display: flex
    width: 100%
    height: .88rem
    background: $bgColor
    color: #fff
    z-index: 99

    .header-left
        float:left
        width: .8rem
        line-height: .88rem
        .back-icon
            text-align: center
            font-size: .4rem
    .header-title
      overflow: hidden;
      float:left
      flex: 1
      margin-right:.4rem
      line-height: .88rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: .32rem;
      text-align: center;
      color: #fff;
</style>
