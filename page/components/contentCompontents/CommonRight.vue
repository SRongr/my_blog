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
            content: 'asdasd',
            href: ''
          },
          {
            content: '阿斯达阿迪a',
            href: ''
          },
          {
            content: 'asdada阿斯达啊',
            href: ''
          }
        ],
        hotList:[
          {
            content: '伟大的王荣铄啊',
            href: ''
          },
          {
            content: '伟大的王荣铄啊',
            href: ''
          },
          {
            content: '伟大的王荣铄啊',
            href: ''
          }
        ],
        commentList: [
          {
            name: 'bbb',
            time: '1周前',
            content: 'dadadad'
          },
          {
            name: 'bbb',
            time: '1周前',
            content: 'dadadad'
          },
          {
            name: 'bbb',
            time: '1周前',
            content: 'dadadad'
          }
        ],
        friendList: [
          {
            content: '个人博客',
            href: ''
          },
          {
            content: '个人博客',
            href: ''
          },
          {
            content: '个人博客',
            href: ''
          },
          {
            content: '个人博客',
            href: ''
          },
          {
            content: '个人博客',
            href: ''
          }
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

