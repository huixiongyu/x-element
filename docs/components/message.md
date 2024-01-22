# Message 消息提示

## 基础用法

从顶部出现，3秒后自动消息。createMessage方法可以接收一个字符串或者一个VNode作为参数显示在消息框中。
<preview path="../demos/Message/MessageBasic.vue"></preview>

## 不同的状态

设置`type` 为不同消息的状态，默认是`info`，还有`success`、`warning`和`danger`可选。
<preview path="../demos/Message/MessageType.vue"></preview>

## 可关闭的提示

如果想关闭提示消息，可以把`showClose`设置为true。
`duration`默认值为3000，即自动关闭时间为3000毫秒以后，设置为0消息不回自动关闭。
<preview path="../demos/Message/MessageClose.vue"></preview>

## 手动关闭所有实例

message提供暴露的方法`closeAll`可以一次关闭所有的提示消息。
<preview path="../demos/Message/MessageCloseall.vue"></preview>

## APIs

### 配置项

| 名称      | 描述                            | 类型                                         | 默认值 |
| --------- | ------------------------------- | -------------------------------------------- | ------ |
| message   | 消息文字                        | `string` \| `VNode`                          |        |
| type      | 消息类型                        | `info` \| `success` \| `warning` \| `danger` | `info` |
| showClose | 是否显示关闭按钮                | `boolean`                                    | false  |
| duration  | 显示时间，单位毫秒，0表示不关闭 | `number`                                     | 3000   |

### 方法

| 名称     | 描述               | 类型         |
| -------- | ------------------ | ------------ |
| close    | 关闭当前的消息     | `() => void` |
| closeAll | 关闭当前所有的消息 | `() => void` |
