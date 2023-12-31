import { computed, ref, watch } from 'vue'
import type { SetupContext } from 'vue'
import type { SlideshowEmits, SlideshowProps } from '../types'

export const useSlideShow = (
  props: SlideshowProps,
  emits: SetupContext<SlideshowEmits>['emit']
) => {
  let fadeIntervalTimer: ReturnType<typeof setInterval> | null = null

  // 图片总数
  const imageCount = computed<number>(() => props?.data?.length || 0)
  // 当前激活图片索引
  const currentActiveIndex = ref(0)

  // 图片点击事件
  const clickHandle = (index: number) => {
    emits('click', index)
  }

  // 切换到下一张图片
  const _next = () => {
    currentActiveIndex.value = (currentActiveIndex.value + 1) % imageCount.value
    emits('change', currentActiveIndex.value)
  }

  // 关闭定时器
  const _closeFadeInterval = () => {
    if (fadeIntervalTimer) {
      clearInterval(fadeIntervalTimer)
      fadeIntervalTimer = null
    }
  }

  watch(
    () => props.data,
    () => {
      if (!props.data || props.data.length === 0) return
      _closeFadeInterval()
      setTimeout(() => {
        _next()
      }, 0)
      fadeIntervalTimer = setInterval(() => {
        _next()
      }, props.interval || 5000)
    },
    {
      immediate: true,
      deep: true,
    }
  )

  return {
    imageCount,
    currentActiveIndex,
    clickHandle,
  }
}
