<script setup>
import Button from '@com/Button/Button.vue'
import Icon from '@com/Icon/Icon.vue'
</script>
<template>
  <div class="block default">
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
  </div>
  <div class="block default">
    <Button plain>Default</Button>
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button>
  </div>
  <div class="block round">
    <Button round>Round</Button>
    <Button type="primary" round>Primary</Button>
    <Button type="success" round>Success</Button>
    <Button type="info" round>Info</Button>
    <Button type="warning" round>Warning</Button>
    <Button type="danger" round>Danger</Button>
  </div>
  <div class="block circle">
    <Button circle> <Icon icon="star" /> </Button>
    <Button type="primary" circle> <Icon icon="sack-dollar" /> </Button>
    <Button type="success" circle> <Icon icon="sack-dollar" /> </Button>
    <Button type="warning" circle> <Icon icon="sack-dollar" /> </Button>
    <Button type="danger" circle> <Icon icon="sack-dollar" /> </Button>
    <Button type="info" circle> <Icon icon="sack-dollar" /> </Button>
  </div>
</template>
<style>
.block {
  margin-bottom: 16px;
}
</style>
