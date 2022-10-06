import React from 'react';
import {useLoaderData, useNavigate} from 'react-router-dom'

const MealDetails = () => {
    const meal = useLoaderData();
    const {strMealThumb,strCategory, idMeal,strArea, strMeal} = meal.meals[0];
    console.log(meal.meals)
    // const navigate = useNavigate();
    // const handleNavigate = ()=>{
    //     navigate(`/meal/${idMeal}`)
    // }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={strMealThumb} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <p>{strCategory}</p>
    <h2 className="card-title">{strMeal}</h2>
    <p>{strArea}</p>
    {/* <div className="card-actions">
    <button className='btn btn-primary' onClick={handleNavigate}> Get Details</button>
    </div> */}
  </div>
</div>
        
    );
};

export default MealDetails;