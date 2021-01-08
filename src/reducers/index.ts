import { CalendarState, PUBLIC, FOLK } from '../types';

const SET_START_OF_WEEK = 'SET_START_OF_WEEK'
const GET_HOLIDAYS = 'GET_HOLIDAYS'

interface SetStartOfWeekAction {
  type: typeof SET_START_OF_WEEK
  payload: number
}

interface GetHolidays {
  type: typeof GET_HOLIDAYS
  payload: Holidays
}
interface Holiday {
  name: string,
  type: typeof PUBLIC | typeof FOLK
}

interface Holidays {
  [U: string]: Array<Holiday>
}

    
type CalendarActionTypes = SetStartOfWeekAction | GetHolidays

const initialState: CalendarState = {
    today: new Date(),
    startOfWeek: 0,
    holidays: {}
  }
  
export default function chatReducer(
  state = initialState,
  action: CalendarActionTypes
): CalendarState {
  switch (action.type) {
    case SET_START_OF_WEEK:
      return {
        ...state, startOfWeek: action.payload
      }
    case GET_HOLIDAYS:
      console.log(action.payload)
      return {
        ...state, holidays: action.payload
      }
    
    default:
      return state
  }
}