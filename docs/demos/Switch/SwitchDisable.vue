<script setup>
import { ref } from 'vue'
import Switch from '@com/Switch/Switch.vue'
const test = ref(false)
const test2 = ref(false)
</script>
<template>
  正常：<Switch v-model="test" /> <br />
  禁用：<Switch v-model="test2" disabled />
</template>
