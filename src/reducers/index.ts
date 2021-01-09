import { CalendarState, PUBLIC, FOLK, CHECK_HOLIDAYS, GET_HOLIDAYS, SET_DATES } from '../types';
import { formatDate} from '../utility';



interface checkHolidays {
  type: typeof CHECK_HOLIDAYS
  payload: [string, string]
}

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

    
type CalendarActionTypes = GetHolidays | SetEarliestLatestDates | checkHolidays

const todayAsString = formatDate(new Date())

const initialState: CalendarState = {
    today: new Date(),
    holidays: {},
    earliestDate: todayAsString,
    latestDate: todayAsString
  }
  
export default function chatReducer(
  state = initialState,
  action: CalendarActionTypes
): CalendarState {
  switch (action.type) {
    case GET_HOLIDAYS:
      return {
        ...state, holidays: {
          ... state.holidays, ...action.payload
        }
      }
    case SET_DATES:
      const [start, end] = action.payload;
      return {
        ...state,
        earliestDate: start,
        latestDate: end 
      }
    
    default:
      return state
  }
}