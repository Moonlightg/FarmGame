<template>
  <div class="startup-box" v-if="landType==0">
    <div v-show="isShow">
      <h1>vue开心农场{{landType}}</h1>
      <a href="javascript:;" @click="showToggle">开始游戏</a>
    </div>
    <div v-show="!isShow">
      <input type="text" name="username" :value="username" class="username">
      <a href="javascript:;" @click="foundRole">创建角色</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      isShow: true
    }
  },
  computed: {
    ...mapState({
      username: state => state.user.name,
      landType: state => state.landType
    })
  },
  methods: {
    showToggle () {
      this.isShow = !this.isShow
    },
    // 创建角色名称并保存
    foundRole () {
      // 同时改变状态为登陆状态landType=1
      let landType = 1
      let role = document.getElementsByClassName('username')[0].value
      this.$store.commit('newRole', {
        landType,
        role
      })
      this.$store.commit('save')
      console.log('创建角色后存档成功')
    }
  }
}
</script>

<style scoped>
  .startup-box{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #91ffa2;
    z-index: 999;
  }
  h1{
    font-size: 32px;
    font-weight: 600;
    color: blue;
  }
</style>
