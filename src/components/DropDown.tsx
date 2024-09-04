// src/components/DropDown.tsx

import React, { useEffect, useState, useRef, createRef, RefObject } from 'react';

const options: string[] = ["Recipe Name (A-Z)", "Recipe Name (Z-A)", "Rating"]

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}
  

interface DropDownProps {
    selectedOption: string;
    setSelectedOption: (options: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({ selectedOption, setSelectedOption }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const buttonRef = useRef<HTMLButtonElement>(null);
    const optionsRef = useRef<RefObject<HTMLLIElement>[]>([
        createRef<HTMLLIElement>(),
        createRef<HTMLLIElement>(),
        createRef<HTMLLIElement>(),
      ]);

    const wasOpen = usePrevious(isOpen);

    const toggleDropdown = (event: React.MouseEvent) => {
        event.preventDefault();
        setActiveIndex(0);
        setIsOpen(!isOpen);
    }

    const handleSelectChange = (option: string) => {
        setIsOpen(false);
        setSelectedOption(option);
    };

    useEffect(() => {
        
        const clickCallback = (event: MouseEvent) => {
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

        const scrollCallback = () => {
            if (isOpen) {
                setIsOpen(false);
            }
        };

        const keyDownCallback = (event: KeyboardEvent) => {
            const key = event.key;
            const openKeys = ['ArrowDown', 'ArrowUp', 'Enter', ' '];

            if (isOpen) {
                switch (key) {
                    case 'Escape':
                        setIsOpen(false);
                        break;
                    case 'ArrowDown':
                        event.preventDefault();
                        moveFocusDown();
                        break;
                    case 'ArrowUp':
                        event.preventDefault();
                        moveFocusUp();
                        break;
                    case 'Enter':
                    case ' ':
                        event.preventDefault();
                        setSelectedOption(options[activeIndex]);
                        break;
                    default:
                        break;
                  }

            } else if (!isOpen && openKeys.includes(key)) {
                if (document.activeElement?.id === 'sort_button') {
                    event.preventDefault();
                    setActiveIndex(0);
                    setIsOpen(true);
                }
            }
            
        };

        const moveFocusDown = () => {
            if (activeIndex < options.length - 1) {
                setActiveIndex(activeIndex + 1)
            } else {
                setActiveIndex(0)
            }
        };

        const moveFocusUp = () => {
            if (activeIndex > 0) {
                setActiveIndex(activeIndex - 1)
            } else {
                setActiveIndex(options.length - 1)
            }
        };
    
        // Attach the event listener on component mount
        document.addEventListener('click', clickCallback);
        document.addEventListener('scroll', scrollCallback);
        document.addEventListener('keydown', keyDownCallback);
    
        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('click', clickCallback);
            document.removeEventListener('scroll', scrollCallback);
            document.removeEventListener('keydown', keyDownCallback);
        };
    }, ); // Include all necessary dependencies

    useEffect(() => {
        if (isOpen) {
            optionsRef.current[activeIndex].current?.focus();
        } else if (wasOpen && !isOpen) {
            (buttonRef.current)?.focus();
        }
    }, [isOpen, wasOpen, activeIndex])
  

    const DropdownButton: React.FC = () => {
        return (
            <button 
                id="sort_button"
                role="combobox"
                aria-haspopup="listbox"
                aria-controls='sort_options'
                aria-labelledby='sort_label'
                aria-expanded={isOpen}
                aria-activedescendant={`sort_option_${activeIndex}`}
                ref={buttonRef}
                onClick={(event) => toggleDropdown(event)}
                className="text-left sort-dropdown-button flex flex-row h-10 cursor-pointer mt-1.5 bg-slate-100 text-slate-600 text-ellipsis text-md rounded-sm p-1.5 items-center gap-2 lg:gap-0.5"
            >   
                <div className='overflow-hidden text-ellipsis whitespace-nowrap lg:w-36 w-52'>
                    {selectedOption}
                </div>
                
                &#9662; {/* dropdown arrow */}
            </button>
        )
    }

    const SelectOptionsBox: React.FC = () => {
        return (
            <div className='sort-options z-20 '>
                {isOpen && (
                    <ul 
                        role="listbox"
                        id="sort_options"
                        aria-multiselectable={false}
                        className="bg-slate-100 absolute text-md shadow-lg py-2 rounded-sm dropdown flex flex-col lg:w-43 w-60"
                    >

                    {Array.from(options).map((option, index) => (
                        <li 
                            ref={optionsRef.current[index]}
                            tabIndex={0}
                            key={option} 
                            id={`sort_option_${index}`}
                            role="option"
                            aria-selected={selectedOption === option}
                            className={`flex flex-row w-full text-slate-600 px-2 py-1 cursor-pointer 
                                ${option === selectedOption && 'bg-slate-300' /** element is selected  */}
                                ${index === activeIndex && 'underline'}` /** element is active  */}
                            onMouseOver={() => setActiveIndex(index)}
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
