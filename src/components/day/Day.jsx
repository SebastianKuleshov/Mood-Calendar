import React from 'react';

import useCalendar from '../../hooks/useCalendar';
import { StyledDay } from './styles';

const findMostCommonColor = (notes) => {
  const colorCount = notes.reduce((acc, note) => {
    acc[note.color] = (acc[note.color] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(colorCount).reduce((a, b) => (colorCount[a] > colorCount[b] ? a : b));
};

export default function Day({ children, selectedDate, ...props }) {
  const { dayNotes } = useCalendar();

  const note = dayNotes[selectedDate];

  const hasNote = note !== undefined;

  const mostCommonColor = hasNote ? findMostCommonColor(note) : null;

  return (
    <StyledDay $background={hasNote && mostCommonColor} {...props} data-cy="day-container">
      {children}
    </StyledDay>
  );
}
