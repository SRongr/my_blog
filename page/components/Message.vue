<template lang="pug">
  .wrapper
    .left
      .about-box
        .content  
          p 欢迎留言   
          p 欢迎留言
          p 欢迎留言
      p.about-message 关于: 目前有1条留言
      .message-box
        .item
          .top
            span.top-name SRongr
            span.top-content : 发表于 2018年06月26日 12:35
          p.bottom 用的最近学的东西 Vue-SSR MySQL 
        .item
          .top
            span.top-name SRongr
            span.top-content : 发表于 2018年06月26日 12:35
          p.bottom 用的最近学的东西 Vue-SSR MySQL
        .item
          .top
            span.top-name SRongr
            span.top-content : 发表于 2018年06月26日 12:35
          p.bottom 用的最近学的东西 Vue-SSR MySQL
          

    .right
      Right
</template>


<script>
import Article from './contentCompontents/Article'
import Random from './contentCompontents/Random'
import HotModule from './contentCompontents/HotModule'
import CommentModule from './contentCompontents/CommentModule'
import FirendlyModule from './contentCompontents/FirendlyModule'
import Right from './contentCompontents/CommonRight'
export default {
  components: {
    Article,
    Right
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    width 80%
    margin 30px auto
    display flex
    justify-content space-around
    .left
      margin 30px
      width 70%
      margin-right 20px
      // border 1px solid #000000
      .about-box
        // border 1px solid red
        padding 20px 15px
        background-color #ffffff
        box-shadow 1px 1px 10px #333333
        border-radius 5px
        .content
          font-size 14px
      .about-message 
        padding 20px 0 5px
        font-size 18px 
        font-weight 600
      .message-box
        // border 1px solid red
        .item
          padding 5px 
          margin 5px 0
          background-color #ddedf6
          border 1px dashed #84a3be
          .top
            padding-bottom 10px
            .top-name
              font-weight 500
    .right
      width 30%
    .item
      width 100%
</style>

