import dayjs from 'dayjs'

const formatterMap = {
  date: 'YYYY-MM-DD',
  time: 'HH:mm:ss',
  datetime: 'YYYY-MM-DD HH:mm',
}

export interface Datetime {
  // 相对时间
  (date?: string | number | Date): string
  // 绝对时间-1个日期
  (
    date: string | number | Date,
    formatter: 'date' | 'time' | 'datetime' | string
  ): string
  // 绝对时间-2个日期
  (
    date: string | number | Date,
    date2: string | number | Date,
    formatter: 'date' | 'time' | 'datetime' | string
  ): string
}

export const datetime: Datetime = (
  param1?: string | number | Date,
  param2?: 'date' | 'time' | 'datetime' | string | number | Date,
  param3?: 'date' | 'time' | 'datetime' | string
) => {
  if (param3) {

  } else if (param2) {

  } else {
    
  }
};