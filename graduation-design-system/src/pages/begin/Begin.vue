<style scoped>
.submit{
  width: 80%;
  margin: 0 auto 10px;
}
</style>
<template>
  <div>
    <Menu :path="path"></Menu>
    <mode></mode>
    <el-row class="submit">
      <el-col>提交报告：<input type="file"/></el-col>
    </el-row>
    <el-row class="submit">
      <el-col><el-button type="success">提交</el-button></el-col>
    </el-row>
  </div>
</template>

<script>
import Menu from '../menu/Menu'
import Mode from '../mode/Mode'
export default {
  name: 'Begin',
  data () {
    return {
      path: '/begin'
    }
  },
  components: {
    Menu,
    Mode
  },
  mounted () {
    // 开题报告 参数userId
    this.$store.dispatch({
      type: 'begin',
      payload: null
    })
    // 提交报告 无参数
    this.$store.dispatch({
      type: 'beginPost',
      payload: null
    })
  }
}
</script>
