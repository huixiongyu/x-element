<template>
  <Calendar :first-day="0" :options="options">
    <template #date-cell="{ data }">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split('-').slice(1).join('-') }}
        {{ data.isSelected ? '😁' : '' }}
      </p>
    </template>
  </Calendar>
</template>
<script setup lang="ts">
import Calendar from '@com/Calendar/Calendar.vue'
const options = {
  height: '680px'
}
</script>
