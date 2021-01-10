import React from 'react'
import { Holidays, Holiday, PUBLIC } from '../types';


interface Props {
  day: any,
  holidays: Array<Holiday>,
  today: string
}
  

export const CalendarPane = (props : Props) => {
    const {day, holidays, today} = props;
    const {name, date} = day;
    const todayClass = "bg-pink-200";
    const isToday = today === date
    const isPublicHoliday = holidays && holidays.map(({type}) => type).some(h => h === PUBLIC)

    return <div className="border-t-2 md:border-t-0 w-full md:max-w-1/7 md:border-r-2 md:first:border-l-2 border-black md:max-h-55">
        <div className={`p-2 md:p-0 md:border-b-2 border-black font-lg font-light text-center ${isToday ? todayClass : ''}`}>
            <div className={`${isPublicHoliday ? 'font-bold text-red-700' : ''}`}>{name}</div>
            <div>{date}</div>
        </div>
        <div className={`md:min-h-64 p-2 ${isToday ? todayClass : ''}`}>
            {holidays && holidays.map((d : Holiday) => {
                const {name, type} = d
                return <p className={`text-sm break-words font-light text-center ${type === PUBLIC ? 'text-red-700 font-bold' : ''}`}>{name}</p>
            })}
        </div>
    </div>
}