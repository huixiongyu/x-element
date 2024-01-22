<script setup>
import { ref } from 'vue'
import Switch from '@com/Switch/Switch.vue'
const test = ref(false)
</script>
<template>
  <div class="switch-size-container">
    <Switch v-model="test" size="small" />
    <Switch v-model="test" />
    <Switch v-model="test" size="large" />
  </div>
</template>
<style scoped>
.switch-size-container {
  display: flex;
  align-items: center;
  .hx-switch {
    margin-right: 10px;
  }
}
</style>
