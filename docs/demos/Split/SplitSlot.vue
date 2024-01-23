<script setup>
import Split from '@com/Split/Split.vue'
</script>
<template>
  <div class="split-wrapper">
    <Split>
      <template #left> vue </template>
      <template #right> react </template>
    </Split>
  </div>
</template>
<style>
.split-wrapper {
  width: 600px;
  height: 400px;
  border: 1px solid #3451b2;
}
</style>
