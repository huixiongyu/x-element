export type CalendarDateType =
  | 'prev-month'
  | 'next-month'
  | 'prev-year'
  | 'next-year'
  | 'today'
  | 'select-date'
export type CalenderDateCellType = 'prev' | 'current' | 'next'

export interface CalenderDateCell {
  text: number
  type: CalenderDateCellType
}

export interface PropsOption {
  width?: string
  height?: string
}

export interface CalendarProps {
  modelValue: Date
  firstDay?: number
  options: PropsOption
}

export interface ChangeOption {
  type: CalendarDateType
  data: Date
}

export interface CalendarEmits {
  (e: 'change', value: ChangeOption): void
  (e: 'update:modelValue', value: string): void
}
