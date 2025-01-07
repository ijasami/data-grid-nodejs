// src/components/Dropdown.tsx
import React from 'react';

interface DropdownProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="Location">Location</option>
      <option value="Branch">Branch</option>
    </select>
  );
};

export default Dropdown;
