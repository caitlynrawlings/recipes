// src/components/DropDown.tsx

import React from 'react';

interface DropDownProps {
  onChange: (value: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({ onChange }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <>
      <label htmlFor="sort-options" className="mb-2 mr-2 text-sm text-zinc-600 whitespace-nowrap">
        Sort by: 
      </label>
      <select 
        id="sort-options" 
        defaultValue="name" 
        className="bg-gray-50 border border-gray-300 text-zinc-600 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block p-1.5"
        onChange={handleSelectChange}
      >
        <option value="name">Recipe Name (A-Z)</option>
        <option value="name (z-a)">Recipe Name (Z-A)</option>
        <option value="rating">Rating</option>
      </select>
    </>
  );
};

export default DropDown;
