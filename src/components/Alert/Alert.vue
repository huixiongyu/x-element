<template>
  <Transition name="hx-alert-fade">
    <div
      class="hx-alert"
      v-if="visible"
      :class="{
        [`hx-alert__${type}`]: type,
        [`hx-alert__${effect}`]: effect
      }"
    >
      <div class="hx-alert__content">
        {{ content }}
        <span>
          <slot />
        </span>
      </div>
      <div class="hx-alert__close" v-if="closable">
        <Icon @click.stop="visible = false" icon="xmark" />
      </div>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { AlertProps, AlertEmits } from './types'

import Icon from '../Icon/Icon.vue'
defineOptions({
  name: 'HxAlert'
})

withDefaults(defineProps<AlertProps>(), {
  effect: 'light',
  closable: true
})
const emits = defineEmits<AlertEmits>()
const visible = ref(true)

const hideAlert = () => {
  visible.value = false
  emits('close')
}
defineExpose({
  hide: () => hideAlert()
})
</script>
