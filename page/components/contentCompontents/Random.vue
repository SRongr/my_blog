<template lang="pug">
  .wrapper
    .title 随机标签云
    .content
      a.tag(v-for="item in data" :style="{color: randomColor(),fontSize: randomFontSize()}") {{item.content}}
</template>


<script>
export default {
  props: ['data'],
  data() {
    return {
      colorArr: ['f8e666','7d4dae', '6da049', 'efa8b0', 'aa9462', 'c856e6', '89f4e9', 'efbcf2', 'bfbb99', 'cd7161']
    }
  },
  computed: {
    randomColor () {
      return function () {
        const red = Math.random() * 255
        const green = Math.random() * 255
        const blue = Math.random() * 255
        return `rgb(${red},${green},${blue})`
      }
    },
    randomFontSize () {
      return function () {
        return `${Math.random()* 15 + 12}px`
      }
    }
  }

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
