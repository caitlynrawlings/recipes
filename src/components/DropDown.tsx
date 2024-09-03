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
            
            // Check if the click happened inside the dropdown or dropdown-button. checks by classname
            if (target.closest('.sort-options') || target.closest('.sort-dropdown-button')) {
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
  

    const DropdownButton: React.FC = () => {
        return (
            <div 
                role="combobox"
                aria-haspopup="listbox"
                aria-controls='sort_options'
                aria-labelledby='sort_label'
                aria-expanded={isOpen}
                aria-activedescendant={`sort_option_${selectedOption}`}
                onClick={(event) => toggleDropdown(event)}
                className="sort-dropdown-button flex flex-row h-10 cursor-pointer mt-1.5 bg-slate-100 text-slate-600 text-ellipsis text-md rounded-sm p-1.5 items-center gap-2 lg:gap-0.5"
            >   
                <div className='overflow-hidden text-ellipsis whitespace-nowrap lg:w-36 w-52'>
                    {selectedOption}
                </div>
                
                &#9662; {/* dropdown arrow */}
            </div>
        )
    }

  const SelectOptionsBox: React.FC = () => {
    return (
        <div className='sort-options z-20 '>
            {isOpen && (
                <ul 
                    role="listbox"
                    id="sort_options"
                    tabIndex={-1}
                    aria-multiselectable={false}
                    className="bg-slate-100 fixed text-md shadow-lg py-2 rounded-sm dropdown flex flex-col lg:w-43 w-60"
                >
                    {Array.from(options).map(option => (
                        <li 
                            key={option} 
                            id={`sort_option_${option}`}
                            role="option"
                            aria-selected={selectedOption === option}
                            className={`flex flex-row w-full text-slate-600 px-2 py-1 cursor-pointer ${option === selectedOption && 'bg-slate-300'}`}
                            onClick={() => handleSelectChange(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

    return (
        <div className='flex flex-row items-center'>
        <label htmlFor="sort_dropdown" id="sort_label" className='text-slate-100 text-md'>
            Sort by: 
        </label>
        <div 
            className='flex flex-col gap-2 mx-2'
            id="sort_dropdown" 
        >
            <DropdownButton/>
            <SelectOptionsBox/>
        </div>
    </div>
    );
};

export default DropDown;
