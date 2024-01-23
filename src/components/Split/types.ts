export interface SplitProps {
  modelValue: number
  mode?: 'horizontal' | 'vertical'
  thickness?: number
  min?: number
  max?: number
}

export interface SplitEmits {
  (e: 'update:modelValue', value: number): void
  (e: 'on-move-start'): void
  (e: 'on-move-end'): void
}
