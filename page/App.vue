
<template lang="pug">
  #app
    Header.header
    //- Content.content-wrapper
    router-view.view
    Bottom
</template>


<script>
import Header from './components/Header'
import Content from './components/Content'
import Bottom from './components/Bottom'
export default {
  components: {
    Header,
    Content,
    Bottom
  }
}
</script>
<style lang="stylus">
@import './common/css/base.styl'
  html,body
    width 100%
  body
    font-size 16px
  a
    color #34495e
  @media (max-width 960px)
    body 16px
  #app
    width 100%
    background-image url('./common/img/bg.jpg')
    .header
      position fixed
      top 0
    .view 
      margin-top 50px
      min-width 800px
</style>
