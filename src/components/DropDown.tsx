// src/components/DropDown.tsx

import React, { useEffect, useState, useRef, createRef, RefObject } from 'react';

const options: string[] = ["Recipe Name (A-Z)", "Recipe Name (Z-A)", "Rating"]  

interface DropDownProps {
    data: {
        isOpen: boolean,
        wasOpen: boolean,
        activeIndex: number,
        selectedOption: string,
    };
    setData: (data: {
        isOpen: boolean,
        wasOpen: boolean,
        activeIndex: number,
        selectedOption: string,
    }) => void;
}

const DropDown: React.FC<DropDownProps> = ({ data, setData }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const optionsRef = useRef<RefObject<HTMLLIElement>[]>([
        createRef<HTMLLIElement>(),
        createRef<HTMLLIElement>(),
        createRef<HTMLLIElement>(),
    ]);

    useEffect(() => {
        const handleSelectChange = (option: string) => {
            setData(
                {
                activeIndex: 0,
                wasOpen: true,
                isOpen: !data.isOpen,
                selectedOption: option,
                
            })
        };
        
        const clickCallback = (event: MouseEvent) => {
            event.preventDefault();
            event.stopPropagation();
            const target = event.target as HTMLElement;
            
            // Check if the click happened inside the dropdown or dropdown-button. checks by classname
            if (target === buttonRef.current || buttonRef.current?.contains(target)) {
                
                setData({
                    selectedOption: data.selectedOption,
                    isOpen: !data.isOpen,
                    wasOpen: data.isOpen,
                    activeIndex: 0,
                    
                })
            } else if (target === optionsRef.current[data.activeIndex].current || optionsRef.current[data.activeIndex].current?.contains(target)) {
                handleSelectChange(options[data.activeIndex])
            }else if (data.isOpen) {
                setData({
                    activeIndex: data.activeIndex,
                    selectedOption: data.selectedOption,
                    wasOpen: data.isOpen,
                    isOpen: !data.isOpen,
                    
                })
            }
        };

        const scrollCallback = () => {
            if (data.isOpen) {
                setData({
                    activeIndex: data.activeIndex,
                    selectedOption: data.selectedOption,
                    wasOpen: data.isOpen,
                    isOpen: !data.isOpen,
                    
                })
            }
        };

        const keyDownCallback = (event: KeyboardEvent) => {
            const key = event.key;
            const openKeys = ['ArrowDown', 'ArrowUp', 'Enter', ' '];

            if (data.isOpen) {
                switch (key) {
                    case 'Escape':
                        setData({
                            selectedOption: data.selectedOption,
                            isOpen: !data.isOpen,
                            wasOpen: data.isOpen,
                            activeIndex: 0,
                            
                        })
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
                        handleSelectChange(options[data.activeIndex]);
                        break;
                    default:
                        event.preventDefault();
                        // Handle numeric key presses 
                        const num = parseInt(key)
          
                        if (num > 0 && num <= options.length) {
                            setData({
                                isOpen: data.isOpen,
                                selectedOption: data.selectedOption,
                                wasOpen: data.isOpen,
                                activeIndex: (num - 1),
                                
                            })
                        }
                        break;
                  }

            } else if (!data.isOpen && openKeys.includes(key)) {
                if (document.activeElement?.id === 'sort_button') {
                    event.preventDefault();
                    setData({
                        selectedOption: data.selectedOption,
                        isOpen: true,
                        wasOpen: data.isOpen,
                        activeIndex: 0,
                        
                    })
                }
            }
            
        };

        const moveFocusDown = () => {
            if (data.activeIndex < options.length - 1) {
                setData({
                    isOpen: data.isOpen,
                    selectedOption: data.selectedOption,
                    wasOpen: data.isOpen,
                    activeIndex: data.activeIndex + 1,
                    
                })
            } else {
                setData({
                    isOpen: data.isOpen,
                    selectedOption: data.selectedOption,
                    wasOpen: data.isOpen,
                    activeIndex: 0,
                    
                })
            }
        };

        const moveFocusUp = () => {
            if (data.activeIndex > 0) {
                setData({
                    isOpen: data.isOpen,
                    selectedOption: data.selectedOption,
                    wasOpen: data.isOpen,
                    activeIndex: data.activeIndex - 1,
                    
                })
            } else {
                setData({
                    isOpen: data.isOpen,
                    selectedOption: data.selectedOption,
                    wasOpen: data.isOpen,
                    activeIndex: options.length - 1,
                    
                })
            }
        };

        if (data.isOpen) {
            optionsRef.current[data.activeIndex].current?.focus();
        } else if (data.wasOpen && !data.isOpen) {
            (buttonRef.current)?.focus();
        }
    
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
    }, [data]); // Include all necessary dependencies
  

    const DropdownButton: React.FC = () => {
        return (
            <button 
                id="sort_button"
                role="combobox"
                aria-haspopup="listbox"
                aria-controls='sort_options'
                aria-labelledby='sort_label'
                aria-expanded={data.isOpen}
                aria-activedescendant={`sort_option_${data.activeIndex}`}
                ref={buttonRef}
                className="text-left sort-dropdown-button flex flex-row h-10 cursor-pointer mt-1.5 bg-slate-100 text-slate-600 text-ellipsis text-md rounded-sm p-1.5 items-center gap-2 lg:gap-0.5"
            >   
                <div className='overflow-hidden text-ellipsis whitespace-nowrap lg:w-36 w-52'>
                    {data.selectedOption}
                </div>
                
                &#9662; {/* dropdown arrow */}
            </button>
        )
    }

    const SelectOptionsBox: React.FC = () => {
        return (
            <div className='sort-options z-20 '>
                {data.isOpen && (
                    <ul 
                        role="listbox"
                        id="sort_options"
                        aria-multiselectable={false}
                        tabIndex={-1}
                        className="bg-slate-100 absolute text-md shadow-lg py-2 rounded-sm dropdown flex flex-col lg:w-43 w-60"
                    >

                    {Array.from(options).map((option, index) => (
                        <li 
                            ref={optionsRef.current[index]}
                            tabIndex={0}
                            key={option} 
                            id={`sort_option_${index}`}
                            role="option"
                            aria-selected={data.selectedOption === option}
                            className={`flex flex-row w-full text-slate-600 px-2 py-1 cursor-pointer 
                                ${option === data.selectedOption && 'bg-slate-300' /** element is selected  */}
                                ${index === data.activeIndex && 'underline'}` /** element is active  */}
                            onMouseOver={() => {
                                if (data.activeIndex !== index) {
                                    setData({
                                        isOpen: data.isOpen,
                                        selectedOption: data.selectedOption,
                                        wasOpen: data.isOpen,
                                        activeIndex: index,
                                    })
                                }
                            }}
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
