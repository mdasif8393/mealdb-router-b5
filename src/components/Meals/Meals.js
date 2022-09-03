import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'
const Meals = () => {
    const [name, setName] = useState('');
    const [meals, setMeals] = useState([]);
    const handelChange = (e) => {
        setName(e.target.value.toLowerCase());
    }
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then(response => response.json())
        .then(data=>setMeals(data.meals))
    },[name])
    return (
        <div>
            <input onChange={handelChange} type="text" name="" id="" />
            {
                meals.map(meal =><Meal key={meal.idMeal} meal={meal}></Meal>)
            }
        </div>
    );
};

export default Meals;