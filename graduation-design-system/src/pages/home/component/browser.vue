<template>
  <el-transfer
    v-model="value" :data="data" :filterable="true" :titles="titles" class="el-transfer" @change="myChange"></el-transfer>
</template>
<script>
export default {
  name: 'browser',
  data () {
    const generateData = _ => {
      const data = []
      const cities = ['高等数学', '思修', 'C语言程序设计', '大学体育', '大学英语']
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index
        })
      })
      return data
    }
    return {
      data: generateData(),
      value: [],
      titles: ['所有课题', '已选课题']
    }
  },
  methods: {
    myChange (e, direction) {
      console.log(e, direction)
    }
  }
}
</script>
<style>
  .el-transfer{
    margin: 50px auto;
  }
</style>
