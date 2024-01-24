import type { App } from 'vue'
import Calendar from '@/components/Calendar/Calendar.vue'

Calendar.install = (app: App) => {
  app.component(Calendar.name!, Calendar)
}

export default Calendar

export * from './types'
