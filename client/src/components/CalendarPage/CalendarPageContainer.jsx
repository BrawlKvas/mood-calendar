import React, { Component } from 'react'
import { connect } from 'react-redux'
import CalendarPage from './CalendarPage'
import { requestDays } from './../../redux/calendarReducer'
import { signOut } from './../../redux/authReducer'

class CalendarPageContainer extends Component {
  componentDidMount = () => {
    this.props.requestDays(this.props.year, this.props.month)
  }

  render() {
    if (!this.props.days)
      return <div>Loading...</div> //DEV

    return (
      <CalendarPage {...this.props} />
    )
  }
}

const mapStateToProps = (state) => (
  {
    year: state.calendar.year,
    month: state.calendar.month,
    days: state.calendar.days
  }
)

export default connect(mapStateToProps, { requestDays, signOut })(CalendarPageContainer)
