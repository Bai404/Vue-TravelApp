<template>
    <div>
      <div class="title">
        <span class="title-con">周末去哪儿</span>
      </div>
      <ul class="like-list">
        <li class="like border-bottom" v-for="item of recommendList" :key="item.id">
          <div class="img-wrapper">
            <img class="like-img" :src="item.imgUrl" alt="" />
          </div>
          <div class="like-info">
            <div class="like-title">{{item.title}}</div>
            <div class="like-comment"></div>
            <div class="like-desc">{{item.desc}}</div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>

export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '京城周末撒欢',
          desc: '在帝都过周末，不仅仅是城中游！'
        }, {

          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '京城周末撒欢',
          desc: '在帝都过周末，不仅仅是城中游！'
        }, {

          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '京城周末撒欢',
          desc: '在帝都过周末，不仅仅是城中游！'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .title
    position: relative;
    .title-con
      display: block
      height: .8rem;
      padding-left: .26rem;
      line-height: .8rem;
      color: #212121;
      background-color #eee;
  .like-list
    .like
      overflow: hidden;
      .img-wrapper
        height:0
        padding-bottom: 36.52%
      .like-img
        width:100%
      .like-info
        padding: .14rem .2rem .2rem .2rem;
        .like-title
          overflow: hidden;
          padding-right: 1.4rem;
          color: #212121;
          font-size: .28rem;
          line-height: .48rem;
          white-space: nowrap;
          text-overflow: ellipsis;
        .like-desc
          overflow: hidden;
          padding-right: 1.4rem;
          color: #616161;
          font-size: .24rem;
          line-height: .42rem;
          white-space: nowrap;
          text-overflow: ellipsis;

</style>
