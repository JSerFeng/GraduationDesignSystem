<style>
  .model{
    width: 80%;
    padding: 10px;
    margin: 0 auto;
    font-size: 17px;
  }
</style>
<template>
  <div>
    <Menu :path="path"></Menu>
    <Mode></Mode>
    <div class="model">
      范文:
    </div>
    <div class="model">
      {{isFinish?'':'你尚未完成中期或开题，不能进行论文操作'}}
    </div>
  </div>
</template>
<script>
import Menu from '../menu/Menu'
import Mode from '../mode/Mode'
export default {
  name: 'Paper',
  data () {
    return {
      isFinish: false,
      path: '/paper'
    }
  },
  components: {
    Menu,
    Mode
  }
}
</script>
