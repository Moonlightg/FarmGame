<template>
  <div>
    <div class="menus">
      <ul class="menus-list">
        <li @click="showUnlock">解锁植物</li>
      </ul>
    </div>
    <popup v-model="unlock" position="bottom" max-height="60%">
      <Upgrades></Upgrades>
    </popup>
  </div>
</template>

<script>
import Upgrades from '@/views/info/Upgrades'
export default {
  data () {
    return {
      unlock: false
    }
  },
  methods: {
    showUnlock: function () {
      this.unlock = !this.unlock
    }
  },
  components: {
    Upgrades
  },
  computed: {
  }
}
</script>
