// DropdownCheckboxes.jsx
import React, { useState, useEffect } from 'react';

interface DropdownCheckboxesProps {
    options: Set<string>;
}

const DropdownCheckboxes: React.FC<DropdownCheckboxesProps> = ({ options }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        setSelectedOptions((prev) =>
            checked ? [...prev, value] : prev.filter(option => option !== value)
        );
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (!(event.target as HTMLElement).closest('.dropdown')) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left dropdown">
            <label className='text-zinc-600 cursor-pointer px-2 flex flex-row'>
            Filter: 
                <div className='flex flex-col gap-2'>
                    <div 
                        onClick={toggleDropdown}
                        className="flex flex-row cursor-pointer bg-gray-50 border border-gray-300 text-zinc-600 mx-2 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 p-1.5"
                    >   
                        {selectedOptions.length === 0 
                        ? 
                        <p>Select ingredients to filter out</p>
                        :
                        selectedOptions.map(option => (
                            <p>{option},&nbsp;</p>

                        ))
                        }
                        &#9662;
                    </div>
                    {isOpen && (
                        <div>
                            <div className="bg-white border fixed border-gray-300 rounded-xl shadow-lg">
                                <div className="p-2">
                                    {Array.from(options).map(option => (
                                        <label key={option} className='block'>
                                            <input
                                                type="checkbox"
                                                value={option}
                                                checked={selectedOptions.includes(option)}
                                                onChange={handleCheckboxChange}
                                                className="mr-2"
                                            />
                                            {option}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </label>
        </div>
    );
};

export default DropdownCheckboxes;
