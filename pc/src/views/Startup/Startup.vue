<template>
  <div class="startup-wrap">
  	<div class="startup-box" v-if="isStart">
  		<div class="logo">VUE 农场</div>
    	<Button type="primary" @click="showToggle">开始游戏</Button>
  	</div>

    <div class="found-box" v-if="isFound">
      <div class="user-wrap">
        <div class="user" @click="modal2 = true">
          <img :src="url">
        </div>
      </div>
      <Input v-model="value" placeholder="取一个名字" style="width: 300px" />
      <Button type="primary" @click="foundRole">创建角色</Button>
    </div>
    <Modal v-model="modal2" width="360">
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="ios-information-circle"></Icon>
            <span>Delete confirmation</span>
        </p>
        <div style="text-align:center">
            <p>After this task is deleted, the downstream 10 tasks will not be implemented.</p>
            <p>Will you delete it?</p>
        </div>
        <div slot="footer">
            <Button type="error" size="large">确定</Button>
        </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'startup',
  data () {
    return {
      isStart: true,
      isFound: true,
      modal2: false,
      value: ''
    }
  },
  computed: {
    url () {
      return 'static/images/user.jpeg'
    }
  },
  methods: {
    showToggle () {
      this.isStart = !this.isStart
    },
    foundRole () {

    }
  }
}
</script>

<style lang="less">
  .startup-wrap,
  .startup-box,
  .found-box{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    text-align: center;
    z-index: 2;
  }
  .found-box{
    z-index: 1;
  }
  .startup-box .logo{
    margin-top: 200px;
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: bold;
  }
  .user-wrap {
    .user{
      width:100px;
      height: 100px;
      border-radius: 50%;
      margin: 30px auto;
    }
  }
</style>
