import React from 'react'
import { Holidays, Holiday } from '../types';


interface Props {
  day: any,
  holidays: Array<Holiday>
}
  

export const CalendarPane = (props : Props) => {
    const {day, holidays} = props;
    const {name, date} = day;
    return <div className="calendar-pane">
        <div className="calendar-pane__header">
            <div>{name}</div>
            <div>{date}</div>
        </div>
        <div className="calendar-pane__body">
            {holidays && holidays.map((d : Holiday) => <p>{d.name}</p>)}
        </div>
    </div>
}