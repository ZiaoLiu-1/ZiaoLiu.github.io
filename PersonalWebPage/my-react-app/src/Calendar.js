import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, addMonths, subMonths, addDays } from 'date-fns';
import './calendar.css';
import './App.css';
const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const dateFormat = "d";
  const rows = [];

  let days = [];
  let day = startDate;
  
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col cell">
          {format(day, dateFormat)}
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(<div className="row">{days}</div>);
    days = [];
  }

  return (
    <div className="calendar">
      <div className="header">
        <div onClick={() => setCurrentDate(subMonths(currentDate, 1))}>{"<"} Prev</div>
        <div>{format(currentDate, "MMMM yyyy")}</div>
        <div onClick={() => setCurrentDate(addMonths(currentDate, 1))}>Next {">"}</div>
      </div>
      <div className="body">{rows}</div>
    </div>
  );
};

export default Calendar;