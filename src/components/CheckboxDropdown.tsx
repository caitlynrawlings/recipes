import React, { useState, useEffect } from 'react';

interface DropdownCheckboxesProps {
    options: Set<string>;
    selectedOptions: string[];
    setSelectedOptions: (options: string[]) => void;
}

const DropdownCheckboxes: React.FC<DropdownCheckboxesProps> = ({ options, selectedOptions, setSelectedOptions }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [tempSelectedOptions, setTempSelectedOptions] = useState<string[]>(selectedOptions);

    const openDropdown = (event: React.MouseEvent) => {
        event.preventDefault();
        if (!isOpen) {
            setIsOpen(true);
        }
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
            
            // Check if the click happened inside the dropdown or dropdown-preview
            if (target.closest('.dropdown') || target.closest('.dropdown-preview')) {
                return;
            }
    
            // Close the dropdown if it is open and the click happened outside
            if (isOpen) {
                setIsOpen(false);
                setSelectedOptions(tempSelectedOptions); // Update selected options on dropdown close
            }
        };
    
        // Attach the event listener on component mount
        document.addEventListener('click', handleClickOutside);
    
        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen, tempSelectedOptions, setSelectedOptions]); // Include all necessary dependencies
    

    const DropdownPreview: React.FC = () => {
        return (
            <div 
                onClick={(event) => openDropdown(event)}
                className="dropdown-preview flex flex-row cursor-pointer bg-gray-50 border border-gray-300 text-zinc-600 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 p-1.5"
            >   
                {tempSelectedOptions.length === 0
                ? 
                <p className='text-zinc-400'>Select ingredients to filter out</p>
                :
                tempSelectedOptions.map(option => (
                    <p key={option}>{option},&nbsp;</p>
                ))
                }
                &#9662;
            </div>
        )
    }

    const SelectOptionsBox: React.FC = () => {
        return (
            <div className='dropdown'>
                {isOpen && (
                    <div className="bg-white border fixed border-gray-300 rounded-xl shadow-lg p-2 dropdown flex flex-col">
                        <div className='z-20'>
                            {Array.from(options).map(option => (
                                    <label htmlFor={option} key={option} className='flex flex-row w-full'>
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
                            ))}
                        </div>
                        <button className='w-full text-left' onClick={(event) => clearOptions(event)}>X Clear All</button>
                    </div>
                )}
            </div>
        )
    }

    return (
        <label className='text-zinc-600 px-2 text-sm flex flex-row'>
        Filter: 
            <div className='flex flex-col gap-2 mx-2'>
                <DropdownPreview/>
                <SelectOptionsBox/>
            </div>
        </label>
    );
};

export default DropdownCheckboxes;
