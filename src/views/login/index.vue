<template>
  <div class="container">
    <el-tabs :stretch="true" v-model="current" class="tabs-wrap" type="border-card">
      <el-tab-pane label="手机登录" name="phone" >
        <phone-login ref="phoneRef" @loginResult="loginResult"></phone-login>
      </el-tab-pane>
      <el-tab-pane label="账号密码" name="keycode" >
        <keycode-login ref="keycodeRef"></keycode-login>
      </el-tab-pane>
      <el-button type="primary" class="login-btn" :loading="isLogin" @click="login">登录</el-button>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import { ElTabs, ElTabPane } from 'element-plus'
import keycodeLogin from './keycode-login.vue'
import phoneLogin from './phone-login.vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

export default defineComponent({
  components: {
    keycodeLogin,
    phoneLogin
  },
  setup() {
    const current = ref('phone')
    const isLogin = ref(false)
    const phoneRef = ref(null)
    const keycodeRef = ref(null)
    const router = useRouter()
    let login = ()=>{
      isLogin.value = true
      if(current.value === 'phone'){
        phoneRef.value.login()
      }else{
        keycodeRef.value.login()
      }
    }

    function loginResult(flag:boolean){
      isLogin.value = true
      flag?
      router.push({name: 'home'})
      :ElMessage.warning({
        duration: 1500,
        message: current.value === 'phone'?'登陆失败':'账号或密码错误',
        onClose(){
          isLogin.value = false
        }
      })
    }

    onMounted(()=>{
      console.log(phoneRef.value, keycodeRef.value)
      
    })
    return {
      isLogin,
      login,
      keycodeRef,
      phoneRef,
      loginResult,
      current
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
