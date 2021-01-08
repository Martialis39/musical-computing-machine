import React from 'react'

import { CalendarState } from '../types'
import { connect, ConnectedProps } from 'react-redux'

import { CalendarPane } from './CalendarPane'

import { generateWeekFromStartOfWeek } from '../utility/index'



const mapStateToProps = (state : CalendarState ) => {
    return {
      today: state.today.getDay() - 1,
    }
}

const connector = connect(
  mapStateToProps,

)


type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux {
  today: number
}

const Calendar = (props: Props) => {
    const { today } = props;
    const week = generateWeekFromStartOfWeek(today);
    return <div className="calendar">
      {week.map(day => <CalendarPane day={day} />)}
      </div>
}
  
  
export default connector(Calendar)