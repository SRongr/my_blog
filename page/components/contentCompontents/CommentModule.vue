<template lang="pug">
  .wrapper
    .title 最新评论
    .content
      .content-item(v-for='item in data')
        .item-top
          .name {{item.name}}
          .time {{item.time}}
        .item-bottom
          .text {{item.content}}

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
      .content-item
        // height 30px
        // line-height 30px 
        border-bottom 1px solid #292929
        color #eeeeee
        display block
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        font-size 14px
        .item-top
          padding 5px 0
          display flex
          justify-content space-between
          flex-direction row
        .item-bottom
          color #777777
          &.item-bottom:hover 
            color #457ab2 !important
            cursor pointer
        &.content-item:last-of-type
          border-bottom none
</style>
