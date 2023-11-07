import { computed } from 'vue'
import { useNamespace } from '@tuniao/tnui-vue3-uniapp/hooks'
import { formatDomSizeValue } from '@tuniao/tnui-vue3-uniapp/utils'
import type { CSSProperties, Ref } from 'vue'
import type { SlideshowProps } from '../types'

type ImageClass = (index: number) => string
type ImageStyle = (index: number) => CSSProperties

export const useSlideshowCustomStyle = (
  props: SlideshowProps,
  imageCount: Ref<number>,
  activeIndex: Ref<number>
) => {
  const ns = useNamespace('slideshow')

  // 容器的类和样式
  const containerClass = computed<string>(() => {
    const cls: string[] = [ns.b()]

    return cls.join(' ')
  })
  const containerStyle = computed<CSSProperties>(() => {
    const style: CSSProperties = {}

    if (props.width) {
      style.width = formatDomSizeValue(props.width)
    }
    if (props.height) {
      style.height = formatDomSizeValue(props.height)
    }

    return style
  })

  // 图片的类和样式
  const imageClass = computed<ImageClass>(() => {
    return (index: number) => {
      const cls: string[] = [ns.e('image')]

      // 上一张图片，添加fade-out类
      if (
        activeIndex.value - 1 < 0
          ? index === imageCount.value - 1
          : index === activeIndex.value - 1
      )
        cls.push(ns.em('image', 'fade-out'))
      // 当前激活的图片，添加fade-in类
      if (index === activeIndex.value) cls.push(ns.em('image', 'fade-in'))

      return cls.join(' ')
    }
  })
  const imageStyle = computed<ImageStyle>(() => {
    return (index: number) => {
      const style: CSSProperties = {}

      style.transitionDuration = `${props.interval || 5000}ms`

      style.zIndex = imageCount.value - index
      return style
    }
  })

  return {
    ns,
    containerClass,
    containerStyle,
    imageClass,
    imageStyle,
  }
}
