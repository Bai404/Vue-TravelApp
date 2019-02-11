<template>
  <div class="list " ref="wrapper">
    <div>
      <div class="cur-area">
        <div class="title">当前城市</div>
        <ul class="button-list">
          <li class="list-item"><a>{{this.currentCity}}</a></li>
        </ul>
      </div>
      <div class="hot-area">
        <div class="title">热门城市</div>
        <ul class="button-list">
          <li class="list-item" v-for="item of hotCities" :key="item.id" @click="handleClick(item.name)"><a>{{item.name}}</a></li>
        </ul>
      </div>
      <div class="word-area">
        <div class="title">字母排序</div>
        <ul class="button-list">
          <li class="list-item"
              v-for="(item, key) of cities"
              :key="key"
              @click="wordClick"
          >{{key}}
          </li>
        </ul>
      </div>
      <div class="sort-area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title">{{key}}</div>
        <ul class="button-list">
          <li class="list-item" v-for="innerItem of item" :key="innerItem.id" @click="handleClick(innerItem.name)">{{innerItem.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  mounted () {
    console.log(this.$refs.wrapper)
    this.scroll = new BScroll(this.$refs.wrapper, {click: true})
  },
  methods: {
    wordClick (e) {
      console.log(this.$refs)
      const ele = this.$refs[e.target.innerText][0]
      this.scroll.scrollToElement(ele)
    },
    handleClick (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}

</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .list
    background: #eee
    width:100%
    // height: 100%
    .cur-area
      .title
        font-size: .24rem;
        // margin: .24rem .3rem;
        padding: .24rem .3rem;
      .button-list
        position: relative;
        overflow: hidden;
        z-index: 0;
        background-color: #fff;
        .list-item
          width: 33.33%;
          height: .9rem;
          line-height: .9rem;
          font-size: .28rem;
          text-align: center;
          border-bottom: .02rem solid #ddd;
          margin-bottom: -1px;
          float: left;
          position: relative;
          z-index: 10;
          color: #212121;
          a
            width: 80%;
            height: .6rem;
            line-height:.6rem
            margin: .1rem 0 0 .2rem
            color: #212121;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: .28rem;
            text-decoration: none;
            border: 0.01rem solid #666
            border-radius: .1rem
    .hot-area
      .title
        font-size: .24rem;
        // margin: .24rem .3rem;
        padding: .24rem .3rem;
      .button-list
        position: relative;
        overflow: hidden;
        z-index: 0;
        background-color: #fff;
        width:100%
        &:after
          content: '';
          position: absolute;
          width: 10%;
          left: 75%;
          height: 100%;
        &:before
          width: 33.33%;
          left: 33.33%;
          content: '';
          position: absolute;
          height: 100%;
          border-left: .02rem solid #ddd;
          border-right: .02rem solid #ddd;
        .list-item
          width: 33.33%;
          height: .9rem;
          line-height: .9rem;
          font-size: .28rem;
          text-align: center;
          border-bottom: .02rem solid #ddd;
          margin-bottom: -1px;
          float: left;
          position: relative;
          z-index: 10;
          color: #212121;
          a
            color: #212121;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: .28rem;
            text-decoration: none;
    .word-area
      .title
        font-size: .24rem;
        // margin: .24rem .3rem;
        padding: .24rem .3rem;
      .button-list
        position: relative;
        overflow: hidden;
        z-index: 0;
        background-color: #fff;
        padding: .3rem 0;
        .list-item
          width: 16.66%;
          height: .9rem;
          line-height: .9rem;
          font-size: .28rem;
          text-align: center;
          float: left;
          position: relative;
          z-index: 10;
          color: #212121;
          a
            color: #212121;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: .28rem;
            text-decoration: none;
    .sort-area
      .title
        font-size: .24rem;
        // margin: .24rem .3rem;
        padding: .24rem .3rem;
      .button-list
        position: relative;
        overflow: hidden;
        z-index: 0;
        background-color: #fff;
        &:before
          width: 25%;
          left: 25%;
          content: '';
          position: absolute;
          height: 100%;
          border-left: .02rem solid #ddd;
          border-right: .02rem solid #ddd;
        .list-item
          width: 25%;
          height: .9rem;
          line-height: .9rem;
          font-size: .28rem;
          text-align: center;
          border-bottom: .02rem solid #ddd;
          margin-bottom: -1px;
          float: left;
          position: relative;
          z-index: 10;
          color: #212121;
          a
            color: #212121;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: .28rem;
            text-decoration: none;
</style>
