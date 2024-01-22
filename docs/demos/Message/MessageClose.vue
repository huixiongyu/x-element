<script setup>
import { createMessage } from '@com/Message/method'
import Button from '@com/Button/Button.vue'
const open = () => {
  createMessage({ message: 'hello world', showClose: true, duration: 0 })
}
</script>
<template>
  <div class="basic block">
    <Button @click="open"> 可关闭消息 </Button>
  </div>
</template>
