<template>
  <div class="plant-picker">
    <ul class="plant-list">
      <li v-for="plant in plants"
          :key="plant.name"
          v-if="plant.state === 0">
        <div class="plant-item"
             :class="{'active':currPlant.name === plant.name}"
             @click="onPlantChange(plant.name)">
          <PlantImage :src="plant.image"></PlantImage>
          <p>{{plant.name}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    onPlantChange (val) {
      this.$store.commit('changePlant', val)
    }
  },
  computed: mapState(['plants', 'currPlant'])
}
</script>
