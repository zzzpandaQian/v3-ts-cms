<template>
  <div>
      Typescript test
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup(){
        const a:string = '123'
        const b:string|number = 123
        const c = <string|number>123
    }                                                         
})
</script>

<style>

</style>