// src/pages/RecipeCategories.tsx

import React, { useState, useEffect, Suspense } from 'react';
import RecipeCard from '../components/RecipeCard.tsx';
import DropDown from '../components/DropDown.tsx';
import DropdownCheckboxes from '../components/CheckboxDropdown.tsx';
import getIngredients from '../functions/getIngredients.ts';
import { useNavigate, useParams } from 'react-router-dom';
import Recipe from '../types/Recipe.ts';

const RecipeCategories: React.FC = () => {

  const navigate = useNavigate();


  return (
    <div onClick={() => navigate(`/smoothies`)}>
        Smoothies
    </div>
  );
};

export default RecipeCategories;
