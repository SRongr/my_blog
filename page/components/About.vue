<template lang="pug">
  .wrapper
    .left
      .about-box
        .title  关于我
        .content  
          p 博主王荣铄，wrs, 性别男， 山东济南人   
          p 是个有野心的程序员
          p 19年毕业
          p 前端
          p 追女神才是最大的学习动力
        .title  关于博客
        .content 
          p 生于19年
          p 不知道下次是什么时候更新
          p 初学服务器,拿来练练手
          p 用的最近学的东西 Vue-SSR MySQL 
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
        padding 20px 15px 0
        background-color #ffffff
        box-shadow 1px 1px 10px #333333
        border-radius 5px
        .title
          font-size 20px  
          font-weight 500
          padding-bottom 10px
          // margin-bottom 20px
          border-bottom 1px solid #333333
        .content
          font-size 14px
          padding 20px 0
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

