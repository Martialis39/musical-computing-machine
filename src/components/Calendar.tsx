import React, { useEffect, useState } from 'react'

import { CalendarState } from '../types'
import { connect, ConnectedProps } from 'react-redux'

import { CalendarPane } from './CalendarPane'

import { WEEK } from '../constants';

import { generateWeekFromStartOfWeek } from '../utility/index'
import { useFetchDates } from '../hooks';



const mapStateToProps = (state : CalendarState ) => {
    return {
      today: state.today,
    }
}

const connector = connect(
  mapStateToProps,

)

type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux {
  today: Date,
}

const Calendar = (props: Props) => {
    const { today } = props;
    const [isLoading, fetchDates] = useFetchDates();
    const [startOfWeek, setStartOfWeek] = useState(0);
    const week = generateWeekFromStartOfWeek(startOfWeek, today);

    useEffect(() => {
      fetchDates("2019-02-01", "2019-02-28");
    }, [])


    return <div className="calendar">
      <div className="calendar__intro">
        <p>
        Hi, today is a
        </p>
        <h2>{WEEK[today.getDay()]}</h2>
        <div className="calendar__select-day">
          <p>The week starts on a </p>
          <select value={startOfWeek} onChange={e => {
            setStartOfWeek(Number(e.target.value))
          }}>
            {WEEK.map((day, i) => {
              console.log('value is', i)
              return <option value={i}>{day}</option>
            })}
          </select>
        </div>
      </div>
      <div className="calendar-body">
      {week.map(( day ) => <CalendarPane day={day} />)}
      </div>
    </div>
}
  
  
export default connector(Calendar)