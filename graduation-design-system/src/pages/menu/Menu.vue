<template>
  <div>
    <div class="shadow padding flex between">
      <div>毕业设计论文管理系统</div>
      欢迎 : {{userName}}
    </div>
    <el-menu router="true" class="el-menu-demo" mode="horizontal" :default-active="path" background-color="#42b983" text-color="#fff" active-text-color="yellow">
      <el-menu-item index="/home">选题浏览</el-menu-item>
      <el-menu-item index="/chosen">已选课题</el-menu-item>
      <el-menu-item index="/begin">开题报告</el-menu-item>
      <el-menu-item index="/mid">中期检查</el-menu-item>
      <el-menu-item index="/paper">论文</el-menu-item>
      <el-menu-item index="/grade">答辩与成绩</el-menu-item>
      <el-menu-item index="/history">警告历史</el-menu-item>
      <el-menu-item index="/evaluation">指导评教</el-menu-item>

    </el-menu>
  </div>
</template>
<script>
export default ({
  name: 'Menu',
  data () {
    return {
      // 注：userName是从storage中获取的也可以也可以是this.$store.state....啥啥啥
      userName: 'test'
    }
  },
  props: ['path'],
  methods: {
    handleSelect: function (key, keyPath) {
      console.log(key, keyPath)
    }
  }
})
</script>
<style scoped>
  .router{
    width: 100%;
    height: 100%;
  }
  .flex{
    display: flex;
    background: #42b983;
    color: white;
  }
  .flex_direction{
    flex-direction: row-reverse;
  }
  .between{
    justify-content: space-between;
  }
  .padding{
    padding: 20px;
  }
  .shadow{
    box-shadow: 0 0 10px #cacaca;
  }
  .content{
    height: calc(100vh - 100px);
  }
</style>
