# Split 分割面板

可将一片区域，分割为可以拖拽调整宽度或高度的两部分区域。

## 基础用法

外层的 DOM 需要指定高度和宽度，组件默认充满外层容器

使用`v-model`双向绑定数据反应分割线所在的百分比，`mode`设置面板水平和垂直分割。

## 默认水平分割

<preview path="../demos/Split/SplitBasic.vue" />
### 垂直分割
<preview path="../demos/Split/SplitVertical.vue" />
## 插槽

`mode`为默认值`horizontal` 水平分割时，具名插槽分别为`left`和`right`；

`mode`为默认值`vertical` 水平分割时，具名插槽分别为`top`和`bottom`；

---

## APIs

### 属性

| 属性名  | 说明                             | 类型     | 可选值               | 默认值     |
| ------- | -------------------------------- | -------- | -------------------- | ---------- |
| v-model | 分割线位于面板百分比             | `number` | 0~1                  | 0.5        |
| mode    | 水平或者垂直分割                 | `string` | horizontal, vertical | horizontal |
| min     | 限制左边或者上边面板的最小百分比 | `number` | 0~1                  | 0.1        |
| max     | 限制左边或者上边面板的最大百分比 | `number` | 0~1                  | 0.9        |

### 具名插槽

| 名称   | 说明                                    |
| :----- | :-------------------------------------- |
| left   | mode 为 horizontal 时可用，位于左边面板 |
| right  | mode 为 horizontal 时可用，位于右边面板 |
| top    | mode 为 vertical 时可用，位于上边面板   |
| bottom | mode 为 vertical 时可用，位于下边面板   |

### 事件

| 方法名      |      说明      | 参数 |
| ----------- | :------------: | ---- |
| onMoveStart | 拖动开始时触发 | 无   |
| onMoveEnd   | 拖动结束时触发 | 无   |
