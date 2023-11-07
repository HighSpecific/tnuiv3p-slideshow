import { withNoopInstall } from '@tuniao/tnui-vue3-uniapp/utils'
import SlideShow from './index.vue'

export const TnSlideShow = withNoopInstall(SlideShow)
export default TnSlideShow

export * from './types'
export type { TnSlideShowInstance } from './instance'
