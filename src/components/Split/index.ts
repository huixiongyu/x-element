import type { App } from 'vue'
import Split from '@/components/Split/Split.vue'

Split.install = (app: App) => {
  app.component(Split.name!, Split)
}

export default Split

export * from './types'
