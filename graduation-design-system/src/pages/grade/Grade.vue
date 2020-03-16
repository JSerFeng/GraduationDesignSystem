<style>
  .design{
    font-size: 18px;
    width: 80%;
    margin: 0 auto;
    padding: 10px;
  }
  .management{
    width: 80%;
    font-size: 13px;
    margin: 0 auto 50px;
  }
</style>
<template>
  <div>
    <Menu :path="path"></Menu>
    <div class="design">
      我的毕业设计课题：
    </div>
    <div class="design">
      指导老师：
    </div>
    <div class="management">
      <el-row style="background: #42b983;padding: 10px">
        <el-col>我的答辩安排</el-col>
      </el-row>
      <el-row style="background: #f4f4f4;padding: 10px">
        <el-col :span="6">类型</el-col>
        <el-col :span="6">时间</el-col>
        <el-col :span="12">地点</el-col>
      </el-row>
    </div>
    <div class="management">
      <el-row style="background: #42b983;padding: 10px">
        <el-col>我的成绩表</el-col>
      </el-row>
      <el-row style="background: #f4f4f4;padding: 10px">
        <el-col :span="6">指导教室评阅成绩</el-col>
        <el-col :span="6">评阅教室评阅成绩</el-col>
        <el-col :span="3">答辩成绩</el-col>
        <el-col :span="3">总成绩</el-col>
        <el-col :span="3">成绩等级</el-col>
        <el-col :span="3">优秀论文情况</el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Menu from '../menu/Menu'
export default {
  name: 'Grade',
  data () {
    return {
      path: '/grade'
    }
  },
  components: {
    Menu
  }
}
</script>
