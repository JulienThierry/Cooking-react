import React from "react";

const Card = ({ meal }) => {
  return (
    <div className="card">
      <h2>{meal.strMeal}</h2>
      <h4>Origin : {meal.strArea}</h4>
      <img src={meal.strMealThumb} alt={"photo de" + meal.strMeal} />
      <p>{meal.strInstructions}</p>
      <button>LEARN MORE </button>
    </div>
  );
};

export default Card;
