<style scoped>
  .ifChoose{
    padding: 20px;
    font-size: 18px;
    text-align: center;
  }
  .keti{
    padding: 0 20%;
    font-size: 17px;
  }
  .ketis{
    padding: 1%;
    display: flex;
    justify-content: space-between;
  }
</style>

<template>
  <div>
    <Menu :path="path"></Menu>
    <el-row>
      <el-col class="ifChoose">{{ifChoose?'你的选择是: ':'请选择课题'}}{{ifChoose?'鲁班软件在,,':'...'}}</el-col>
    </el-row>
    <ul class="keti">
      <li v-for="(keti, index) of ketis" :key="index" class="ketis">
        <div>{{keti}}</div>
        <el-button type="success" size="mini">添加</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
import Menu from '../menu/Menu'
export default {
  name: 'Home',
  data () {
    return {
      ifChoose: false,
      path: '/home'
    }
  },
  components: {
    Menu
  },
  computed: {
    ketis () {
      return this.$store.state.ketis
    }
  },
  methods: {
    add: function (item, index) {
      this.$store.state.courses.push(item)
      console.log(this.$store.state.courses)
    }
  }
}
</script>
