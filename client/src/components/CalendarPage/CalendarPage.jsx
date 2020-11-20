import React from 'react'
import Calendar from './Calendar/Calendar'
import Statistics from './Statistics/Statistics'
import { ExitButton, Header, Page } from './styled'

const CalendarPage = ({ days, signOut }) => {
  return (
    <Page>

      <Header>
        <svg width="51" height="22" viewBox="0 0 51 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="51" height="22" rx="5" fill="#E0E0E0" />
          <circle r="3.5" transform="matrix(-1 0 0 1 16.5 11.5)" fill="white" />
          <circle r="3.5" transform="matrix(-1 0 0 1 34.5 11.5)" fill="white" />
          <circle r="3.5" transform="matrix(-1 0 0 1 25.5 11.5)" fill="white" />
        </svg>
        <ExitButton onClick={signOut}>+</ExitButton>
      </Header>

      <Calendar />

      <Statistics arrayMoods={days} />
    </Page>
  )
}

export default CalendarPage
