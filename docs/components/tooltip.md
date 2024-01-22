# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

使用 `content` 属性来决定 hover 时的提示信息。
<preview path="../demos/Tooltip/TooltipBasic.vue" />

## 不同位置

由 `placement` 属性决定展示效果： `placement`属性值为：[方向]-[对齐位置]；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为空。

<preview path="../demos/Tooltip/TooltipPlace.vue" />
## 触发方式
由 `trigger` 属性决定触发方式： `hover` | `click`, 默认为 `hover`
<preview path="../demos/Tooltip/TooltipTrigger.vue" />
## 更多内容的文字提示
展示多行文本或者是设置文本内容的格式

用具名插槽 `content`，替代tooltip中的`content`属性。
<preview path="../demos/Tooltip/TooltipContent.vue" />

## 手动触发

将 `manual` 属性设置为 `true` 即可， 然后可以使用实例上面的 `show` 和 `hide` 方法打开关闭下拉菜单。
<preview path="../demos/Tooltip/TooltipManual.vue" />

## APIs

### 属性

| 属性名称       | 描述                                             | 类型                                                             | 默认值  |
| -------------- | ------------------------------------------------ | ---------------------------------------------------------------- | ------- |
| content        | 显示的内容，也可被 `slot#content` 覆盖           | `string`                                                         | ''      |
| placement      | Tooltip 组件出现的位置                           |                                                                  | bottom  |
| popper-options | [popper.js](https://popper.js.org/docs/v2/) 参数 | `object` 请参考 [popper.js](https://popper.js.org/docs/v2/) 文档 | {}      |
| open-delay     | 在触发后多久显示内容，单位毫秒                   | `number`                                                         | 0       |
| close-delay    | 离开区域多久关闭内容，单位毫秒                   | `number`                                                         | 200     |
| trigger        | 如何触发 Tooltip                                 | `enum`: `hover` \| `click`                                       | `hover` |
| manual         | 是否开启手动触发模式                             | `boolean`                                                        | false   |
| transition     | 过度动画名称                                     | `string`                                                         | ''      |

### 事件

| 名称           | 描述                              | 类型      |
| -------------- | --------------------------------- | --------- |
| visible-change | 当 tooltip 展示/隐藏时被触发      | `boolean` |
| click-outside  | 当点击到 Tooltip 外侧区域时被触发 | `boolean` |

### 插槽

| 名称    | 类型                      |
| ------- | ------------------------- |
| default | Tooltip 触发 & 引用的元素 |
| content | 自定义内容                |

### 实例

| 名称 | 描述 | 类型                                  |
| ---- | ---- | ------------------------------------- |
| show | 关闭 | `(event?: Event\| undefined) => void` |
| hide | 隐藏 | `(event?: Event\|undefined) => void`  |
