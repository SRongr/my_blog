<template lang="pug">
  .wrapper
    .title 友情链接
    .content
      a.content-item(v-for='item, index in data',:href="data.href") {{item.content}}

</template>


<script>
export default {
  props: ['data'],
  mounted() {
    console.log(this.data)
  }

}
</script>


<style lang="stylus" scoped>
  .wrapper
    margin-top 20px
    width 100%
    min-height 100px
    border-radius 10px
    overflow hidden
    flex-direction column
    justify-content space-between
    .title
      color #ffffff
      background-color #191818
      height 30px
      width 100%
      line-height 30px
      font-size 14px
      padding-left 10px
    .content
      flex-grow 1
      background-color #1c1c1c
      padding 5px 10px
      display flex
      flex-wrap wrap
      .content-item
        height 30px
        line-height 30px 
        border-bottom 1px solid #292929
        color #eeeeee
        display flex
        width 50%
        font-size 16px
        padding 5px 0
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        &.content-item:hover 
          color #457ab2 !important
          cursor pointer
        &.content-item:last-of-type
          border-bottom none
</style>
