# Switch开关

## 基础用法

绑定 v-model 到一个 Boolean 类型的变量。 可以使用 `--hx-switch-on-color` 属性与 `--hx-switch-off-color` 属性来设置开关的背景色。
<preview path="../demos/Switch/SwitchBasic.vue"></preview>

## 禁用状态

设置 `disabled` 属性，接受一个 boolean，设置true即可禁用。
<preview path="../demos/Switch/SwitchDisable.vue"></preview>

## 不同尺寸

设置 `size` 属性，接受`large` / `small`，呈现不同的尺寸。
<preview path="../demos/Switch/SwitchSize.vue"></preview>

## 支持自定义 value 类型

你可以设置 `active-value` 和 `inactive-value` 属性， 它们接受 `boolean` | `string` | `number` 类型的值。
<preview path="../demos/Switch/SwitchActiveValue.vue"></preview>

## 文字描述

使用 `active-text` 属性与 `inactive-text` 属性来设置开关的文字描述。
<preview path="../demos/Switch/SwitchActiveText.vue"></preview>

## APIs

### 属性

| 名称           | 描述             | 类型                             | 默认值 |
| -------------- | ---------------- | -------------------------------- | ------ |
| v-model        | 绑定值           | `string`\| `boolean` \| `number` | false  |
| disabled       | 是否禁用         | boolean                          | false  |
| active-text    | 打开时的文字描述 | `string`                         |        |
| inactive-text  | 关闭时的文字描述 | `string`                         |        |
| acitve-value   | 状态为on的值     | `string`\|`boolean` \|`number`   | true   |
| inactive-value | 状态为off的值    | `string`\|`boolean` \|`number`   | false  |
| name           | 对应的name值     | `string`                         |        |
| id             | input的id        | `string`                         |        |

### 事件

| 名称   | 描述               | 类型                                              |
| ------ | ------------------ | ------------------------------------------------- |
| change | 状态发生变化的回调 | `(e: 'string' \| 'boolean' \| 'number' ) => void` |
