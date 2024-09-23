import React from "react"
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC<{link:string}> = ({link}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);
    };
      
    return (
        <div className='items-start flex flex-row w-full pb-2'>
            <button id="back" className="cursor-pointer text-zinc-100" onClick={handleClick}>{"< Back to Browse"}</button>
        </div>
    )
}

export default BackButton