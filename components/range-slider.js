// components/RangeSlider.js
import { useState } from 'react';

const RangeSlider = ({ min, max, step }) => {
  const [value, setValue] = useState(min);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // Calculate the position for the current value
  const getThumbLeftPosition = () => {
    const percentage = ((value - min) / (max - min)) * 100;
    return `calc(${percentage}% - 12px)`;
  };

  return (
    <div className="sliderContainer">
      <span className="minValue">{min}%</span>
      <div className="sliderWrapper">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="slider"
        />
        <div
          className="currentValue"
          style={{ left: getThumbLeftPosition() }}
        >
          {value}%
        </div>
      </div>
      <span className="maxValue">{max}%</span>
    </div>
  );
};

export default RangeSlider;
