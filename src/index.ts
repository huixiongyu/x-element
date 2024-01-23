import type { App } from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button from '@/components/Button'
import Collapse, { CollapseItem } from '@/components/Collapse'
import Dropdown from '@/components/Dropdown'
import Form, { FormItem } from '@/components/Form'
import Icon from '@/components/Icon'
import Message, { createMessage, closeAll as closeMessageAll } from '@/components/Message'
import Input from '@/components/Input'
import Select from '@/components/Select'
import Switch from '@/components/Switch'
import Tooltip from '@/components/Tooltip'
import Alert from '@/components/Alert'
import Notification from '@/components/Notification'
import Split from '@/components/Split'

import './styles/index.css'

library.add(fas)

const components = [
  Button,
  Collapse,
  CollapseItem,
  Dropdown,
  Form,
  FormItem,
  Icon,
  Message,
  Input,
  Select,
  Switch,
  Tooltip,
  Alert,
  Notification,
  Split
]

const install = (app: App) => {
  components.forEach((compoment) => {
    app.component(compoment.name!, compoment)
  })
}

export {
  install,
  Button,
  Collapse,
  CollapseItem,
  Dropdown,
  Form,
  FormItem,
  Icon,
  Message,
  Input,
  Select,
  Switch,
  Tooltip,
  createMessage,
  closeMessageAll,
  Split
}

export default {
  install
}
