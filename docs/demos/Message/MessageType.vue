<script setup>
import { createMessage } from '@com/Message/method'
import Button from '@com/Button/Button.vue'
const open = (type) => {
  createMessage({ message: 'hello world', type })
}
</script>
<template>
  <div class="basic block">
    <Button @click="open('info')"> Info </Button>
    <Button @click="open('success')" type="success"> Success </Button>
    <Button @click="open('warning')" type="warning"> warning </Button>
    <Button @click="open('danger')" type="danger"> Danger </Button>
  </div>
</template>
