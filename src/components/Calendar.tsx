import React, { useEffect, useState } from 'react'

import { CalendarState, Holidays } from '../types'
import { connect, ConnectedProps } from 'react-redux'

import { CalendarPane } from './CalendarPane'

import { WEEK } from '../constants';

import { generateWeekFromStartOfWeek } from '../utility/index'
import { useFetchDates } from '../hooks';
import { debuglog } from 'util';

const offsetByOneWeek = (prevState: number, stateHook: Function) => () => {
  stateHook(prevState + 7);
}

const offsetMinusOneWeek = (prevState: number, stateHook: Function) => () => {
  stateHook(prevState - 7);
}

const renderWeek = (week : Array<any>, holidays: Holidays) => {
   return week.map(day => <CalendarPane day={day} holidays={holidays[day.date]}/>)
}

const mapStateToProps = (state : CalendarState ) => {
    return {
      today: state.today,
      holidays: state.holidays
    }
}

const connector = connect(
  mapStateToProps,
)

type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux {
  today: Date,
  holidays: Holidays
}

const Calendar = (props: Props) => {
    const { today, holidays } = props;
    console.log("Hol ", holidays)
    const [isLoading, fetchDates] = useFetchDates();
    const [offsetDays, setOffsetDays] = useState(0);
    const [startOfWeek, setStartOfWeek] = useState(0);
    const week = generateWeekFromStartOfWeek(startOfWeek, today, offsetDays);


    useEffect(() => {
      console.log(week[0].date, week[week.length - 1].date)
      fetchDates(week[0].date, week[week.length - 1].date);
    }, [offsetDays])


    return <div className="calendar">
      <div className="buttons">
        <button onClick={offsetMinusOneWeek(offsetDays, setOffsetDays)}>
          Left
        </button>
        <button onClick={offsetByOneWeek(offsetDays, setOffsetDays)}>
          Right
        </button>
      </div>
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
              return <option value={i}>{day}</option>
            })}
          </select>
        </div>
      </div>
      <div className="calendar-body">
        {renderWeek(week, holidays)}
      </div>
    </div>
}
  
  
export default connector(Calendar)