import React from 'react'


interface Props {
  day: any
}
  

export const CalendarPane = (props : Props) => {
    const {day} = props;
    const {name, date} = day;
    const holidays = ['string'];
    return <div className="calendar-pane">
        <div className="calendar-pane__header">
            <div>{name}</div>
            <div>{date}</div>
        </div>
        <div className="calendar-pane__body">
            {holidays}
        </div>
    </div>
}