<template>
  <div class="form_wrap full_height">
    <el-form ref="loginForm" :model="form"  class="flex direction_column form center_margin">
      <div class="title fontC_white">后台管理系统</div>
      <el-form-item>
        <el-input
          ref="username"
          placeholder="Username"
          prefix-icon="el-icon-user"
          v-model="form.username"
        />
      </el-form-item>
      <el-form-item>
        <el-input
          ref="password"
          placeholder="Password"
          prefix-icon="el-icon-lock"
          show-password
          v-model="form.password"
        />
      </el-form-item>
      <el-form-item v-if="register">
        <el-select
          v-model="value"
          placeholder="请选择您的身份"
          @change="selectChange"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.label">
          </el-option>
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="account">{{this.register ? '注册' : '登录' }}</el-button>
      <span
        v-if="!register"
        class="turnReg"
        @click="turnReg"
      >
        <i class="el-icon-warning-outline" />
        没有账号? 马上注册
      </span>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Account',
  data () {
    return {
      form: {
        username: '',
        password: '',
        type: ''
      },
      options: [{
        value: 0,
        label: '学生'
      }, {
        value: 1,
        label: '教师'
      }],
      value: '',
      register: false,
      isOk: 'Home'
    }
  },
  methods: {
    turnReg () {
      this.register = true
    },
    account () {
      // sessionStorage.setItem('Flag', 'isLogin')
      this.register ? this.$store.dispatch({
        type: 'register',
        payload: {
          acoount: this.form.username,
          password: this.form.password,
          type: this.form.type
        }
      }) : this.$store.dispatch({
        type: 'login',
        payload: {
          acoount: this.form.username,
          password: this.form.password
        }
      })
      // 选题浏览，无需参数
      this.$store.dispatch({
        type: 'project',
        payload: null
      })
      // 选择课题 参数projectId(课题标识)  userId（学生编号）
      this.$store.dispatch({
        type: 'update',
        payload: null
      })
      // 查看已选课题 参数userId
      this.this.$store.dispatch({
        type: 'chosen',
        payload: null
      })
      // 浏览已选课题 参数userId
      this.this.$store.dispatch({
        type: 'all',
        payload: null
      })
    },
    selectChange (e) {
      this.form.type = e === '学生' ? 0 : 1
      console.log(e)
    }
  }
}
</script>

<style scoped>
  .form_wrap{
    background: #42b983;
  }
  .form{
    padding: 160px 35px 0;
    max-width: 500px;
  }
  .title{
    font-size: 26px;
    font-weight: bolder;
    margin: 22px auto;
  }
  .turnReg{
    cursor: pointer;
    margin-top: 20px;
    color: white;
    display: flex;
    justify-content: flex-end;
  }

</style>
