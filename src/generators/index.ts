import { dateWithFormat } from 'helpers';

export const hoursGenerator = () => (
  Array.from(Array(24), (_, idx) => (
    idx < 10 ? `0${idx}:00` : `${idx}:00`
  ))
);

export const datesGenerator = (currentDate: Date) => {
  const datesList: Array<string> = [];

  currentDate.setDate(
    currentDate.getDate() - currentDate.getDay()
  );

  for (let i = 0; i < 7; i += 1) {
    datesList.push(dateWithFormat(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return datesList;
};

export const tableGenerator = (hoursList: Array<string>) => (
  Array.from(Array(24), (_, idx) => ({
    time: hoursList[idx],
    events: Array.from(Array(7), () => []),
  }))
);
