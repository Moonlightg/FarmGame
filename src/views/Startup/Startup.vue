<template>
  <div class="startup-box" v-if="landType==0">
    <div v-show="isShow">
      <h1>开心农场</h1>
      <a href="javascript:;" class="gobtn" @click="showToggle">开始游戏</a>
    </div>
    <div class="new-user" v-show="!isShow">
      <group>
        <x-input name="username" v-model="name" class="username"></x-input>
      </group>
      <a href="javascript:;" class="gobtn" @click="foundRole">创建角色</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { XInput, Group } from 'vux'
export default {
  data () {
    return {
      isShow: true,
      name: '努力奋斗'
    }
  },
  components: {
    XInput,
    Group
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
      let userName = this.name
      this.$store.commit('newRole', {
        landType,
        userName
      })
      this.$store.commit('save')
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
    z-index: 999;
    overflow: hidden;
  }
  h1{
    font-size: 3rem;
    font-weight: 600;
    color: #a16a00;
    text-shadow: 2px 2px 0px #f7f03a;
  }
  .gobtn{
        width: 100%;
    display: inline-block;
    line-height: 45px;
    background: #00a31c;
    text-align: center;
    color: #fff;
    font-size: 1.2rem;
    border-radius: 5px;
    margin-top: 2rem;
    border: 2px solid #109810;
  }
</style>
