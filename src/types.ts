export const FOLK = 'folk';
export const PUBLIC = 'public';

const MONDAY = 'Monday';
const TUESDAY = 'Tuesday';
const WEDNESDAY = 'Wednesday';
const THURSDAY = 'Thursday';
const FRIDAY = 'Friday';
const SATURDAY = 'Saturday';
const SUNDAY = 'Sunday';

export interface Holiday {
  name: string,
  type: typeof PUBLIC | typeof FOLK
}

export interface Holidays {
  [U: string]: Array<Holiday>
}

export interface CalendarState {
    today: Date,
    holidays: Holidays,
    earliestDate: Date,
    latestDate: Date
}

export type DayOfTheWeek = typeof MONDAY
    | typeof TUESDAY
    | typeof WEDNESDAY
    | typeof THURSDAY
    | typeof FRIDAY
    | typeof SATURDAY
    | typeof SUNDAY
