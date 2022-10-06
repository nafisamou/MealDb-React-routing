import React from 'react';
import {useLoaderData} from 'react-router-dom'
import Meal from '../Meal/Meal';
const Meals = () => {
    const meals = useLoaderData();
    console.log(meals.meals);
    return (
        <div className='grid grid-cols-3 gap-3 gap-y-5 mt-10 mx-10'>
            {meals.meals.map(meal=><Meal key={meal.idMeal} meal = {meal}></Meal>)}
        </div>
    );
};

export default Meals;