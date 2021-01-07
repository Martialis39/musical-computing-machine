// export const stringToDate = ({day, month, year}) => `${year}-${month}-${day}`

export function addDays(date: Date, days: number) {
    date.setDate(date.getDate() + days);
  }

