import React, { useEffect, useRef, useState } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { useParams } from 'react-router-dom';

import useCalendar from '../../hooks/useCalendar';
import useEmojiPalette from '../../hooks/useEmojiPalette';
import { ContentContainer, DeleteButton, EmoteMenu, EmoteOption, EventButton, Row, Table, TableHeader } from './styles';

const DayPage = () => {
  const { date } = useParams();
  const { dayNotes, addNoteToDay } = useCalendar();
  const { emotes } = useEmojiPalette();
  const [events, setEvents] = useState([{ event: '', emote: '', color: '' }]);
  const [emoteMenuVisible, setEmoteMenuVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const inputRefs = useRef([]);

  useEffect(() => {
    if (dayNotes[date]) {
      setEvents(dayNotes[date]);
    }
  }, [date, dayNotes]);

  const handleEventClick = (index, event) => {
    setSelectedRow(index);
    const rect = event.target.getBoundingClientRect();
    setMenuPosition({ top: rect.top, left: rect.right });
    setEmoteMenuVisible(true);
  };

  const handleEmoteSelect = (emote) => {
    const newEvents = [...events];
    newEvents[selectedRow].emote = emote.emote;
    newEvents[selectedRow].color = emote.color;
    setEvents(newEvents);
    addNoteToDay(date, newEvents);
    setEmoteMenuVisible(false);
    window.location.reload();
  };

  const handleEventChange = (index, value) => {
    const newEvents = [...events];
    newEvents[index].event = value;
    setEvents(newEvents);
    addNoteToDay(date, newEvents);
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (index === events.length - 1) {
        setEvents([...events, { event: '', emote: '', color: '' }]);
        setTimeout(() => {
          inputRefs.current[index + 1].focus();
        }, 0);
      } else {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleDelete = (index) => {
    if (events.length === 1) return;
    const newEvents = events.filter((_, i) => i !== index);
    setEvents(newEvents);
    addNoteToDay(date, newEvents);
  };

  return (
    <ContentContainer>
      <h1>{date}</h1>
      <Table>
        <thead>
          <tr>
            <TableHeader>Event</TableHeader>
            <TableHeader>Emote</TableHeader>
          </tr>
        </thead>
        <tbody>
          {events.map((item, index) => (
            <Row key={index}>
              <DeleteButton onClick={() => handleDelete(index)}>
                <TiDeleteOutline color="#4a4a4a" size={30} />
              </DeleteButton>
              <input
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                placeholder="Enter event"
                value={item.event}
                onChange={(e) => handleEventChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
              <EventButton
                onClick={(e) => handleEventClick(index, e)}
                style={{ backgroundColor: item.color || 'white' }}
              >
                {item.emote || 'Choose Emote'}
              </EventButton>
            </Row>
          ))}
        </tbody>
      </Table>

      {emoteMenuVisible && (
        <EmoteMenu style={{ top: menuPosition.top, left: menuPosition.left }} visible={emoteMenuVisible}>
          {emotes.map((emote, idx) => (
            <EmoteOption key={idx} onClick={() => handleEmoteSelect(emote)} style={{ backgroundColor: emote.color }}>
              {emote.emote}
            </EmoteOption>
          ))}
        </EmoteMenu>
      )}
    </ContentContainer>
  );
};

export default DayPage;
