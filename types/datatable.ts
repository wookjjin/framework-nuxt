export interface TDataTableProps {
  data: any[]
  columns: any[]
  pagination?: boolean
  perPage?: number
}

export interface IColumn {
  key: string
  label: string
  sortable?: boolean
  width?: string | number
  align?: 'left' | 'center' | 'right'
}

export interface IDataItem {
  [key: string]: any
}
