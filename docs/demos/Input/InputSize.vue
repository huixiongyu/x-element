<script setup>
import { ref } from 'vue'
import Input from '@com/Input/Input.vue'
const test = ref('')
</script>
<template>
  <div>
    <div class="input-area">
      <Input v-model="test" placeholder="大的 Input" size="large"> </Input>
    </div>
    <div class="input-area">
      <Input v-model="test" placeholder="普通的 Input"> </Input>
    </div>
    <div class="input-area">
      <Input v-model="test" placeholder="小的 Input" size="small"> </Input>
    </div>
  </div>
</template>
<style scoped>
.input-area {
  margin-bottom: 20px;
}
</style>
