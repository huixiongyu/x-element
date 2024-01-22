# 下拉菜单

将动作或菜单折叠到下拉菜单中。

## 基础用法

悬停在下拉菜单上以展开更多操作。
<preview path="../demos/Dropdown/DropdownBasic.vue"></preview>

## 触发方式

可以配置点击激活或者悬停激活。
将 trigger 属性设置为 `click` 即可， 默认为 `hover`。
<preview path="../demos/Dropdown/DropdownTrigger.vue"></preview>

## 手动打开关闭

将 `manual` 属性设置为 true 即可， 然后可以使用实例上面的 `show` 和 `hide` 方法打开关闭下拉菜单。
<preview path="../demos/Dropdown/DropdownManual.vue"></preview>

## APIs

### 属性

| 属性           | 描述                     | 类型                                                                                                                                                   | 默认值   |
| -------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| menuOptions    | 选项                     | MenuOption，见下方                                                                                                                                     | []       |
| placement      | 菜单位置                 | 'top' \|'top-start' \|'top-end' \|'bottom' \|'bottom-start' \|'bottom-end' \|'left' \|'left-start' \|'left-end' \|'right' \|'right-start \|'right-end' | `bottom` |
| popper-options | popper参数               | 参考[popper文档](https://popper.js.org/docs/v2/)                                                                                                       | {}       |
| open-delay     | 打开的延迟毫秒数         | `number`                                                                                                                                               | 0        |
| close-delay    | 关闭的延迟毫秒数         | `number`                                                                                                                                               | 200      |
| trigger        | 触发方式                 | enum: `hover`\| `click`                                                                                                                                | `hover`  |
| manual         | 是否开启手动触发模式     | `boolean`                                                                                                                                              | false    |
| transition     | 过渡动画名称             | `string`                                                                                                                                               | ''       |
| hideAfterClick | 点击以后是否自动隐藏菜单 | `boolean`                                                                                                                                              | true     |

### MenuOption

| 名称     | 描述           | 类型                 | 默认值 |
| -------- | -------------- | -------------------- | ------ |
| label    | 菜单展示标签   | 'string' \|'vNode'   |        |
| key      | 菜单选项 Key   | 'string' \| 'number' |        |
| disabled | 是否禁用       | `boolean`            | false  |
| divided  | 是否显示分隔符 | `boolean`            | false  |

### 事件

| 名称           | 描述                           | 类型         |
| -------------- | ------------------------------ | ------------ |
| visible-change | 当 tooltip 展示/隐藏时被触发   | `boolean`    |
| select         | 当选择到某一个选项的时候被触发 | `MenuOption` |

### 实例

| 名称 | 描述         | 类型                                   |
| ---- | ------------ | -------------------------------------- |
| show | 暴露展示方法 | `(event?: Event \| undefined) => void` |
| hide | 暴露隐藏方法 | `(event?: Event \|undefined) => void`  |
