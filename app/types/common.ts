export type IntervalType = string | number | NodeJS.Timeout | null | undefined
export type ColorType = 'info' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral' | undefined
export type VariantType = 'solid' | 'outline' | 'soft' | 'subtle' | 'ghost' | 'link' | undefined
export type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined

// --------------- Input ---------------
export type InputType = 'number' | 'color' | 'button' | 'checkbox' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | string & {}
export type InputVariantType = 'outline' | 'soft' | 'subtle' | 'ghost' | 'none'

// --------------- Button ---------------
export type ButtonType = 'submit' | 'reset' | 'button'
export type ActiveColorType = 'error' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'neutral'
