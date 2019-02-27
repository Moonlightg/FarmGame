<template>
  <div class="user-box">
    <div class="user">
      <img :src="url">
    </div>
    <div class="user-text">
      <p>{{user.name}}</p>
      <p class="gold"><span>金币</span>{{user.money | money}}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
  },
  computed: {
    url () {
      return '/static/images/user.jpeg'
    },
    ...mapState({
      user: state => state.user
    })
  }
}
</script>
