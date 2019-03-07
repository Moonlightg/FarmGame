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
    money: 20000
  },
  // 植物列表
  plants: plantsState,
  // 花盆列表
  pots: [{
    type: 'normal',
    level: 1
  }],
  // 土地价格
  potsPrice: 1,
  // 黄金土地价格
  potsPriceGolden: 2000,
  // 音效 SE
  seVolume: 30,
  bgmVolume: 50,
  bgsVolume: 30,
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
    state.user.name = role.userName
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
    let pots = state.pots.map(obj => {
      return {
        type: obj.type,
        level: obj.level
      }
    })
    let plants = state.plants.filter(obj => obj.state !== 2).map(obj => {
      return {
        id: obj.id,
        speed: obj.speed,
        cost: obj.cost,
        profit: obj.profit,
        state: obj.state,
        totalGrown: obj.totalGrown
      }
    })
    let user = JSON.parse(JSON.stringify(state.user))
    let data = {
      user,
      plants,
      pots,
      potsPrice: state.potsPrice,
      potsPriceGolden: state.potsPriceGolden,
      seVolume: state.seVolume,
      bgmVolume: state.bgmVolume,
      bgsVolume: state.bgsVolume,
      landType: state.landType,
      effects: state.effects
    }
    localStorage.setItem('farmData2', JSON.stringify(data))
  },
  // 读档
  load (state) {
    let data = JSON.parse(localStorage.getItem('farmData2'))
    if (!data) return
    state.plants.filter(obj => obj.state !== 2).forEach(objPlant => {
      data.plants.forEach(newPlant => {
        if (objPlant.id === newPlant.id) {
          objPlant.speed = newPlant.speed
          objPlant.cost = newPlant.cost
          objPlant.profit = newPlant.profit
          objPlant.state = newPlant.state
          objPlant.totalGrown = newPlant.totalGrown
        }
      })
    })
    state.pots = data.pots
    state.user = data.user
    state.potsPrice = data.potsPrice
    state.potsPriceGolden = data.potsPriceGolden
    state.seVolume = data.seVolume
    state.bgmVolume = data.bgmVolume
    state.bgsVolume = data.bgsVolume
    state.landType = data.landType
    state.effects = data.effects
  }
}
const store = new Vuex.Store({
  state,
  getters,
  mutations
})

export default store
