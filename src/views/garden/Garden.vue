<template>
  <div class="garden">
    <Plantpot v-for="(pot, index) in pots" :pot="pot" :key="index"></Plantpot>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Plantpot from '@/views/garden/Plantpot'
export default {
  components: {
    Plantpot
  },
  data () {
    return {
    }
  },
  methods: {
  },
  computed: mapState([
    'user',
    'pots'
  ])
}
</script>
