<template lang="pug">
  .wrapper
    .left
      //- .everyDay
      Every.item
      .article-list
        Article.item
        Article.item
        Article.item
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
      width 70%
      margin-right 20px
      
    .right
      width 30%
    .item
      width 100%
</style>

