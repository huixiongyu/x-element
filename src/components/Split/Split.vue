<template>
  <div ref="splitWrapperRef" class="hx-split-pane">
    <div class="hx-split-inner-wrapper hx-split-inner-horizontal-wrapper" v-if="isHorizontal">
      <div class="hx-split-pane-left" :style="{ width: offsetPercent }">
        <slot name="left" />
      </div>
      <div
        class="hx-split-pane-trigger"
        :style="{ left: triggerPosition, width: triggerWidth, height: '100%' }"
        @mousedown="handleMousedown"
      ></div>
      <div class="hx-split-pane-right" :style="{ width: rightOrBottomPanePercent }">
        <slot name="right" />
      </div>
    </div>
    <div class="hx-split-inner-wrapper" v-else>
      <div class="hx-split-pane-top" :style="{ height: offsetPercent }">
        <slot name="top" />
      </div>
      <div
        class="hx-split-pane-trigger hx-trigger-vertical"
        :style="{ top: triggerPosition, height: triggerWidth }"
        @mousedown="handleMousedown"
      ></div>
      <div class="hx-split-pane-bottom" :style="{ height: rightOrBottomPanePercent }">
        <slot name="bottom" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, nextTick, computed } from 'vue'
import type { SplitProps, SplitEmits } from './types'
defineOptions({
  name: 'HxSplit'
})
const props = withDefaults(defineProps<SplitProps>(), {
  modelValue: 0.5,
  mode: 'horizontal',
  thickness: 4,
  min: 0.1,
  max: 0.9
})
const emits = defineEmits<SplitEmits>()
const splitWrapperRef = ref<HTMLDivElement | null>(null)
const isMoving = ref(false)
const offsetPosition = ref(props.modelValue)
const triggerThickness = ref(props.thickness)
const isHorizontal = computed(() => props.mode === 'horizontal')
const offsetPercent = computed(() => `${offsetPosition.value * 100}%`)
const rightOrBottomPanePercent = computed(() => `${(1 - offsetPosition.value) * 100}%`)
const triggerPosition = computed(
  () => `calc(${offsetPosition.value * 100}% - ${props.thickness}px)`
)
const triggerWidth = computed(() => `${triggerThickness.value}px`)
const handleMousemove = (e: MouseEvent) => {
  if (!isMoving.value) {
    return
  }
  nextTick(() => {
    if (splitWrapperRef.value) {
      const rect = splitWrapperRef.value.getBoundingClientRect()
      const percent = isHorizontal.value
        ? (e.clientX + props.thickness / 2 - rect.left) / rect.width
        : (e.clientY + props.thickness / 2 - rect.top) / rect.height
      if (percent < props.min) offsetPosition.value = props.min
      else if (percent > props.max) offsetPosition.value = props.max
      else offsetPosition.value = percent
      emits('update:modelValue', offsetPosition.value)
    }
  })
}
const handleMouseup = () => {
  document.removeEventListener('mousemove', handleMousemove)
  document.removeEventListener('mouseup', handleMouseup)
  emits('on-move-end')
  isMoving.value = false
}
const handleMousedown = () => {
  document.addEventListener('mousemove', handleMousemove)
  document.addEventListener('mouseup', handleMouseup)
  emits('on-move-start')
  isMoving.value = true
}
</script>
