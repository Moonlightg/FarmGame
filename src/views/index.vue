<template>
  <div class="page-wrap">
    <Startup></Startup>
    <User></User>
    <Garden></Garden>
    <PlantPicker></PlantPicker>
    <Menus></Menus>
  </div>
</template>

<script>
import Startup from '@/views/Startup/Startup'
import User from '@/views/info/User'
import Garden from '@/views/garden/Garden'
import PlantPicker from '@/views/PlantPicker'
import Menus from '@/views/info/Menus'
export default {
  components: {
    Startup,
    User,
    Garden,
    PlantPicker,
    Menus
  },
  data () {
    return {
    }
  },
  mounted () {
    this.init()// 初始化
  },
  methods: {
    init () {
      // 设置默认植物
      this.$store.commit('changePlant', '小麦')
      this.$nextTick(() => {
        console.log('读取内存成功1')
        this.$store.commit('load')
        console.log('读取内存成功2')
      })
      this.loopSeason()
    },
    loopSeason () {
      this.saveTimer = setInterval(() => {
        this.$store.commit('save')
        console.log('自动存档成功')
      }, 1000 * 30)
    }
  }
}
</script>
