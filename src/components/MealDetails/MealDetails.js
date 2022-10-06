import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const MealDetails = () => {
  const meal = useLoaderData();
  const { strMealThumb, strCategory, idMeal, strArea, strMeal } = meal.meals[0];
  console.log(meal.meals);
  // const navigate = useNavigate();
  // const handleNavigate = ()=>{
  //     navigate(`/meal/${idMeal}`)
  // }
  return (
    <div className="m-auto text-center">
      <div className="navbar bg-base-100 mb-8">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-xl">
            MealDB
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl m-auto">
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
    </div>
  );
};

export default MealDetails;
