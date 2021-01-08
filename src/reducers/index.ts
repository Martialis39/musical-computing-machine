import { CalendarState } from '../types';

const SET_START_OF_WEEK = 'SET_START_OF_WEEK'

interface SetStartOfWeekAction {
    type: typeof SET_START_OF_WEEK
    payload: number
  }
    
type CalendarActionTypes = SetStartOfWeekAction

const initialState: CalendarState = {
    today: new Date(),
    startOfWeek: 0
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
    
    default:
      return state
  }
}