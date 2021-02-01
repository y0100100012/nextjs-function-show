/*
 * @Description: api请求封装
 * @Author: grace
 * @Date: 2018-12-28 15:14:11
 * @LastEditors  : grace
 * @LastEditTime : 2020-04-14 10:00:58
 */
import axios from 'axios'
// import axiosCancel from 'axios-cancel'
// axiosCancel(axios, {
//     debug: false
// })

const get = async (url, params = {}, headers, responseType) => {
    // 同时发送相同的url请求，只能发送最后一个请求
    // axios.cancel(url) ;

    Object.keys(params).map(item => {
        params[item] = decodeURIComponent(params[item])
    })
    try {
        let options = {
            method: 'get',
            url,
            noCache: true,
            params: params,
            timeout: 60000,
            headers/* :{
                'Access-Control-Allow-Origin':'*',
                'content-type': 'application/json',
            } */,
            responseType: responseType
        }

        options.requestId = url
        const response = await axios(options)
        return response
    } catch (err) {
        if (window.mockReqData == "true" && mockData[url] != null) {
            return mockData[url]
        }
        return {
            isError: true,
            statusCode: -10001,
            message: '接口异常:' + err,
            data: null
        }
    }
}
/**
 * @description: 
 * @param {type}  axiosList:[{url,params}]
 * @return: 同时发送不同请求
 */
const getAll = async (axiosList) => {
    let axiosLists = [];
    for (let i = 0; i < axiosList.length; i++) {
        axiosLists.push(
            axios.get(axiosList[i].url, { params: axiosList[i].params })
        );
    }
    try {
        const response = await axios.all(axiosLists)
        return response
    } catch (err) {
        return {
            isError: true,
            statusCode: -10001,
            message: err.response && err.response.data && err.response.data.message ? err.response.data.message : '接口异常',
            data: null
        }
    }
}
const post = async (url, params = {}, callback1 = null, responseType, header) => {

    params = params || {}
    let headers = {
        'x-csrf-token': CSRF_TOKEN,
        'access-control-allow-origin': '*',//这里的access-control-allow-origin可以用来解决跨域问题,
    };
    if(header){
        for (let key in header) {
            headers[key] = header[key];
        }
    }
    try {
        const response = await axios({
            url,
            method: 'post',
            onUploadProgress: (progressEvent) => { //原生获取上传进度的事件
                if (progressEvent.lengthComputable) {
                    //属性lengthComputable主要表明总共需要完成的工作量和已经完成的工作是否可以被测量
                    //如果lengthComputable为false，就获取不到progressEvent.total和progressEvent.loaded
                    callback1 ? callback1(progressEvent) : null;
                }
            },
            data: params,
            requestId: url,
            timeout: 300000,
            headers: headers,
            responseType: responseType
        })
        return response
    } catch (err) {
        return {
            isError: true,
            statusCode: -10001,
            message: '接口异常' + err,
            data: null
        }
    }
}

const put = async (url, params = {}, headers, responseType) => {
    try {
        let options = {
            url,
            method: 'put',
            requestId: url,
            noCache: true,
            data: params,
            timeout: 60000,
            headers: headers ? headers : {
                'x-csrf-token': CSRF_TOKEN,
                'access-control-allow-origin': '*',//这里的access-control-allow-origin可以用来解决跨域问题,
            },
            responseType: responseType
        }

        const response = await axios(options)
        return response
    } catch (err) {
        if (window.mockReqData == "true" && mockData[url] != null) {
            return mockData[url]
        }
        return {
            isError: true,
            statusCode: -10001,
            message: '接口异常:' + err,
            data: null
        }
    }
}

export default {
    get,
    getAll,
    post,
    put
}