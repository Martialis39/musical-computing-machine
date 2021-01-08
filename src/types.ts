
export interface CalendarState {
    today: Date,
    startOfWeek: number
}

const MONDAY = 'Monday';
const TUESDAY = 'Tuesday';
const WEDNESDAY = 'Wednesday';
const THURSDAY = 'Thursday';
const FRIDAY = 'Friday';
const SATURDAY = 'Saturday';
const SUNDAY = 'Sunday';

export type DayOfTheWeek = typeof MONDAY
    | typeof TUESDAY
    | typeof WEDNESDAY
    | typeof THURSDAY
    | typeof FRIDAY
    | typeof SATURDAY
    | typeof SUNDAY
