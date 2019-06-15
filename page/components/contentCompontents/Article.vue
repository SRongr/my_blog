<template lang="pug">
  .wrapper
    .content
      a.title(:href="`/article/${data.id}`")  {{data.title}}
      .content-text(v-html="data.content")
    .foot
      .foot-text 发布于{{date}} | 浏览 {{data.views}} | Tags: {{data.tags}}
</template>

<script>
import * as moment from 'moment'
export default {
  props: ['data'],
  data() {
    return {
    }
  },
  computed: {
    date() {
      return moment(this.data.utime * 1000).format('YYYY-MM-DD')
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
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        max-height 60px
    .foot
      padding-left 15px
      background-color #1f1f1f
      color #eeeeee
      height 30px 
      font-size 16px 
      line-height 30px
</style>
