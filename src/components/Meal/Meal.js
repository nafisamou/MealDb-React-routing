import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Meal.css'
const Meal = ({ meal }) => {
  const { strCategory, strMealThumb, strInstructions, idMeal } =
    meal;

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/meal/${idMeal}`);
  };
  return (
    
    <div className="card w-96 bg-base-100 shadow-xl">

    <figure><img src={strMealThumb} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">
       {idMeal}
        <div className="badge badge-secondary">{strCategory}</div>
      </h2>
      <p>{strInstructions.slice(0,60)}</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline"> <Link to={`/meal/${idMeal}`}>Show Details</Link> </div> 
        <div className="badge badge-outline" onClick={handleNavigate}>Items</div>
      </div>
    </div>
  </div>
  );
};

export default Meal;
