<script setup>
import { h } from 'vue'
import { createMessage } from '@com/Message/method'
import Button from '@com/Button/Button.vue'
const open = () => {
  createMessage({ message: '好兄弟，别跑！' })
}
const openV = () => {
  createMessage({ message: h('b', '这是粗体') })
}
</script>
<template>
  <div class="basic block">
    <Button type="primary" @click="open"> 创建文本消息 </Button>
    <Button @click="openV"> 创建 VNode 的消息 </Button>
  </div>
</template>
