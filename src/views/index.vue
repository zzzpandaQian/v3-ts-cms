<template>
  <div>
    hello world
    <el-button type="success" @click="add">+1</el-button>
    <el-button type="success" @click="addByStoreToRefs">+1 解构</el-button>
    <el-button type="success" @click="addByPatch">+1 $patch</el-button>
    <el-button type="success" @click="addByActions">+1 通过actions</el-button>
    <el-button type="success" @click="addState">向state添加数据</el-button>
    <el-button type="success" @click="replaceState">替换整个state</el-button>
    <el-button type="success" @click="resetState">重置state</el-button>
    <el-button type="success" @click="subscribe">监听指定的store</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import createStore from '@/store/index'
import { storeToRefs } from 'pinia'
import api from '@/common'

export default defineComponent({
  name: 'home',
  setup() {
    const store = createStore()
    console.log(store.count)
    function add() {
      store.count++
      console.log('store.count', store.count)
    }
    function addByStoreToRefs() {
      const { count } = storeToRefs(store)
      count.value++
      console.log('解构', count.value)
    }
    function addByPatch() {
      // $patch和直接store.count区别在于若执行多条命令只会渲染最终结果，而store.count和其他修改会造成多次重新渲染
      store.$patch((state) => {
        state.count++
        // 或者store.count ++
        console.log('store.count', store.count)
      })
    }
    function addState() {
      // store.state.count ++
      store.$state.count++
      console.log('store.$state.count', store.$state.count)
    }
    function addByActions() {
      store.add()
      console.log(store.doubleCount)
    }
    function resetState() {
      // 将state还原成默认
      store.$reset()
      console.log(store.$state)
    }
    function replaceState() {
      store.$state = {
        count: 0
      }
      console.log(store.count)
    }
    function subscribe() {
      // 当触发变动时候会调用
      store.$subscribe((mutation, state) => {
        console.log(mutation, state)
      })
    }

    // getters不在通过store.$getters.doubleCount调用而是直接通过store.doubleCount
    console.log(store.doubleCount)
    api.request({
      url: '/customs/test',
      // showload: false,
      interceptors: {
        reuqestInterceptor: (config) => {
          console.log('个体interceptor')
          return config
        },
        responseInterceptor: (response) => {
          console.log('个体responseInterceptor')
          return response
        }
      }
    })
    return {
      addByStoreToRefs,
      addByPatch,
      resetState,
      addByActions,
      addState,
      subscribe,
      replaceState
    }
  }
})
</script>

<style scoped></style>
