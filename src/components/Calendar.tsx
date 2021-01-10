import React, { useEffect, useState } from 'react'

import { CalendarState, Holidays } from '../types'
import { connect, ConnectedProps } from 'react-redux'

import { CalendarPane } from './CalendarPane'
import { ReactComponent as ArrowIcon } from '../assets/ArrowIcon.svg'

import { WEEK } from '../constants';

import { formatDate, generateWeekFromStartOfWeek } from '../utility/index'
import { useFetchDates } from '../hooks';


const offsetByOneWeek = (prevState: number, stateHook: Function) => () => {
  stateHook(prevState + 7);
}

const offsetMinusOneWeek = (prevState: number, stateHook: Function) => () => {
  stateHook(prevState - 7);
}

const renderWeek = (week : Array<any>, holidays: Holidays, today: string) => {
   return week.map(day => <CalendarPane key={day.date} day={day} holidays={holidays[day.date]} today={today} />)
}

const mapStateToProps = (state : CalendarState ) => {
    return {
      today: state.today,
      holidays: state.holidays,
      earliestDate: state.earliestDate,
      latestDate: state.latestDate
    }
}

const connector = connect(
  mapStateToProps,
)

type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux {
  today: Date,
  holidays: Holidays,
  earliestDate: string,
  latestDate: string
}

const Calendar = (props: Props) => {
    const { today, holidays, earliestDate, latestDate } = props;
    const [fetchDates] = useFetchDates();
    const [offsetDays, setOffsetDays] = useState(0);
    const [startOfWeek, setStartOfWeek] = useState(0);
    const week = generateWeekFromStartOfWeek(startOfWeek, today, offsetDays);


    useEffect(() => {
      const [start, end] = [week[0].date, week[week.length - 1].date]
      fetchDates(start, end, earliestDate, latestDate);
    }, [offsetDays, week, earliestDate, latestDate, fetchDates])


    return <div className="relative px-10 pt-5 pb-16 mx-auto shadow w-full max-w-xl">
        <div className="flex items-center absolute inset-y-0 left-0">
            <button onClick={offsetMinusOneWeek(offsetDays, setOffsetDays)}>
              <ArrowIcon className="text-sm lg:text-base" />
            </button>
        </div>
        <div className="flex items-center absolute inset-y-0 right-0">
          <button onClick={offsetByOneWeek(offsetDays, setOffsetDays)}>
            <ArrowIcon className="text-sm lg:text-base transform rotate-180"/>
          </button>
        </div>
      <div className="mb-6">
        <p className="text-xl md:text-2xl">
        Hi, today is a
        </p>
        <h2 className="text-4xl xl:text-8xl font-bold mb-1">{WEEK[today.getDay()]}</h2>
        <div>
          <span className="text-xl md:text-2xl font-light" >The week starts on a </span>
          <select className="inline-block text-xl md:text-2xl font-bold" value={startOfWeek} onChange={e => {
            setStartOfWeek(Number(e.target.value))
          }}>
            {WEEK.map((day, i) => {
              return <option value={i}>{day}</option>
            })}
          </select>
        </div>
      </div>
      <div className="w-full flex justify-center flex-col md:flex-row">
        {renderWeek(week, holidays, formatDate(today))}
      </div>
    </div>
}
  
  
export default connector(Calendar)