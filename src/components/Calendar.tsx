import React from 'react'
import { WEEK } from '../constants/index'
import { CalendarState } from '../types'
import { connect, ConnectedProps } from 'react-redux'



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
    return <div>Yay, { WEEK[today] } </div>
}
  
  
export default connector(Calendar)