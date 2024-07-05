// components/RangeSlider.js
import { useState } from 'react';

const RangeSlider = ({ min, max, step }) => {
  const [value, setValue] = useState(min);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="sliderContainer">
      <span className="minValue">{min}%</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="slider"
      />
      <span className="maxValue">{max}%</span>
      <div className="currentValue">{value}%</div>
    </div>
  );
};

export default RangeSlider;