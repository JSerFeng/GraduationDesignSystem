import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './action-Types'
import Service from '../utils/service'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: true,
    userInfo: sessionStorage.getItem('userInfo') || {},
    ketis: [1, 2, 3]
  },
  mutations: {
    // 参数action接受的是下面commit过来的对象
    [types.LOGIN_OK] (state, action) {
      console.log(action, 111)
      console.log(state.userInfo)
      localStorage.setItem('Flag', 'isLogin')
    },
    // 选题浏览,接受到课题, 参数action接受的是下面commit的res.data.data
    [types.ALL] (state, action) {
      console.log(action)
      state.all = action.payload
    },
    // 选择课题
    [types.UPDATE] (state, action) {
      console.log('选择课题')
    },
    // 查看已选课题
    [types.CHOSEN] (state, action) {
      console.log('查看已选课题')
    },
    // 浏览已选课题
    [types.GET_ALL] (state, action) {
      console.log('浏览已选课题')
    },
    // 开题报告
    [types.BEGIN] (state, action) {
      console.log('开题报告')
    },
    // 提交开题报告
    [types.BEGIN_POST] (state, action) {
      console.log('提交开题报告')
    }
  },
  actions: {
    // 登录
    async login ({commit}, action) {
      await router.push('/home')
      // action.payload是账号密码，是请求的参数
      const res = await Service.post('/', action.payload)
      if (res.code === 200) {
        // 注： 登录成功后将后端返回的用户信息进行本地存储
        // sessionStorage.setItem(...)
        sessionStorage.setItem('userInfo', res.data.data)
        commit({
          // 传给mutation的types.LOGIN_OK
          type: types.LOGIN_OK,
          payload: res.data.data
        })
      }
    },
    // 注册
    async register ({commit}, action) {
      const res = await Service.post('/', action.payload)
      if (res.code === 200) {
        // 基于信息安全原则，用户注册成功后，还需要进行一次登录操作
        history.go(0)
      }
    },
    // 全部选题浏览
    async project ({commit}, action) {
      const res = await Service.get('/project/get', action.payload)
      if (res.code === 200) {
        commit({
          type: types.ALL,
          payload: res.data.data
        })
      }
    },
    // 选择课题(选择) 参数projectId(课题标识)  userId（学生编号）
    async update ({commit}, action) {
      const res = await Service.put('/project/update', action.payload)
      if (res.code === 200) {
        commit({
          type: types.UPDATE,
          payload: res.data.data
        })
      }
    },
    // 查看已选课题 参数userId
    async chosen ({commit}, action) {
      const res = await Service.get('/chosen/getall', action.payload)
      if (res.code === 200) {
        commit({
          type: types.CHOSEN,
          payload: res.data.data
        })
      }
    },
    // 浏览已选课题 参数userId
    async all ({commit}, action) {
      const res = await Service.get('/chosen/get', action.payload)
      if (res.code === 200) {
        commit({
          type: types.GET_ALL,
          payload: res.data.data
        })
      }
    },
    // 开题报告
    async begin ({commit}, action) {
      const res = await Service.get('/begin/get', action.payload)
      if (res.code === 200) {
        commit({
          type: types.GET_ALL,
          payload: res.data.data
        })
      }
    },
    // 提交报告
    async beginPost ({commit}, action) {
      const res = await Service.post('/begin/post', action.payload)
      if (res.code === 200) {
        commit({
          type: types.BEGIN_POST,
          payload: res.data.data
        })
      }
    },
    // 中期检查
    async mid ({commit}, action) {
      const res = await Service.get('/mid/getall', action.payload)
      if (res.code === 200) {
        commit({
          type: types.MID,
          payload: res.data.data
        })
      }
    },
    // 中期 浏览课题
    async midGet ({commit}, action) {
      const res = await Service.get('/mid/get', action.payload)
      if (res.code === 200) {
        commit({
          type: types.MID_GET,
          payload: res.data.data
        })
      }
    },
    // 中期 查看评分
    async midGrade ({commit}, action) {
      const res = await Service.get('/mid/grade/get', action.payload)
      if (res.code === 200) {
        commit({
          type: types.MID_GRADE,
          payload: res.data.data
        })
      }
    }
  }
})
