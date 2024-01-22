<script setup>
import Button from '@com/Button/Button.vue'
</script>
<template>
  <div class="block default">
    <Button disabled>Default</Button>
    <Button disabled type="primary">Primary</Button>
    <Button disabled type="success">Success</Button>
    <Button disabled type="info">Info</Button>
    <Button disabled type="warning">Warning</Button>
    <Button disabled type="danger">Danger</Button>
  </div>
  <div class="block default">
    <Button disabled plain>Default</Button>
    <Button disabled type="primary" plain>Primary</Button>
    <Button disabled type="success" plain>Success</Button>
    <Button disabled type="info" plain>Info</Button>
    <Button disabled type="warning" plain>Warning</Button>
    <Button disabled type="danger" plain>Danger</Button>
  </div>
</template>
<style>
.block {
  margin-bottom: 16px;
}
</style>
