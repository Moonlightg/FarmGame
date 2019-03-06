let plants = {
  // 改变选中的植物
  changePlant (state, payload) {
    state.plants.forEach(obj => {
      if (obj.name === payload) {
        state.currPlant = obj
      }
    })
  },
  // 添加植物
  setPlant (state, payload) {
    payload.plant = state.currPlant
    // 扣去成本
    this.commit('costMoney', payload.plant.cost)
  },
  // 收获植物
  getPlant (state, payload) {
    state.user.money += payload.plant.profit
    console.log('qian' + this.state.user.money)
    delete payload.plant // 种植完成清除当前种植的植物
  },
  // 添加土地
  addPlantPot (state) {
    if (state.user.money - state.potsPrice >= 0 && state.pots.length < 15) {
      state.pots.push({
        type: 'normal',
        level: 1
      })
      // 扣钱
      this.commit('costMoney', state.potsPrice)
      // 涨价
      state.potsPrice *= 2
      state.potsPrice = parseInt(state.potsPrice)
    }
  },
  // 升级为黄金土地
  addLandLevel (state) {
    if (state.user.money - state.potsPriceGolden >= 0) {
      for (let i = 0; i < state.pots.length; i++) {
        if (state.pots[i].level === 1) {
          state.pots[i].level = 2
          // 扣钱
          this.commit('costMoney', state.potsPriceGolden)
          // 涨价
          state.potsPriceGolden *= 2
          state.potsPriceGolden = parseInt(state.potsPriceGolden)
          console.log(state.potsPriceGolden)
          console.log(state.pots)
          return false
        }
      }
    }
  }
}

export default plants
