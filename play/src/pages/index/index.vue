<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import TnSlideShow from '../../packages/src/index.vue'

const imageData = ref<string[]>([])

onLoad(() => {
  setTimeout(() => {
    imageData.value = [
      'https://resource.tuniaokj.com/images/blogger/y11.jpg',
      'https://resource.tuniaokj.com/images/blogger/y22.jpg',
      'https://resource.tuniaokj.com/images/blogger/y33.jpg',
      'https://resource.tuniaokj.com/images/blogger/y44.jpg',
      'https://resource.tuniaokj.com/images/blogger/y55.jpg',
    ]
  }, 1500)
})
</script>

<template>
  <view class="content">
    <TnSlideShow :data="imageData" />
  </view>
</template>

<style lang="scss" scoped>
.content {
  width: 100vw;
  height: 100vh;
}
</style>
