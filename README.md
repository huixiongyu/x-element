# x-element Vue3组件库

安装

```
npm i @huixiong/x-element --save
```

[立即使用](https://element.hackslog.com/beginning.html) :boom:

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

## 为何写组件

软件开发有条原则叫`“Don't Repeat Yourself”`，可以直译成 _“不要重复造轮子”_ ，这个原则讲的是不要依赖复制粘贴去写代码，而是做抽象、集成、封装或组合等方式来减少重复代码和冗余逻辑，这样对软件可维护性非常重要。不过对于开发工程师的成长，重复造轮子去理解这些优秀轮子的构造逻辑却是一条捷径，学习的路上应该多多造轮子，分解、模仿、改进能够深入理解Vue或React的使用，对于组件库的深入理解更加能够提高工作效率。

本项目模仿`element-plus`，并且会参考如`iView`、`Antd Vue`、`Arco Vue`等业界的优秀轮子学习每个组件的组成。组件会涉及很多复杂的逻辑处理，把组件分解成各个需求才能变成我们能够看得懂的代码，所以文档的作用就是组件教程，稍后我会完善，并认真做好单元测试。

种一棵树最好是十年前，其次是现在。成长吧！ :rocket:
