<template lang="pug">
  .wrapper
    .article 
      .title 每日一句
      .english If you wish to survive, you need to cultivate a strong mental attitude.
      .chinese 若想生存下去，就得培养坚强的意志。
      .person — — — — 《阿凡达》
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="stylus" scoped>
  .wrapper
    box-shadow 1px 1px 10px #888888
    text-align left
    border-radius 5px
    .article 
      width 100%
      padding 15px
      float left 
      font-size 14px
      position relative
      .title
        font-size 12px
        color slateblue 
        &.title:after 
          font-family "glyphicons"
          content "\e122"
          display inline-block
          margin-left 5px
      div
        width 80%
        margin-bottom 5px
      .person
        margin-bottom -20px
        float right
        text-align right 
        transform translate(0, -20px)
</style>

