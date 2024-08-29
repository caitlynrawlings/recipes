import React from "react"
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };
      
    return (
        <div className='items-start flex flex-row w-full'>
            <p className="cursor-pointer text-zinc-100" onClick={handleClick}>{"< Back to Browse"}</p>
        </div>
    )
}

export default BackButton