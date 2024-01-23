<template>
  <div class="split-wrapper">
    <Split v-model="triggerPosition" :max="1" mode="vertical" @onMoveEnd="handleMoveEnd"></Split>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Split from '@com/Split/Split.vue'
const triggerPosition = ref(0.3)
const handleMoveEnd = () => {
  console.log('end')
}
</script>
<style>
.split-wrapper {
  width: 600px;
  height: 400px;
  border: 1px solid #3451b2;
}
</style>
