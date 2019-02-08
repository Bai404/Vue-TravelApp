<template>
  <div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
    </div>
    <div class="header-right">
        城市
        <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header
        display: flex
        width: 100%
        height: .88rem
        background: $bgColor
        color: #fff
        .header-left
            float:left
            width: .8rem
            line-height: .88rem
            .back-icon
                text-align: center
                font-size: .4rem
        .header-input
            flex: 1
            box-sizing: border-box
            height: .6rem
            margin: .14rem 0
            padding-left: .2rem
            background: #fff
            line-height: .6rem
            border-radius: .06rem
            color: #e4e7ea
        .header-right
            float:right
            width: 1.12rem
            line-height: .88rem
            padding-left: .22rem
            .arrow-icon
                margin-left: -.04rem
                font-size: .23rem
</style>
