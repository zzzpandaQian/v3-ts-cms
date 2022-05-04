<template>
  <div class="container">
    <el-tabs :stretch="true" class="tabs-wrap" type="border-card">
      <el-tab-pane label="手机登录" >
        <phone-login></phone-login>
      </el-tab-pane>
      <el-tab-pane label="账号密码">
        <keycode-login></keycode-login>
      </el-tab-pane>
      <el-button type="primary" class="login-btn" :loading="isLogin">登录</el-button>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElTabs, ElTabPane } from 'element-plus'
import keycodeLogin from './keycode-login.vue'
import phoneLogin from './phone-login.vue'
// import { ElMessage } from 'element-plus/lib/components'

export default defineComponent({
  components: {
    keycodeLogin,
    phoneLogin
  },
  mounted(){

  },
  setup() {
    const isLogin = ref(false)

    return {
      isLogin
    }
  }
})
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
}
.login-btn{
  width: 10rem;
}
.tabs-wrap {
  margin: auto;
  width: 20rem;
  height: 15rem;
  position: relative;
}
</style>
