import { defineStore } from 'pinia'

export default defineStore('index', {
  state: () => {
    return {
      count: 0
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  },
  actions: {
    add() {
      // 这里的this是state，有点类似vue2的data，通过this调用data的参数
      // 在外界可直接通过store.add()来调用
      this.count++
      console.log('this.count', this.count)
    }
  }
})
