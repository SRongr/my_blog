<template lang="pug">
  .wrapper
    .left
      .article
        .title {{detail.title}}
        .desc 分类: {{detail.tags}}  发布于{{detail.ctime}}  浏览({{detail.views}})
        .divider
        p.content  {{detail.content}}
      p.about-message 关于: 目前有1条留言
      .message-box
        .item
          .top
            span.top-name SRongr
            span.top-content : 发表于 2018年06月26日 12:35
          p.bottom 是论文创造了他
        .item
          .top
            span.top-name SRongr
            span.top-content : 发表于 2018年06月26日 12:35
          p.bottom 用了些什么框架呢
        .item
          .top
            span.top-name SRongr
            span.top-content : 发表于 2018年06月26日 12:35
          p.bottom 服务器练手项目
          

    .right
      Right
</template>


<script>
import Article from './contentCompontents/Article'
import Random from './contentCompontents/Random'
import HotModule from './contentCompontents/HotModule'
import CommentModule from './contentCompontents/CommentModule'
import FriendlyModule from './contentCompontents/FriendlyModule'
import Right from './contentCompontents/CommonRight'
export default {
  components: {
    Article,
    Right
  },
  mounted() {
    const id = this.$route.params.id
    this.$util.request({
      vm: this,
      baseURL: `http://localhost:12306/api/queryArticleDetails?id=${id}`,
      done: data => {
        console.log(data)
        this.detail = data
      },
      fail: err => {
        console.log(err)
      }
    })
  },
  computed: {
    showTags() {

    }
  },
  data() {
    return {
      detail: {},
      tags:'标签test1,标签test2',
      title: 'Docker搜索或拉取镜像时提示timeout',
      time: 123,
      views: 23,
      content:'推荐直接在物理主机的config.json文件进行配置，因为发现下面的方式修改/etc/resolv.conf后，重启docker时会失效。推荐直接在物理主机的config.json文件进行配置，因为发现下面的方式修改/etc/resolv.conf后，重启docker时会失效。推荐直接在物理主机的config.json文件进行配置，因为发现下面的方式修改/etc/resolv.conf后，重启docker时会失效。推荐直接在物理主机的config.json文件进行配置，因为发现下面的方式修改/etc/resolv.conf后，重启docker时会失效。推荐直接在物理主机的config.json文件进行配置，因为发现下面的方式修改/etc/resolv.conf后，重启docker时会失效。推荐直接在物理主机的config.json文件进行配置，因为发现下面的方式修改/etc/resolv.conf后，重启docker时会失效。'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    width 80%
    margin 30px auto
    display flex
    justify-content space-around
    .left
      margin 30px
      width 70%
      margin-right 20px
      // border 1px solid #000000
      .article
        // border 1px solid red
        padding 20px 15px
        background-color #ffffff
        box-shadow 1px 1px 10px #333333
        border-radius 5px
        .title
          font-size 24px
          font-weight 500
        .divider
          height 1px
          border-bottom 1px solid #b9b9b9
          width 100%
          margin 20px 0
        .content
          font-size 14px
      .about-message 
        padding 20px 0 5px
        font-size 18px 
        font-weight 600
      .message-box
        // border 1px solid red
        .item
          padding 5px 
          margin 5px 0
          background-color #ddedf6
          border 1px dashed #84a3be
          .top
            padding-bottom 10px
            .top-name
              font-weight 500
    .right
      width 30%
    .item
      width 100%
</style>

