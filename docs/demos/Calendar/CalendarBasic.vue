<template>
  <div>
    <p>以星期日开头</p>
    <Calendar v-model="value" :first-day="0" :options="options" @on-change="onChange" />
    <br />
    <br />
    <p>以星期一开头</p>
    <Calendar v-model="value2" :first-day="1" :options="options" @on-change="onChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Calendar from '@com/Calendar/Calendar.vue'
const value = ref(new Date())
const value2 = ref(new Date())

const options = {
  width: '100%',
  height: '680px'
}

const onChange = (val: { date: Date; type: string }) => {
  console.log(val)
}
</script>
