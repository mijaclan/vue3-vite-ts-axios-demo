import { http } from '../utils/http'

/**
 * 每日情话接口
 * 无参数
 */
export function getLoveTalk() {
  return http({
    url: `/han/love`, // "/han" 会被替换成 https://api.vvhan.com/api 
    method: 'get',    // 请求的方式
  })
}

/**
 * axios 的传参数方式params
 * params 会采取接口链接拼接的方式传递参数 -> https://api.vvhan.com/api/qqcode?qq=1655466387
 * 查看qq是否在线
 * @param params 
 */
export function getQqState(params:any) {
  return http({
    url: `/han/qqcode`,
    method: 'get',
    params
  })
}

