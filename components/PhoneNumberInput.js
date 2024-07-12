import { useState, useRef } from 'react';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState({ part1: '', part2: '', part3: '' });
  const part1Ref = useRef(null);
  const part2Ref = useRef(null);
  const part3Ref = useRef(null);

  const handleChange = (e, part) => {
    const value = e.target.value;
    if (value.length <= 3) {
      setPhoneNumber({ ...phoneNumber, [part]: value });
    }

    if (part === 'part1' && value.length === 3) {
      part2Ref.current.focus();
    } else if (part === 'part2' && value.length === 3) {
      part3Ref.current.focus();
    }
  };

  return (
    <div className='flex_3 less_top less_width'>
        <div className='col'>
        <input
            type="text"
            value={phoneNumber.part1}
            onChange={(e) => handleChange(e, 'part1')}
            maxLength="3"
            ref={part1Ref}
            className='input'
        />
      </div>
      <div className='col'>
      <input
        type="text"
        value={phoneNumber.part2}
        onChange={(e) => handleChange(e, 'part2')}
        maxLength="3"
        ref={part2Ref}
        className='input'
      />
      </div>
      <div className='col'>
      <input
        type="text"
        value={phoneNumber.part3}
        onChange={(e) => handleChange(e, 'part3')}
        maxLength="4"
        ref={part3Ref}
        className='input'
      />
      </div>
    </div>
  );
};

export default PhoneNumberInput;
