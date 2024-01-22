<template>
  <button
    ref="_ref"
    class="hx-button"
    :class="{
      [`hx-button--${type}`]: type,
      [`hx-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <Icon icon="spinner" spin v-if="loading" />
    <Icon :icon="icon" v-if="icon" />
    <span><slot></slot></span>
  </button>
</template>
<style></style>
<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types' // 导入的是type，需要多加一个type标记
import Icon from '../Icon/Icon.vue'
defineOptions({
  name: 'HxButton'
})
withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})
const _ref = ref<HTMLButtonElement>()
defineExpose({
  ref: _ref
})
</script>
