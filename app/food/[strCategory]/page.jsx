import Link from "next/link";

export default async function CategoryPage({ params }) {
  const { strCategory } = params;

  const res = await fetch(
    `https://themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
  );
  const data = await res.json();


  return (
    <div className="flex flex-wrap gap-4 m-auto text-center justify-center mt-3">
      {data.meals.map((meal) => (
        <Link
           key={meal.idMeal}
          href={`/meal/${meal.idMeal}`}
          className="shadow-2xl hover:shadow-blue-500 p-3 cursor-pointer rounded-2xl border w-[350px]"
        >
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-auto rounded"
          />
          <h3 className="mt-2 text-center"><b>{meal.strMeal}</b></h3>
        </Link>
      ))}
    </div>
  );
}

