import ElButton from 'element-plus'
import ElForm from 'element-plus'
import ElFormItem from 'element-plus'
import ElInput from 'element-plus'
import ElMessage from 'element-plus'

import { App } from 'vue'

export default function initImport(app: App) {
  app.use(ElButton).use(ElMessage)
}
