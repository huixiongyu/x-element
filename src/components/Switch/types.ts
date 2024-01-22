export type SwitchValueType = boolean | string | number

export interface SwitchProps {
  modelValue: boolean
  disabled?: boolean
  activeText?: string
  activeValue?: SwitchValueType
  inactiveValue?: SwitchValueType
  inactiveText?: string
  name?: string
  id?: string
  size?: 'small' | 'large'
}

export interface SwitchEmits {
  (e: 'change', value: SwitchValueType): void
  (e: 'update:modelValue', value: SwitchValueType): void
}
