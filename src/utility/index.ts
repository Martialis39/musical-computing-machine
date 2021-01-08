// export const stringToDate = ({day, month, year}) => `${year}-${month}-${day}`
import { WEEK } from '../constants/index'

export function addDays(date: Date, days: number) {
    date.setDate(date.getDate() + days);
  }

export function generateWeekFromStartOfWeek(n : number){
  const startOfWeek = WEEK.slice(n);
  const endOfWeek = WEEK.slice(0, n);
  return startOfWeek.concat(endOfWeek)
}