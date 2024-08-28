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
            <div 
                onClick={(event) => openDropdown(event)}
                className="dropdown-preview flex flex-row h-10 cursor-pointer mt-1.5 bg-zinc-100 text-zinc-600 text-ellipsis text-md rounded-md p-1.5 items-center"
            >   
                {tempSelectedOptions.length === 0
                ? 
                <p className='text-zinc-400 w-56'>Select ingredients to filter out</p>
                :
                <div className='overflow-hidden text-ellipsis whitespace-nowrap w-56'>
                    {tempSelectedOptions.map((option, index) => (
                        <span key={option}>
                            {option}
                            {index < tempSelectedOptions.length - 1 && ','}&nbsp;
                        </span>
                    ))}
                </div>
                }
                
                &#9662; {/* dropdown arrow */}
            </div>
        )
    }

    const SelectOptionsBox: React.FC = () => {
        return (
            <div className='dropdown'>
                {isOpen && (
                    <div className="bg-zinc-100 fixed text-md rounded-md shadow-lg p-2 dropdown flex flex-col w-56">
                        <div className='z-20'>
                            {Array.from(options).map(option => (
                                    <label htmlFor={option} key={option} className='flex flex-row w-full text-slate-600'>
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
                        <button className='w-full text-left text-zinc-600' onClick={(event) => clearOptions(event)}>X Clear All</button>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className='flex flex-row items-center'>
            <label htmlFor="filter-options"  className='text-slate-100 text-md'>
                Filter: 
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

export default DropdownCheckboxes;
