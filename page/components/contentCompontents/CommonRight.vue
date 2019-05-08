<template lang="pug">
  .wrapper
    Random.item
    HotModule.item
    CommentModule.item
    FirendlyModule.item
</template>


<script>
import Random from './Random'
import HotModule from './HotModule'
import CommentModule from './CommentModule'
import FirendlyModule from './FirendlyModule'
export default {
  components: {
    // Every,
    // Article,
    Random,
    HotModule,
    CommentModule,
    FirendlyModule
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    display flex
    width 100% !important
    flex-direction column
    // justify-content space-around  

</style>

