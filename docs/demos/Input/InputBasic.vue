<script setup>
import { ref } from 'vue'
import Input from '@com/Input/Input.vue'
const test = ref('')
</script>
<template>
  <Input v-model="test" placeholder="基础文本框，请输入" />
  <span>{{ test }}</span>
</template>
