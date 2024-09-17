import  { useState } from 'react';
import '../components/SelectDropdown.css'; 

export const SelectDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="select-dropdown-container">
      <label htmlFor="options" className="select-label">Choose an option:</label>
      <select
        id="options"
        value={selectedOption}
        onChange={handleSelectChange}
        className="select-dropdown"
      >
        <option value="" disabled>Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};