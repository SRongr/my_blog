<template lang="pug">
  .wrapper
    .left
      //- .everyDay
      Every.item(:data="everyData")
      .article-list 
        Article.item(v-for='item,index in articleList', :data="item", :key="index")
    .right
      Right
</template>


<script>
import Every from './contentCompontents/Every'
import Article from './contentCompontents/Article'
import Right from './contentCompontents/CommonRight'
export default {
  components: {
    Every,
    Article,
    Right
  },
  data() {
    return {
      everyData: {
        english: "If you wish to survive, you need to cultivate a strong mental attitude.",
        chinese: "若想生存下去，就得培养坚强的意志",
        author: '《阿凡达》'
      },
      articleList: [],
      // articleList: [
      //   {
      //     title: "【更新】PC端微信(2.6.7.57)防撤回",
      //     href: '',
      //     content: '2019-4-24更新微信 2.6.7.57防撤回，搜索 偏移量 00252185，数值75改为74 。—————————–此方法仅限于官网下载的PC版微信2.6.6.28版本。工具：winhex19、pc版微信打开winhex19， 文件->打开，定位并找到微信安装目录中的WeChatWin.dll，打开。点击左侧offset列，使偏移量转为16进制格式显示。点击工...',
      //     message: {
      //       time: '2019-4-24',
      //       views: 123,
      //       tags: '微信'
      //     }
      //   },
      //   {
      //     title: "【更新】PC端微信(2.6.7.57)防撤回",
      //     href: '',
      //     content: '2019-4-24更新微信 2.6.7.57防撤回，搜索 偏移量 00252185，数值75改为74 。—————————–此方法仅限于官网下载的PC版微信2.6.6.28版本。工具：winhex19、pc版微信打开winhex19， 文件->打开，定位并找到微信安装目录中的WeChatWin.dll，打开。点击左侧offset列，使偏移量转为16进制格式显示。点击工...',
      //     message: {
      //       time: '2019-4-24',
      //       views: 123,
      //       tags: '微信'
      //     }
      //   },
      //   {
      //     title: "【更新】PC端微信(2.6.7.57)防撤回",
      //     href: '',
      //     content: '2019-4-24更新微信 2.6.7.57防撤回，搜索 偏移量 00252185，数值75改为74 。—————————–此方法仅限于官网下载的PC版微信2.6.6.28版本。工具：winhex19、pc版微信打开winhex19， 文件->打开，定位并找到微信安装目录中的WeChatWin.dll，打开。点击左侧offset列，使偏移量转为16进制格式显示。点击工...',
      //     message: {
      //       time: '2019-4-24',
      //       views: 123,
      //       tags: '微信'
      //     }
      //   }
      // ]
    }
  },
  mounted() {
    console.log(this.articleList)
    this.$util.request({
      vm:this,
      baseURL:'http://localhost:12306/api/queryAllArticles',
      done: data => {
        console.log(data)
        this.articleList = data.articleArr
      },
      fail: err => {
        console.log(err)
      }
    })
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
      width 70%
      margin-right 20px
      
    .right
      width 30%
    .item
      width 100%
</style>

