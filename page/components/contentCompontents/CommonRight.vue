<template lang="pug">
  .wrapper
    Random.item(:data="data.randomList")
    HotModule.item(:data="data.hotList")
    CommentModule.item(:data="data.commentList")
    FriendlyModule.item(:data="data.friendList")
</template>


<script>
import Random from './Random'
import HotModule from './HotModule'
import CommentModule from './CommentModule'
import FriendlyModule from './FriendlyModule'
export default {
  components: {
    // Every,
    // Article,
    Random,
    HotModule,
    CommentModule,
    FriendlyModule
  },
  data() {
    return {
      data: {
        randomList: [
          {
            content: 'nodejs',
            href: ''
          },
          {
            content: 'test2',
            href: ''
          },
          {
            content: 'test1',
            href: ''
          },
          {
            content: 'cors',
            href: ''
          }
        ],
        hotList:[
          {
            content: '高性能Javascript',
            href: ''
          },
          {
            content: '单线程异步驱动',
            href: ''
          },
          {
            content: 'MVVM框架与MVC的区别',
            href: ''
          }
        ],
        commentList: [
          {
            name: 'SRongr',
            time: '1周前',
            content: '创建'
          },
          {
            name: '阿萨类',
            time: '1周前',
            content: '来看看'
          },
          {
            name: 'big boy',
            time: '1周前',
            content: '嘻嘻'
          }
        ],
        friendList: [
          {
            content: '单线程异步I/O',
            href: ''
          },
          {
            content: '为什么选择Node',
            href: ''
          },
          {
            content: '轻量级的前端框架',
            href: ''
          },
          {
            content: '阿里中后台解决方案',
            href: ''
          },
        ]
      }
    }
  },
  mounted () {
    // this.getData()
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    display flex
    width 100% !important
    flex-direction column
    // justify-content space-around  

</style>

