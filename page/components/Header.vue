<template lang="pug">
  .wrapper
    .content
      .left 
        .title SRongr的个人博客 | 技术博客
        ul.list
          li.active
            a(href="/") 首页
          li
            a(href="/map") 地图
          li
            a(href="/about") 关于
          li
            a(href="/message") 留言
      .right
        input(placeholder='输入关键词查找')
        button.search 搜索
</template>


<script>
export default {
  

}
</script>
<style lang="stylus" scoped>
  .wrapper
    width 100%
    height 50px
    background-color #191818
    .content
      width 80%
      height 100%
      // line-height 50px
      margin 0 auto
      display flex
      justify-content space-between
      align-items center
      white-space nowrap 
      color #ffffff
      .left 
        .title
          display inline-block
          // min-width 300px
          font-size 20px
          margin-right 15px
        .list
          display inline-block
          li
            display inline-block
            padding 0 15px
            &.active
              background-color #080808
            a
              text-decoration none 
              color #ffffff
         

      .right 
        input 
          border 0px
          box-sizing border-box
          border-radius 5px
          height 34px
          padding 6px
          font-size 14px
          margin-right 5px
        .search
          background-color #ffffff
          display inline-block
          color #000000
          height 34px
          text-align center
          border-radius 5px
          padding 0 10px
          font-size 14px
          font-weight 400
</style>
