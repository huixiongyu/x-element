# X-Element

## 安装

```node
npm i @versoon/x-element --save
```

## 开始使用

全局使用

```js
import XElement from '@versoon/x-element'
import '@versoon/x-element/dist/style.css'

import App from './App.vue'
createApp(App).use(XElement).mount('#app')
```

```vue
<template>
  <hx-button type="primary">点击</hx-button>
</template>
```

单个导入

```vue
<template>
  <Button loading></Button>
</template>
<script>
import { Button } from ' @versoon/x-element'
export default {
  components: { Button }
}
</script>
```
