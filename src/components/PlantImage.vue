<template>
    <img :src="url + src" class="plant" alt="" draggable="false">
</template>

<script>
export default {
  name: 'PlantImage',
  props: {
    src: String
  },
  computed: {
    url () {
      return 'static/images/'
    }
  }
}
</script>
