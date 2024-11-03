import useCalendar from './useCalendar';
import useLocalStorage from './useLocalStorage';

export const mockEmotes = [
  { emote: 'Happiness', color: '#91F0FF' },
  { emote: 'Joy', color: '#9EFFB9' },
  { emote: 'Satisfaction', color: '#CAFF9E' },
  { emote: 'Self-development', color: '#F8FF7A' },
  { emote: 'Sadness', color: '#FFBC8C' },
  { emote: 'Irritation', color: '#FF8C8C' },
];

const useEmojiPalette = () => {
  const { dayNotes, setDayNotes } = useCalendar();
  const { setLocalStorage: setEmotes, value: emotes } = useLocalStorage('emojiPalette', mockEmotes);

  const handleEmojiChange = ({ oldColor, newColor }) => {
    // Update emotes
    const newEmotes = emotes.map((emote) => {
      if (emote.color === oldColor) {
        return { ...emote, color: newColor };
      }
      return emote;
    });
    setEmotes(newEmotes);

    const updatedDayNotes = Object.keys(dayNotes).reduce((acc, date) => {
      acc[date] = dayNotes[date].map((note) => {
        if (note.color === oldColor) {
          return { ...note, color: newColor };
        }
        return note;
      });
      return acc;
    }, {});

    setDayNotes(updatedDayNotes);
  };

  return { emotes, handleEmojiChange };
};

export default useEmojiPalette;
