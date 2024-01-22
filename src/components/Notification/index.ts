import Notification from '@/components/Notification/Notification.vue'
import { createNotification, closeAll } from '@/components/Notification/method'
Notification.install = (app: any) => {
  app.component(Notification.name, Notification)
}

export default Notification
export { createNotification, closeAll }
export * from './types'
