<template>
  <div>
    <el-form :label-position="labelPosition" ref="uForm" label-width="80px" :rules="rules" :model="form">
      <el-form-item label="用户名" required prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码" prop="pwd" label-width="80px" required>
        <el-input v-model="form.pwd" type="password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { RULES } from '@/common/validator'
export default defineComponent({
  setup(props, {emit}) {
    const form = reactive({
      username: '',
      pwd: ''
    })
    const isCorrect = ref(false)
    const rules = reactive({
      username: [{required: true, message: '请输入用户名', trigger: 'blur'}, {validator: RULES.username, message: "用户名应大于4小于8字符", trigger: ["change","blur"]}],
      pwd: [{required: true, message: '请输入密码', trigger: 'blur'}, {validator: RULES.username, message: "密码应大于6小于10字符", trigger: "change"}]
    })
    const labelPosition = ref('left')
    const login = () => {
      console.log('keycode login')
    }
    return {
      labelPosition,
      form,
      rules,
      login
    }
  }
})
</script>

<style scoped></style>
