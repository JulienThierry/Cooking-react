import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const App = () => {
  const [mealDb, setMealDb] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
      .then((res) => setMealDb(res.data.meals));
  }, [search]);

  return (
    <div className="app-container">
      <header>
        <h1>Cooking React</h1>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Nom d'un plat (en anglais)"
        />
      </header>
      <div className="meals">
        {mealDb && mealDb.map((meal) => <Card meal={meal} key={meal.idMeal} />)}
      </div>
    </div>
  );
};

export default App;
