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
    <div className='flex-row flex items-center'>
      <label htmlFor="sort-options" className="mr-2 text-md text-slate-100 whitespace-nowrap">
        Sort by: 
      </label>
      <div 
        id="sort-options" 
        className='flex flex-row bg-zinc-100 rounded-md cursor-pointer'>

        <select 
          defaultValue="name" 
          className="bg-zinc-100 text-zinc-600 appearance-none cursor-pointer text-md rounded-md block h-10 p-1.5"
          onChange={handleSelectChange}
        >
          <option value="name">Recipe Name (A-Z)</option>
          <option value="name (z-a)">Recipe Name (Z-A)</option>
          <option value="rating">Rating</option>
        </select>
        <p className='text-zinc-600 text-md py-1.5 pr-1'>
          &#9662; {/* dropdown arrow */}
        </p>
      </div>
    </div>
  );
};

export default DropDown;
