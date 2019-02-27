import Vue from 'vue'
import Vuex from 'vuex'
import plantsState from './state/plantsState'
import plantsMutatuins from './mutations/plantsMutations'
Vue.use(Vuex)

// 要设置的全局访问的state对象
const state = {
  // 要设置的初始属性值
  landType: 0, // 登陆状态0=未登陆，1=登陆
  // 角色
  user: {
    name: '张三',
    money: 2000
  },
  // 植物列表
  plants: plantsState,
  // 花盆列表
  pots: [{
    type: 'normal'
  }],
  // 当前选中的植物
  currPlant: {},
  effects: 2
}
// 实时监听state值的变化（最新状态）
const getters = {
  isShow (state) { // 主要用来承载变化的showFooter的值
    return state.showFooter
  },
  getChangNum () {
    return state.changNum // 主要用来承载变化的changNum的值
  }
}
// mutations改变state的初始值，接受state或额外的参数
const mutations = {
  // 创建角色
  newRole (state, role) {
    state.user.name = role.role
    state.landType = role.landType
  },
  // 扣去金额
  costMoney (state, cost = 0) {
    if (state.user.money - cost >= 0) {
      state.user.money -= cost
    }
  },
  // 解锁农作物
  unlockPlant (state, payload) {
    state.plants.forEach(obj => {
      if (obj.name === payload.name) {
        // 扣钱
        this.commit('costMoney', payload.unlockPrice)
        obj.state = 0
      }
    })
  },
  ...plantsMutatuins,
  // 存档
  save (state) {
    let user = JSON.parse(JSON.stringify(state.user))
    let data = {
      user,
      landType: state.landType
    }
    localStorage.setItem('farmData2', JSON.stringify(data))
  },
  // 读档
  load (state) {
    let data = JSON.parse(localStorage.getItem('farmData2'))
    if (!data) return
    state.user = data.user
    state.landType = data.landType
  }
}
const store = new Vuex.Store({
  state,
  getters,
  mutations
})

export default store