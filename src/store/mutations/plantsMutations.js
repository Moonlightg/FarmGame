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
  }
}

export default plants
