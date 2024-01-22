<script setup>
import { createNotification } from '@com/Notification/method'
import Button from '@com/Button/Button.vue'
const open = () => {
  createNotification({ title: 'this is the title', message: 'hello world', icon: 'star' })
}
</script>
<template>
  <div class="basic block">
    <Button type="primary" @click="open"> 创建一条带图标的通知 </Button>
  </div>
</template>
