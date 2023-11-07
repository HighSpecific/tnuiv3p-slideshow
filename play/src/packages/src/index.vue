<script lang="ts" setup>
import { slideshowEmits, slideshowProps } from './types'
import { useSlideShow, useSlideshowCustomStyle } from './composables'

const props = defineProps(slideshowProps)
const emits = defineEmits(slideshowEmits)

const { currentActiveIndex, imageCount, clickHandle } = useSlideShow(
  props,
  emits
)
const { containerClass, containerStyle, imageClass, imageStyle } =
  useSlideshowCustomStyle(props, imageCount, currentActiveIndex)
</script>

<template>
  <view :class="[containerClass]" :style="containerStyle">
    <image
      v-for="(item, index) in props.data"
      :key="index"
      :class="[imageClass(index)]"
      :style="imageStyle(index)"
      :src="item"
      mode="aspectFill"
      @tap.stop="clickHandle(index)"
    />
  </view>
</template>

<style lang="scss" scoped>
@import './theme-chalk/index.scss';
</style>
