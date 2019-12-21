import axios from 'axios'
import Vue from'vue'
import router from '../router/index'

const http = axios.create({
    baseURL: process.env.VUE_APP_API_URL || '/admin/api'
    // baseURL: 'http://localhost:3000/admin/api'
})
//给http加一个请求的拦截器，当客户端发送每一个请求时，都会被先拦截，在向服务端发送请求
http.interceptors.request.use((config) => {
    //将token挂载在请求头上，一起发送给服务器去做验证
    if(localStorage.token){
        config.headers.Authorization ='Bearer '+localStorage.token
    }
    return config
},(err) => {
    return Promise.reject(err)
})

//给http请求加一个响应的拦截器，当服务器发出响应时走这个方法,全局捕获
http.interceptors.response.use((res) => {
    return res
},(err) => {
    if(err.response.data.message){
    //当服务器响应的不是200这个状态码时都会走这个err函数
    //使用vue实例的messager这个属性去弹出这个错误
    Vue.prototype.$message({
        message:err.response.data.message})
    }
    if(err.response.status === 401){
        router.push('/login')
    }
    return Promise.reject(err)
})
export default http