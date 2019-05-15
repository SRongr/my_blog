<template lang="pug">
  .wrapper
    .title
      a.home(href="/") SRongr的个人博客&ensp; >> &ensp;
      .now 站点地图
    .content
      .content-title 最新文章
      li(v-for='item,index in data') 
        a(href="") {{item.content}}

</template>


<script>
export default {
  data() {
    return{
      data: [
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        },
        {
          content: '哈哈哈哈',
          src: ''
        }
      ]
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow hidden   // bfc
    .title
      margin 20px auto
      display flex
      width 90%
      border 1px solid #dddddd
      padding 5px
      .home
        font-weight 500
        cursor pointer
        text-decoration none
      .now
        font-weight 200
    .content 
      padding 5px
      margin 20px auto
      width 90%
      border 1px solid #dddddd
      .content-title
        font-weight 500
      li 
        padding 0 20px
        text-decoration underline
        a
          text-decoration none
</style>
