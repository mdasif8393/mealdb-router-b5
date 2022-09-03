import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Meal.css'
const Meal = ({meal}) => {
    const {strMeal, idMeal} = meal;
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/meal/${idMeal}`)
    }
    return (
        <div>
            <h1>Meal: {strMeal}</h1>
            <button onClick={showDetail}>SeeMore: {idMeal}</button>
        </div>
    );
};

export default Meal;