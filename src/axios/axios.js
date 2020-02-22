import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 请求拦截
axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(response => {
    if(response.status == 200 && response.data !=''){
        return response.data;
    }else{
        console.log('加载出错')
    }
}, error => {
    console.log(error,'接口请求出错')
    // 请求失败
    if (error && error.response) {
        switch (error.response.status) {
            case 401:
                console.log('未授权，请登录')
                break
            case 403:
                console.log('拒绝访问')
                break
            case 404:
                console.log('请求地址出错')
                break
            case 408:
                console.log('请求超时')
                break
            case 500:
                console.log('服务器内部错误')
                break
            default:
                return Promise.reject(error);
        }
    }
})
