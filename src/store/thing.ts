// 引入defineStore用于创建store
import {defineStore} from 'pinia'

// 定义并暴露一个store
export const useThingtore = defineStore('thing',{
  // 动作
  actions:{},
  // 状态
  state(){
    return {
      name:'小明',
      age:18,
    }
  },
  // 计算
  getters:{}
})
