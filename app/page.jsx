

export default async function HomePage() {
  const res = await fetch("https://themealdb.com/api/json/v1/1/categories.php");
  const data = await res.json();


  return (
    <div>
    <div className="flex flex-wrap gap-4 m-auto text-center justify-center mt-3">
        
      {data.categories.map((category) => (
        <a
          key={category.idCategory}
          href={`/food/${category.strCategory}`}
          className="shadow-2xl hover:shadow-blue-500 p-3 cursor-pointer rounded-2xl border w-[350px]"
        >
          <img
            src={category.strCategoryThumb}
            alt={category.strCategory}
            className="w-full h-auto rounded-2xl"
          />
          <div>
            <h2 className="mt-2 font-bold">{category.strCategory}</h2>
            <p className="text-start h-19">{category.strCategoryDescription.slice(0, 120)}...</p>
            <a><img src={'/favorites.svg'} className=" w-[30px]" alt="heart" /></a>
          </div>
        </a>
      ))}
    </div>
    </div>
  );
}
