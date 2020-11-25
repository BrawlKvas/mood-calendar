import React, { Component } from 'react'
import { connect } from 'react-redux'
import CalendarPage from './CalendarPage'
import { requestDays } from './../../redux/calendarReducer'
import { signOut } from './../../redux/authReducer'
import Preloader, { WrapperPreloader } from '../common/Preloader'

class CalendarPageContainer extends Component {
  componentDidMount = () => {
    this.props.requestDays()
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.year !== this.props.year || prevProps.month !== this.props.month)
      this.props.requestDays(this.props.year, this.props.month)
  }

  render() {
    return (
      <>
        {
          this.props.isLoadingDays &&
          <WrapperPreloader><Preloader size={100} /></WrapperPreloader>
        }

        <CalendarPage {...this.props} />
      </>
    )
  }
}

const mapStateToProps = (state) => (
  {
    year: state.calendar.year,
    month: state.calendar.month,
    days: state.calendar.days,
    isLoadingDays: state.calendar.isLoadingDays
  }
)

export default connect(mapStateToProps, { requestDays, signOut })(CalendarPageContainer)
