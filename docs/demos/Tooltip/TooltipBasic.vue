<script setup>
import Tooltip from '@com/Tooltip/Tooltip.vue'
import Button from '@com/Button/Button.vue'
</script>
<template>
  <div class="basic block">
    <Tooltip content="hello tooltip">
      <Button> 激活 Tooltip </Button>
    </Tooltip>
  </div>
</template>
