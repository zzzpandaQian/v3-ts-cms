<template>
  <div>
    <el-form :label-position="labelPosition" ref="uForm" :rules="rules" label-width="80px" :model="form">
      <el-form-item label="手机号" required prop="phone" >
        <el-input v-model="form.phone" type="tel" />
      </el-form-item>
      <el-form-item label="验证码" label-width="80px" required prop="code">
        <div class="d-flex row-center">
          <el-input v-model="form.code" />
          <div class="p-l-1">
            <el-button type="primary" :loaing="getCode"  size="small">获取验证码</el-button>
          </div>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import {RULES} from '@/common/validator'

export default defineComponent({
  setup() {
    const form = reactive({
      phone: '',
      code: ''
    })
    const getCode = ref(false)
    const labelPosition = ref('left')
    const rules = reactive({
      phone: [{required:true, message: '请输入手机号'},{validator: RULES.phoneValid, message: '请输入正确的手机号', trigger:'change'}],
      code: [{required:true, message: '请输入验证码'}]
    })
    return {
      labelPosition,
      form,
      rules,
      getCode
    }
  }
})
</script>

<style scoped>

</style>
