<template lang="pug">
  .wrapper
    .title 随机标签云
    .content
      a.tag(:style="{color: `#${colorArr[Math.floor(Math.random()*10)]}`,fontSize: `${Math.floor(Math.random()*20) + 12}px`}") ads
      a.tag(:style="{color: `#${colorArr[Math.floor(Math.random()*10)]}`,fontSize: `${Math.floor(Math.random()*20) + 12}px`}") ads
      a.tag(:style="{color: `#${colorArr[Math.floor(Math.random()*10)]}`,fontSize: `${Math.floor(Math.random()*20) + 12}px`}") ads
      a.tag(:style="{color: `#${colorArr[Math.floor(Math.random()*10)]}`,fontSize: `${Math.floor(Math.random()*20) + 12}px`}") ads
      a.tag(:style="{color: `#${colorArr[Math.floor(Math.random()*10)]}`,fontSize: `${Math.floor(Math.random()*20) + 12}px`}") ads

</template>


<script>
export default {
  data() {
    return {
      colorArr: ['f8e666','7d4dae', '6da049', 'efa8b0', 'aa9462', 'c856e6', '89f4e9', 'efbcf2', 'bfbb99', 'cd7161']
    }
  },

}
</script>


<style lang="stylus" scoped>
  .wrapper
    width 100%
    // border 1px solid red
    min-height 100px
    border-radius 10px
    overflow hidden
    display flex
    flex-direction column
    justify-content space-between
    .title
      color #ffffff
      background-color #1f1f1f
      height 30px
      width 100%
      line-height 30px
      font-size 14px
      padding-left 10px
    .content
      flex-grow 1
      background-color #1c1c1c
      padding 5px 10px
      .tag 
        padding-right 5px
        &.tag:hover 
          color #457ab2 !important
          cursor pointer
</style>
