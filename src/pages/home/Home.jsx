import React from 'react';

import useCalendar from '../../hooks/useCalendar';
import { CalendarContainer, CalendarHeader, Container } from './styles';

const Home = () => {
  const { date, handlePrevMonth, handleNextMonth, renderDays } = useCalendar();

  return (
    <Container data-cy="calendar">
      <CalendarHeader>
        <p onClick={handlePrevMonth}>{'<'}</p>
        <h1>
          {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
        </h1>
        <p onClick={handleNextMonth}>{'>'}</p>
      </CalendarHeader>
      <CalendarContainer>
        <p>Sun</p>
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p>Thu</p>
        <p>Fri</p>
        <p>Sat</p>
        {renderDays().map((day, index) => (
          <React.Fragment key={index}>{day}</React.Fragment>
        ))}
      </CalendarContainer>
    </Container>
  );
};

export default Home;
