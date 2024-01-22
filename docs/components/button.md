---
title: Button
description: Button组件库
---

## Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

<preview path="../demos/Button/ButtonBasic.vue"></preview>

## 禁用状态

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。
<preview path="../demos/Button/ButtonDisable.vue"></preview>

## 按钮组

使用 `icon` 属性来为按钮添加图标。
图标名称请看 `fontawesome` 官网 https://fontawesome.com/icons
<preview path="../demos/Button/ButtonIcon.vue"></preview>

## 加载状态按钮

通过设置 `loading` 属性为 `true` 来显示正在加载的状态。
<preview path="../demos/Button/ButtonLoading.vue"></preview>

## 不同大小的按钮

通过设置 size 属性为 `small` | `large` 来调整图标的大小。
<preview path="../demos/Button/ButtonSize.vue"></preview>

## Attributes

| 性名称   | 描述             | 类型                                                          | 默认值 |
| -------- | ---------------- | ------------------------------------------------------------- | ------ |
| size     | 尺寸             | `enum`：`large` 、`small`                                     | --     |
| type     | 类型             | `enum`: `primary`、 `success`、 `warning` 、`danger` 、`info` | ---    |
| plain    | 是否为朴素按钮   | `boolean`                                                     | false  |
| round    | 是否为圆角按钮   | `boolean`                                                     | false  |
| circle   | 是否为圆形按钮   | `boolean`                                                     | false  |
| loading  | 是否为加载状态中 | `boolean`                                                     | false  |
| disabled | 是否为禁用状态   | `boolean`                                                     | false  |
