import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Day from '../components/day/Day';
import useLocalStorage from './useLocalStorage';

const useCalendar = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();
  const { value: dayNotes, setLocalStorage: setDayNotes } = useLocalStorage('dayNotes', {});

  const handleDayClick = (day) => {
    const selectedDate = new Date(date.getFullYear(), date.getMonth(), day);
    if (!isNaN(selectedDate)) {
      navigate(`/day/${selectedDate.toISOString().split('T')[0]}`);
    } else {
      console.error('Invalid date selected');
    }
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const addNoteToDay = (day, note) => {
    const updatedNotes = { ...dayNotes, [day]: note };
    setDayNotes(updatedNotes);
  };

  const renderDays = () => {
    const daysInMonth = getDaysInMonth(date.getFullYear(), date.getMonth());
    const firstDay = getFirstDayOfMonth(date.getFullYear(), date.getMonth());

    const days = [];

    const prevMonthDays = getDaysInMonth(date.getFullYear(), date.getMonth() - 1);
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(
        <Day key={`prev-${i}`} className="disabled">
          {prevMonthDays - i}
        </Day>,
      );
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const selectedDate = new Date(date.getFullYear(), date.getMonth(), i).toISOString().split('T')[0];
      days.push(
        <Day key={i} onClick={() => handleDayClick(i)} selectedDate={selectedDate}>
          {i}
        </Day>,
      );
    }

    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push(
        <Day key={`next-${i}`} className="disabled">
          {i}
        </Day>,
      );
    }

    return days;
  };

  return {
    date,
    handlePrevMonth,
    handleNextMonth,
    renderDays,
    addNoteToDay,
    dayNotes,
    setDayNotes,
  };
};

export default useCalendar;
