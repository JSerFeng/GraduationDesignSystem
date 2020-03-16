import axios from 'axios'

// const Service = axios.create({
//   baseURL: 'http://y291z33000.wicp.vip/',
//   timeout: 3000,
//   transformRequest: [ data => {
//     // data = JSON.stringify(data);
//     data = JSON.stringify(data)
//     // console.log(data.prototype);
//     return data;
//   }],
// });
//
// // 请求拦截器
// Service.interceptors.request.use(
//   config => {
//     // const token = localStorage.getItem('token');
//     config.headers.token = '00000000-0000-0001-0000-00000000000a';
//     return config;
//   },
//   error => {
//     return Promise.error(error);
//   }
// );
//
// // 响应拦截器
// Service.interceptors.response.use(
//   response => {
//     return response.status === 200 ? Promise.resolve(response) : Promise.reject(response);
//   },
//   error => {
//     console.log(error);
//   }
// );
//
// export default Service;
const Service = axios.create({
  // 基本域名 生产环境 ？ “线上服务器域名” ： “本地开发测试域名”

  // 注： baseUrl需要修改，看后端给的啥
  baseURL: 'http://y291z33000.wicp.vip/',
  headers: {
    get: {
      'Content-Type': 'application/json'
    },
    post: {
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      'Content-Type': 'application/json'
    }
  },
  timeout: 30000,
  transformRequest: [ data => {
    // data = JSON.stringify(data);
    data = JSON.stringify(data)
    // console.log(data.prototype);
    return data
  }],
  validateStatus () {
    // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
    return true
  },
  transformResponse: [(data) => {
    if (typeof data === 'string' && data.startsWith('{')) {
      data = JSON.parse(data)
    }
    return data
  }]
})
// 请求拦截器
Service.interceptors.request.use(config => {
  const isServer = typeof window === 'undefined'
  if (!isServer) {
    const token = window.localStorage.getItem('token')
    if (token) {
      config.headers.common['token'] = token
    }
  }
  return config
}, error => {
  error.data = {}
  error.data.msg = '服务器异常请联系管理员!'
  return Promise.resolve(error)
})
// 响应拦截器
Service.interceptors.response.use(response => {
  const status = response.status
  let message = ''
  if (status < 200 || status >= 300) {
    if (typeof response.data === 'string') {
      response.data = { message }
    } else {
      response.data.message = message
    }
  }
  return response
}, error => {
  error.data = {}
  error.data.msg = '请求超时或服务器异常,请检查网络或联系管理员!'
  return Promise.resolve(error)
})

export default Service
