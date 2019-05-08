<template lang="pug">
  .wrapper
    .content 我的个人博客
    .content Email: wrs970808@163.com
</template>



<script>
export default {
  

}
</script>


<style lang="stylus" scoped>
  .wrapper
    background-color #191818
    color #a2a2a2
    width 100% 
    min-height 50px
    display flex
    justify-content center
    align-items center
    flex-direction column
    padding 50px 0 
    .content
      width 100% 
      text-align center
      padding-bottom 10px
      &.content:last-of-type
        padding-bottom 0
</style>
