<style scoped>

</style>
<template>
  <div>
    <Menu :path="path"></Menu>
    <Mode></Mode>
  </div>
</template>
<script>
import Menu from '../menu/Menu'
import Mode from '../mode/Mode'
export default {
  name: 'Mid',
  data () {
    return {
      path: '/mid'
    }
  },
  components: {
    Menu,
    Mode
  },
  mounted () {
    // 中期检查 userId
    this.$store.dispatch({
      type: 'mid',
      payload: null
    })
    // 中期浏览课题 userId
    this.$store.dispatch({
      type: 'midGet',
      payload: null
    })
    // 查看评分 userId
    this.$store.dispatch({
      type: 'midGrade',
      payload: null
    })
  }
}
</script>
