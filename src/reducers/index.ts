import { CalendarState, PUBLIC, FOLK } from '../types';
import { getEarlierDate, getLaterDate } from '../utility';

const GET_HOLIDAYS = 'GET_HOLIDAYS'
const SET_DATES = 'SET_DATES'

interface GetHolidays {
  type: typeof GET_HOLIDAYS
  payload: Holidays
}

interface SetEarliestLatestDates {
  type: typeof SET_DATES
  payload: [Date, Date]
}

interface Holiday {
  name: string,
  type: typeof PUBLIC | typeof FOLK
}

interface Holidays {
  [U: string]: Array<Holiday>
}

    
type CalendarActionTypes = GetHolidays | SetEarliestLatestDates

const initialState: CalendarState = {
    today: new Date(),
    holidays: {},
    earliestDate: new Date(),
    latestDate: new Date()
  }
  
export default function chatReducer(
  state = initialState,
  action: CalendarActionTypes
): CalendarState {
  switch (action.type) {
    case GET_HOLIDAYS:
      return {
        ...state, holidays: action.payload
      }
    case SET_DATES:
      const [startDate, endDate] = action.payload;
      return {
        ...state,
        earliestDate: getEarlierDate(state.earliestDate, startDate),
        latestDate: getLaterDate(state.latestDate, endDate)
      }
    
    default:
      return state
  }
}