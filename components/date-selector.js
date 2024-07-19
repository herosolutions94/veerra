import React from "react";

const DateSelector = () => {
  const years = [];
  for (let year = 2000; year <= 2050; year++) {
    years.push(year);
  }

  const months = [
    { value: 1, name: "January" },
    { value: 2, name: "February" },
    { value: 3, name: "March" },
    { value: 4, name: "April" },
    { value: 5, name: "May" },
    { value: 6, name: "June" },
    { value: 7, name: "July" },
    { value: 8, name: "August" },
    { value: 9, name: "September" },
    { value: 10, name: "October" },
    { value: 11, name: "November" },
    { value: 12, name: "December" },
  ];

  const days = [];
  for (let day = 1; day <= 31; day++) {
    days.push(day);
  }
  return (
    <>
      <div className="flex_3 less_top date_area ">
        <div className="col">
          <select id="month" name="month" className="input">
            <option value={""}>Month</option>
            {months.map((month) => (
              <option key={month.value} value={month.value}>
                {month.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col day_here">
          <select id="day" name="day" className="input">
            <option value={""}>Day</option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <select id="year" name="year" className="input">
            <option value={""}>Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default DateSelector;
