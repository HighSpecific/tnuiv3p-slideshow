import {
  buildProps,
  definePropType,
  isNumber,
} from '@tuniao/tnui-vue3-uniapp/utils'

import type { ExtractPropTypes } from 'vue'

export const slideshowProps = buildProps({
  /**
   * @description 幻灯片图片数据
   */
  data: {
    type: definePropType<string[]>(Array),
    required: true,
    default: () => [],
  },
  /**
   * @description 幻灯片高度, 默认单位rpx
   */
  height: {
    type: String,
    default: '100%',
  },
  /**
   * @description 幻灯片宽度, 默认单位rpx
   */
  width: {
    type: String,
    default: '100%',
  },
  /**
   * @description 幻灯片间隔时间, 单位ms
   */
  interval: {
    type: Number,
    default: 4000,
  },
})

export const slideshowEmits = {
  /**
   * @description 幻灯片切换事件
   */
  change: (index: number) => isNumber(index),
  /**
   * @description 幻灯片点击事件
   */
  click: (index: number) => isNumber(index),
}

export type SlideshowProps = ExtractPropTypes<typeof slideshowProps>
export type SlideshowEmits = typeof slideshowEmits
