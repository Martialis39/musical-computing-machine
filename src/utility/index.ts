// export const stringToDate = ({day, month, year}) => `${year}-${month}-${day}`
import { WEEK } from '../constants/index'

export function addDays(date: Date, days: number) {
    const d = new Date(date);
    d.setDate(date.getDate() + days);
    return d;
  }

export function generateWeekFromStartOfWeek(n : number){
  const startOfWeek = WEEK.slice(n);
  const endOfWeek = WEEK.slice(0, n);
  return startOfWeek.concat(endOfWeek)
}

export function formatDate(date: Date){
  const month = date.getMonth() + 1;
  const day = date.getDate()
  return `${date.getFullYear()}-${month < 10 ? '0'+month : month}-${day < 10 ? '0'+day : day}`
}

export function getEarlierDate(date1: Date, date2: Date){
  // Need to call getTime() to check for equality
  if(date1.getTime() === date2.getTime()){
    // Return either date if equal
    return date1
  } else {
    if(date1 < date2){
      return date1
    } else {
      return date2
    }
  }
}

export function getLaterDate(date1: Date, date2: Date){
  // Need to call getTime() to check for equality
  if(date1.getTime() === date2.getTime()){
    // Return either date if equal
    return date1
  } else {
    if(date1 < date2){
      return date2
    } else {
      return date1
    }
  }
}