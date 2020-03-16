<style scoped>
  .item{
    padding: 20px;
    text-align: center;
    font-size: 18px;
  }
  .form{
    width: 70%;
    margin: 0 auto;
  }
  .title{
    padding: 10px;
    background: #48cc90;
    color: white;
  }
  .title1{
    padding: 10px;
    background: #f7f7f7;
  }
</style>
<template>
  <div>
    <Menu :path="path"></Menu>
    <div class="item">已选课题列表</div>
    <div class="form">
      <el-row>
        <el-col :span="5" class="title">学年</el-col>
        <el-col :span="14" class="title">课题名</el-col>
        <el-col :span="5" class="title">课题来源</el-col>
      </el-row>
      <el-row v-for="(item, index) of chosen" class="row" :key="index">
        <el-col :span="5" class="title1">{{item.year}}</el-col>
        <el-col :span="14" class="title1">{{item.name}}</el-col>
        <el-col :span="5" class="title1">{{item.origin}}</el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Menu from '../menu/Menu'
export default {
  name: 'Chosen',
  data () {
    return {
      chosen: [{
        year: '2007.8.8',
        name: 'xxx',
        origin: 'teacher'
      }, {
        year: '2008.8.8',
        name: 'yyyyy',
        origin: 'FYYYY'
      }],
      path: '/chosen'
    }
  },
  components: {
    Menu
  },
  mounted () {
    // 查看已选课题 userId
    this.$store.dispatch({
      type: 'chosen',
      payload: null
    })
    // 浏览已选课题 userId
    this.$store.dispatch({
      type: 'all',
      payload: null
    })
  }
}
</script>
