import React from 'react'


interface Props {
  day: String
}
  

export const CalendarPane = (props : Props) => {
    const {day} = props;
    const holidays = ['string'];
    return <div className="calendar-pane">
        <div className="calendar-pane__header">
            <div>{day}</div>
            <div>03/05/2021</div>
        </div>
        <div className="calendar-pane__body">
            {holidays}
        </div>
    </div>
}