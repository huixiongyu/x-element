<script setup>
import { ref } from 'vue'
import Input from '@com/Input/Input.vue'
import Icon from '@com/Icon/Icon.vue'
const test = ref('')
</script>
<template>
  <div class="input-area">
    <Input v-model="test" placeholder="prepend append">
      <template #prepend>Https://</template>
      <template #append>.com</template>
    </Input>
  </div>
  <div class="input-area">
    <Input v-model="test" placeholder="prefix suffix">
      <template #prefix>
        <Icon icon="fa-user" />
      </template>
      <template #suffix>
        <Icon icon="fa-user" />
      </template>
    </Input>
  </div>
</template>
<style scoped>
.input-area {
  margin-bottom: 20px;
}
</style>
