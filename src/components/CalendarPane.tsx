import React from 'react'
import { Holidays, Holiday } from '../types';


interface Props {
  day: any,
  holidays: Array<Holiday>
}
  

export const CalendarPane = (props : Props) => {
    const {day, holidays} = props;
    const {name, date} = day;
    return <div className="border-t-2 md:border-t-0 w-full md:max-w-1/7 md:border-r-2 md:first:border-l-2 border-black md:max-h-55">
        <div className="p-2 md:p-0 md:border-b-2 border-black font-lg font-light text-center">
            <div>{name}</div>
            <div>{date}</div>
        </div>
        <div className="md:min-h-64 p-2">
            {holidays && holidays.map((d : Holiday) => <p className="text-sm break-words font-light text-center">{d.name}</p>)}
        </div>
    </div>
}