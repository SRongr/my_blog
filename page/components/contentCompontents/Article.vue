<template lang="pug">
  .wrapper
    .content
      a.title(:href="data.href")  {{data.title}}
      .content-text {{data.content}}
    .foot
      .foot-text 发布于2019-02-14 | 浏览 (123) | Tags: 微信
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper
    width 100%
    min-height 100px
    border 1px solid #000000
    margin-top 30px
    border-radius 5px
    display flex
    flex-direction column
    justify-content space-between
    .content 
      flex-grow 1
      padding 20px 20px
      .title
        font-size 20px
        font-weight 500
        color #000000
        text-decoration none
        &.title:hover 
          color #457ab2
          cursor pointer
      .content-text 
        font-size 14px
    .foot
      padding-left 15px
      background-color #1f1f1f
      color #eeeeee
      height 30px 
      font-size 16px 
      line-height 30px
</style>
