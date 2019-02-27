<template>
  <div>
    <ul class="upgrades-list">
      <li v-for="plant in plants" :key="plant.name">
        <div class="plant-img" @click="unlockPlant(plant)">
          <PlantImage :src="plant.image" v-show="plant"></PlantImage>
          <span v-show="plant.state === 1">未解锁</span>
        </div>
        <div class="plant-text">
          <p>植物：{{plant.name}}</p>
          <p>成本：{{plant.cost | money}}</p>
          <p>收益：{{plant.profit | money}}</p>
          <p>速度: {{plant.speed / 1000}}秒</p>
          <p>解锁：{{plant.unlockPrice | money}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    // 解锁植物
    unlockPlant (plant) {
      if (plant.state === 1) {
        console.log('wo wei jie suo')
        if (this.user.money - plant.unlockPrice >= 0) {
          this.$vux.toast.text('解锁成功', 'top')
          this.$store.commit('unlockPlant', plant)
        } else {
          this.$vux.toast.text('你都不够钱，嘿嘿', 'top')
        }
      } else {
        this.$vux.toast.text('你已经解锁过了', 'top')
      }
    }
  },
  components: {
  },
  computed: mapState(['plants', 'user'])
}
</script>
