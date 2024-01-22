<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Options } from '@popperjs/core'
import Tooltip from './components/Tooltip/Tooltip.vue'
import type { TooltipInstance } from './components/Tooltip/types'
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import Item from './components/Collapse/CollapseItem.vue'
import Icon from './components/Icon/Icon.vue'
import Dropdown from './components/Dropdown/Dropdown.vue'
import Message from './components/Message/Message.vue'
import type { MenuOption } from './components/Dropdown/types'
import type { ButtonInstance } from './components/Button/types'
import { createMessage } from './components/Message/method'
import Upload from '@/components/Upload/Upload.vue'

const buttonRef = ref<ButtonInstance | null>(null)
const tooltipRef = ref<TooltipInstance | null>(null)
const trigger = ref<any>('hover')
const options: Partial<Options> = { placement: 'right-end', strategy: 'fixed' }
const menuOptions: MenuOption[] = [
  { key: 1, label: 'item1' },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
]
const openedValue = ref(['a'])
const open = () => {
  tooltipRef.value?.show()
}
const close = () => {
  tooltipRef.value?.hide()
}
const beforeUpload = (file: File) => {
  const isJPG = file.type === 'image/jpeg'
  if (!isJPG) {
    createMessage({ message: '上传图片只能是JPG格式' })
  }
  return isJPG
}
onMounted(() => {
  // createMessage({ message: 'hello world', duration: 0 })
  // createMessage({ message: 'hello world ttrt', duration: 0 })
  // createMessage({ message: 'hello world sds', duration: 0 })
  if (buttonRef.value) {
    console.log('button Ref', buttonRef.value.ref)
  }
})
</script>

<template>
  <div style="width: 125px">
    <Tooltip
      placement="right"
      :trigger="trigger"
      :popper-options="options"
      :open-delay="1000"
      :close-delay="1000"
    >
      <img
        style="width: 125px; height: 125px"
        src="./assets/logo.svg"
        alt="Vue logo"
        width="125"
        height="125"
      />
      <template #content>
        <h1>Hello tooltip</h1>
      </template>
    </Tooltip>
  </div>
  <Message message="hello message" :duration="0" show-close />
  <Dropdown :menu-options="menuOptions">ddd</Dropdown>
  <hr />
  <header>
    <Button type="primary" plain ref="buttonRef">Test Button</Button>
    <Button plain>Test Button</Button>
    <Button type="warning" round @click="open">打开</Button>
    <Button circle @click="close">关</Button>
    <Button type="danger" disabled>disabled Button</Button>
  </header>
  <hr />

  <Collapse v-model="openedValue">
    <Item name="a">
      <template #title>
        <h1>nice title</h1>
      </template>
      <h1>headline title</h1>
      <div>this is content a sss</div>
    </Item>
    <Item name="b" title="nice title b item b">
      <div>this is bbbv test</div>
    </Item>
    <Item name="c" title="nice cccc" disabled>
      <div>this is cccc test</div>
    </Item>
  </Collapse>
  <Icon icon="arrow-up" size="2xl" type="danger" color="#0e7a0d" />

  <br />
  <br />
  <Button size="large" loading>Button</Button>
  <Button size="large" icon="arrow-up">Icon</Button>
  <br />
  <Upload />
</template>

<style scoped></style>
