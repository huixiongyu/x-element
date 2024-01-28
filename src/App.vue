<script setup lang="ts">
import { ref } from 'vue'
const value = ref(new Date())
import Calendar from './components/Calendar'
const onChange = (val: { date: Date; type: string }) => {
  console.log(val)
}
const options = {
  width: '100%',
  height: '680px'
}
</script>

<template>
  <div>
    <calendar v-model="value" :first-day="0" :options="options" @on-change="onChange" />
  </div>
</template>

<style scoped></style>
