<template lang="pug">
  .wrapper
    .content
      a.title 【更新】PC端微信(2.6.7.57)防撤回
      .content-text 2019-4-24更新微信 2.6.7.57防撤回，搜索 偏移量 00252185，数值75改为74 。—————————–此方法仅限于官网下载的PC版微信2.6.6.28版本。工具：winhex19、pc版微信打开winhex19， 文件->打开，定位并找到微信安装目录中的WeChatWin.dll，打开。点击左侧offset列，使偏移量转为16进制格式显示。点击工...
    .foot
      .foot-text 发布于2019-02-14 | 浏览 (123) | Tags: 微信
</template>

<script>
export default {
  
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
