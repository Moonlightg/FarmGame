<template>
  <div>
    <div class="menus">
      <ul class="menus-list">
        <li @click="showUnlock"><p>解锁植物</p></li>
        <li @click="showAddLand"><p>添加土地</p></li>
        <li @click="showLandLevel"><p>升级土地</p></li>
      </ul>
    </div>
    <popup v-model="unlock" position="bottom" max-height="60%">
      <Upgrades></Upgrades>
    </popup>

    <confirm v-model="inConfirm"
      title="确定解锁吗？"
      @on-confirm="addLand">
      <p style="text-align:center;">需要{{potsPrice | money}}</p>
    </confirm>

    <confirm v-model="inLevel"
      title="确定升级吗？"
      @on-confirm="landLevel">
      <p>农作物成长速度+20%</p>
      <p style="text-align:center;">需要{{potsPriceGolden | money}}</p>
    </confirm>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import Upgrades from '@/views/info/Upgrades'
export default {
  data () {
    return {
      unlock: false,
      inConfirm: false,
      inLevel: false
    }
  },
  methods: {
    showUnlock: function () {
      this.unlock = !this.unlock
    },
    showAddLand: function () {
      this.inConfirm = !this.inConfirm
    },
    showLandLevel: function () {
      if (this.pots.length < 15) {
        this.$vux.toast.text('先购买15块土地', 'top')
        return false
      } else if (this.user.money - this.potsPriceGolden >= 0) {
        this.inLevel = !this.inLevel
      } else {
        this.$vux.toast.text('不够钱升级，种菜吧', 'top')
      }
    },
    addLand: function () {
      if (this.user.money - this.potsPrice >= 0) {
        this.$store.commit('addPlantPot')
      } else {
        this.$vux.toast.text('你不够钱增收土地', 'top')
      }
    },
    landLevel: function () {
      this.$store.commit('addLandLevel')
    }
  },
  components: {
    Upgrades
  },
  computed: mapState(['potsPrice', 'potsPriceGolden', 'user', 'pots'])
}
</script>
