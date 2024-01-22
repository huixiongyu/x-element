<script setup>
import { createNotification } from '@com/Notification/method'
import Button from '@com/Button/Button.vue'
const open = (type) => {
  createNotification({ title: 'this is the title', message: 'hello world', type })
}
</script>
<template>
  <div class="basic block">
    <Button @click="open('success')" type="success"> Success </Button>
    <Button @click="open('info')" type="info"> Info </Button>
    <Button @click="open('warning')" type="warning"> warning </Button>
    <Button @click="open('danger')" type="danger"> Danger </Button>
  </div>
</template>
