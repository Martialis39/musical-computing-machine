import React, { useState } from 'react'

import { CalendarState } from '../types'
import { connect, ConnectedProps } from 'react-redux'

import { CalendarPane } from './CalendarPane'

import { WEEK } from '../constants';

import { formatDate, generateWeekFromStartOfWeek } from '../utility/index'



const mapStateToProps = (state : CalendarState ) => {
    return {
      today: state.today,
      startOfWeek: state.startOfWeek
    }
}

const connector = connect(
  mapStateToProps,

)

type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux {
  today: Date,
  startOfWeek: number
}

const Calendar = (props: Props) => {
    const { today, startOfWeek: firstWeekDay } = props;
    const [startOfWeek, setStartOfWeek] = useState(firstWeekDay);
    const week = generateWeekFromStartOfWeek(startOfWeek);
    return <div className="calendar">
      <div className="calendar__intro">
        <p>
        Hi, today is a
        </p>
        <h2>{WEEK[today.getDay() - 1]}</h2>
        <div className="calendar__select-day">
          <p>The week starts on a </p>
          <select onChange={e => {
            setStartOfWeek(Number(e.target.value))
          }}>
            {WEEK.map((day, i) => {
              return <option value={i}>{day}</option>
            })}
          </select>
        </div>
      </div>
      <div className="calendar-body">
      {week.map(day => <CalendarPane day={day} />)}
      </div>
    </div>
}
  
  
export default connector(Calendar)