<template>
    <div>
      <div class="title">
        <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
        <span class="title-con">猜你喜欢</span>
      </div>
      <ul class="like-list">
        <li class="like border-bottom" v-for="item of list" :key="item.id">
          <img class="like-img" :src="item.imgUrl" alt="" />
          <div class="like-info">
            <div class="like-title">{{item.title}}</div>
            <div class="like-comment"></div>
            <div class="like-desc"></div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>

export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .title
    position: relative;
    padding: .24rem 0 .26rem;
    .title-img
      display: inline-block;
      overflow: hidden;
      width: .3rem;
      height: .3rem;
      margin-left: .2rem;
      vertical-align: top;
    .title-con
      display: inline-block;
      margin-left: .08rem;
      height: .44rem;
      color: #212121;
      font-size: .32rem;
      line-height: .44rem;
  .like-list
    margin-left: .24rem;
    .like
      overflow: hidden;
      padding: .2rem 0;
      display: flex
      .like-img
        width: 2rem;
        height: 2rem;
      .like-info
        flex: 1
        padding-left: .22rem;
        .like-title
          margin-top: .26rem;
          height: .44rem;
          color: #212121;
          font-size: .32rem;
          line-height: .44rem;

</style>
