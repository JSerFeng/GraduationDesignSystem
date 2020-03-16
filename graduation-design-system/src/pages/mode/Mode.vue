<style scoped>
  .main{
    width: 80%;
    font-size: 18px;
    margin: 0 auto 30px;
  }
  .col{
  }
  .title,.title1{
    padding: 10px;
  }
  .title1{
    font-size: 17px;
  }
</style>
<template>
  <div class="main">
    <el-row class="title">
      <el-col class="col">我的毕业设计课题是：</el-col>
    </el-row>
    <el-row class="title1">
      <el-col>我的指导老师是：</el-col>
    </el-row>
    <el-row class="title1" >
      <el-col>开题结束时间：</el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Mode'
}
</script>
