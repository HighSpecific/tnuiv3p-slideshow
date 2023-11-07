# 图鸟 UI vue3 uniapp Plugins - 幻灯片

![TuniaoUI vue3 uniapp](https://resource.tuniaokj.com/images/vue3/market/vue3-banner-min.jpg 'TuniaoUI vue3 uniapp')

[Tuniao UI vue3官方仓库](https://github.com/tuniaoTech/tuniaoui-rc-vue3-uniapp)

该组件一般用于展示图片。

## 组件安装

```bash
npm install tnuiv3p-tn-slideshow
```

## 组件位置

```typescript
import TnSlideShow from 'tnuiv3p-tn-slideshow/index.vue'
```

## 平台差异说明

| App(vue) | H5  | 微信小程序 | 支付宝小程序 |  ...   |
| :------: | :-: | :--------: | :----------: | :----: |
|    √     |  √  |     √      |      √       | 适配中 |

## 基础使用

- 将图片地址数组传入组件的`data`属性中即可。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const imageData = ref<string[]>([
  'https://resource.tuniaokj.com/images/avatar/xiong/x1.jpg',
  'https://resource.tuniaokj.com/images/avatar/xiong/x2.jpg',
  'https://resource.tuniaokj.com/images/avatar/xiong/x3.jpg',
  'https://resource.tuniaokj.com/images/avatar/xiong/x4.jpg',
  'https://resource.tuniaokj.com/images/avatar/xiong/x5.jpg',
])
</script>

<template>
  <view class="wrapper">
    <TnSlideShow :data="imageData" />
  </view>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
}
</style>
```

## API

### Props

| 属性名   | 说明                                              | 类型            | 默认值 | 可选值 |
| -------- | ------------------------------------------------- | --------------- | ------ | ------ |
| data     | 图片地址数据                                      | Array\<String\> | `[]`   | -      |
| width    | 容器的宽度，默认单位`rpx`，也可以传递指定单位的值 | String          | `100%` | -      |
| height   | 容器的高度，默认单位`rpx`，也可以传递指定单位的值 | String          | `100%` | -      |
| interval | 幻灯片切换间隔，单位ms                            | Number          | 4000   | -      |



### Emits

| 事件名 | 说明           | 类型                      |
| ------ | -------------- | ------------------------- |
| change | 幻灯片切换事件 | `(index: number) => void` |
| click  | 幻灯片点击事件 | `(index: number) => void` |
