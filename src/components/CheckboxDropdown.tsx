import React, { useState, useEffect } from 'react';
import { VscChromeClose } from "react-icons/vsc";

interface DropdownCheckboxesProps {
    options: Set<string>;
    selectedOptions: string[];
    setSelectedOptions: (options: string[]) => void;
}

const DropdownCheckboxes: React.FC<DropdownCheckboxesProps> = ({ options, selectedOptions, setSelectedOptions }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [tempSelectedOptions, setTempSelectedOptions] = useState<string[]>(selectedOptions);

    const toggleDropdown = (event: React.MouseEvent) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    }

    const clearOptions = (event: React.MouseEvent) => {
        event.preventDefault();
        setTempSelectedOptions([])
    }

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        setTempSelectedOptions(
            checked ? [...tempSelectedOptions, value] : tempSelectedOptions.filter(option => option !== value)
        );
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            
            // Check if the click happened inside the dropdown or was being done to open the dropdown
            if (target.closest('.dropdown') || target.closest('.dropdown-preview')) {
                return;
            }
    
            // Close the dropdown if it is open and the click happened outside
            if (isOpen) {
                setIsOpen(false);
                setSelectedOptions(tempSelectedOptions); // Update selected options on dropdown close
            }
        };

        const handleScroll = () => {
            // Close the dropdown if it is open and the click happened outside
            if (isOpen) {
                setIsOpen(false);
                setSelectedOptions(tempSelectedOptions); // Update selected options on dropdown close
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
    }, [isOpen, tempSelectedOptions, setSelectedOptions]); // Include all necessary dependencies
    

    const DropdownPreview: React.FC = () => {
        return (
            <button 
                id="filter_button"
                onClick={(event) => toggleDropdown(event)}
                className="dropdown-preview flex flex-row h-10 cursor-pointer mt-1.5 bg-slate-100 text-slate-600 text-ellipsis text-md rounded-sm p-1.5 items-center gap-2"
            >   
                {tempSelectedOptions.length === 0
                ? 
                <p className='text-slate-400 w-56'>Select ingredients to filter out</p>
                :
                <p className='overflow-hidden text-ellipsis whitespace-nowrap w-56'>
                    {tempSelectedOptions.map((option, index) => (
                        <span key={option}>
                            {option}
                            {index < tempSelectedOptions.length - 1 && ', '}
                        </span>
                    ))}
                </p>
                }
                
                &#9662; {/* dropdown arrow */}
            </button>
        )
    }

    const SelectOptionsBox: React.FC = () => {
        return (
            <div className='dropdown z-20'>
                {isOpen && (
                    <div className="bg-slate-100 absolute text-md shadow-lg rounded-sm p-2 dropdown flex flex-col w-64 gap-1">
                        <ul 
                            role="listbox"
                            id="filter_options"
                            aria-multiselectable={false}
                            tabIndex={-1}
                        >
                            {Array.from(options).map(option => (
                                <li key={option}>
                                    <label htmlFor={option} className='flex flex-row w-full text-slate-600'>
                                        <input
                                            id={option}
                                            type="checkbox"
                                            value={option}
                                            checked={tempSelectedOptions.includes(option)}
                                            onChange={handleCheckboxChange}
                                            className="mr-2"
                                        />
                                    
                                        {option}
                                    </label>
                                </li>
                            ))}
                        </ul>

                        <button 
                            id="clear_btn"
                            className='text-left text-slate-600 bg-slate-300 rounded-md px-2 py-1 mt-1 flex flex-row items-center gap-1' 
                            onClick={(event) => clearOptions(event)}
                        >
                            <VscChromeClose /> Clear All
                        </button>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className='flex flex-row items-center'>
            <label htmlFor="filter_dropdown"  className='text-slate-100 text-md'>
                Filter: 
            </label>
            <div 
                className='flex flex-col gap-2 mx-2'
                id="filter_dropdown" 
            >
                <DropdownPreview/>
                <SelectOptionsBox/>
            </div>
        </div>
    );
};

export default DropdownCheckboxes;
