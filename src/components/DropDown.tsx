// src/components/DropDown.tsx

import React, { useEffect, useState } from 'react';

interface DropDownProps {
  selectedOption: string;
  setSelectedOption: (options: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({ selectedOption, setSelectedOption }) => {
    const options: string[] = ["Recipe Name (A-Z)", "Recipe Name (Z-A)", "Rating"]
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = (event: React.MouseEvent) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    }

    const handleSelectChange = (option: string) => {
        setIsOpen(false);
        setSelectedOption(option);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            
            // Check if the click happened inside the dropdown or dropdown-preview
            if (target.closest('.sort-dropdown') || target.closest('.sort-dropdown-preview')) {
                return;
            }
    
            // Close the dropdown if it is open and the click happened outside
            if (isOpen) {
                setIsOpen(false);
            }
        };

        const handleScroll = () => {
            // Close the dropdown if it is open and the click happened outside
            if (isOpen) {
                setIsOpen(false);
            }
        };
    
        // Attach the event listener on component mount
        document.addEventListener('click', handleClickOutside);
        document.addEventListener('scroll', handleScroll);
    
        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen, setSelectedOption]); // Include all necessary dependencies
  

  const DropdownPreview: React.FC = () => {
      return (
          <div 
              onClick={(event) => toggleDropdown(event)}
              className="sort-dropdown-preview flex flex-row h-10 cursor-pointer mt-1.5 bg-zinc-100 text-zinc-600 text-ellipsis text-md rounded-sm p-1.5 items-center gap-2"
          >   
              <div className='overflow-hidden text-ellipsis whitespace-nowrap lg:w-auto w-52'>
                {selectedOption}
              </div>
              
              &#9662; {/* dropdown arrow */}
          </div>
      )
  }

  const SelectOptionsBox: React.FC = () => {
    return (
        <div className='sort-dropdown z-20 '>
            {isOpen && (
                <div className="bg-zinc-100 fixed text-md shadow-lg py-2 rounded-sm dropdown flex flex-col lg:w-43 w-60">
                    {Array.from(options).map(option => (
                        <p 
                            key={option} 
                            className={`flex flex-row w-full text-slate-600 px-2 py-1 cursor-pointer ${option === selectedOption && 'bg-slate-300'}`}
                            onClick={() => handleSelectChange(option)}
                        >
                            {option}
                        </p>
                    ))}
                </div>
            )}
        </div>
    )
}

    return (
        <div className='flex flex-row items-center'>
        <label htmlFor="filter-options"  className='text-slate-100 text-md'>
            Sort by: 
        </label>
        <div 
            className='flex flex-col gap-2 mx-2'
            id="sort-options" 
        >
            <DropdownPreview/>
            <SelectOptionsBox/>
        </div>
    </div>
    );
};

export default DropDown;
