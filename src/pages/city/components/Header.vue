<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
    </router-link>
    <h1 class="city-title">城市选择</h1>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header
    height: .68rem;
    line-height: .68rem;
    border-bottom: 0;
    position: relative;
    background: $bgColor;
    .header-left
      position: absolute
      float:left
      width: .8rem
      line-height: .88rem
      color: #fff
      .back-icon
          text-align: center
          font-size: .4rem
    .city-title
      overflow: hidden;
      margin: 0 1rem;
      line-height: .88rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: .32rem;
      text-align: center;
      color: #fff;
</style>
