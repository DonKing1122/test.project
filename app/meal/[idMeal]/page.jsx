export default async function MealPage({ params }) {
  const { idMeal } = params;

  const res = await fetch(
    `https://themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
  );


  const data = await res.json();

  if (!data.meals) {
    return <p className="p-4">Рецепт не найден (id: {idMeal})</p>;
  }

  const meal = data.meals[0];

  return (
    <div className="p-10">
        <h1 className="text-2xl font-bold mb-4">{meal.strMeal}</h1>
    <div className=" flex gap-70">
        <img src={meal.strMealThumb} alt={meal.strMeal} className=" h-[600px] rounded mb-4" />
        <div>
            <b className=" text-2xl text-center">Ingridients</b>
                <ul className=" text-2xl list-disc mt-25">
                    <li>{meal.strIngredient1}</li>
                    <li>{meal.strIngredient2}</li>
                    <li>{meal.strIngredient3}</li>
                    <li>{meal.strIngredient4}</li>
                    <li>{meal.strIngredient5}</li>
                    <li>{meal.strIngredient6}</li>
                    <li>{meal.strIngredient7}</li>
                    <li>{meal.strIngredient8}</li>
                    <li>{meal.strIngredient9}</li>
                    <li>{meal.strIngredient10}</li>
                    <li>{meal.strIngredient11}</li>
                    <li>{meal.strIngredient12}</li>
                </ul>
            </div>
    </div>
    
      <div className="mb-5 text-[18px]">
        <p>{meal.strInstructions}</p>
      </div>
      <a className=" text-2xl text-red-700" href={meal.strYoutube}>Full Video in YouTube</a>
    </div>
  );
}
