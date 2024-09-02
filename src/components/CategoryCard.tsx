// src/components/RecipeCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'; // Ensure Tailwind CSS is imported
import Category from '../types/Category.ts';


const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${category.link}`);
  };

  return (
    <article className="bg-slate-100 shadow-md overflow-hidden min-h-48 cursor-pointer w-full flex flex-col" onClick={handleClick}>
      <div className='h-48 w-full'>
        <img className="h-full w-full object-cover" src={process.env.PUBLIC_URL + category.picture} alt={category.name}/>
      </div>

      <div className='m-4'>
        <h2 style={{ wordBreak: 'break-word' }} className="text-4xl  font-bold text-cyan-700 mb-2">
            {category.name}
        </h2>
        <p className="text-slate-700">
            {category.description}
        </p>
      </div>
    </article>
  );
};

export default CategoryCard;
