import React from 'react'
import {useParams} from 'react-router-dom'
import { CustomFetchDetails } from '../Api/UseCustomFetch'

const DetailPage = () => {
  const {sid} = useParams()

  const {data, isLoading} = CustomFetchDetails(sid)

  if(isLoading) return <h1 className=' text-center text-2xl text-slate-900'>Loading...</h1>

  console.log(data);

  return (
<div className="flex max-h-screen">
  <div className="w-1/4 min-h-screen overflow-y-auto">
    <div className="flex space-x-2 bg-slate-50 px-3 py-2">
      <h2 className="text-xl">{data?.recipe?.label}</h2>
    </div>
    <div className="flex space-x-2 px-3 py-2">
      <img className="w-32 rounded-md" src="https://spoonacular.com/recipeImages/547775-312x231.jpg" alt="test" />
      <h2>Creamy Avocado Pasta</h2>
    </div>
    <div className="flex space-x-2 px-3 py-2">
      <img className="w-32 rounded-md" src="https://spoonacular.com/recipeImages/495111-312x231.jpg" alt="test" />
      <h2>Citrus Sesame Kale</h2>
    </div>
    
  </div>
  <div className="w-2/4 min-h-screen bg-slate-50 px-4 py-5 space-y-3">
    <img className=' w-full object-fill h-80' src={data?.recipe?.images?.REGULAR?.url} alt="Avocado"/>
    <div className="space-y-2">
      <h1 className="text-lg font-semibold">Information :</h1>
      <div className="flex flex-col space-y-1">
        <span>Calories: {Number(data?.recipe?.calories).toFixed(2)}</span>
        <span>Cuisine: {data?.recipe?.cuisineType}</span>
        <span>Meal type: {data?.recipe?.mealType}</span>
        <span>Dish type: {data?.recipe?.dishType}</span>
        <span>Diet: {data?.recipe?.dietLabels}</span>
        <span>Time taken to be Prepared: {data?.recipe?.totalTime}</span>
        <span>Total Weight: {Number(data?.recipe?.totalWeight).toFixed(2)} Kg</span>
      </div>
      <div>
      {data?.recipe?.healthLabels?.slice(0, 4)?.map((item, index)=>(
        <span key={index} className="bg-green-300 mr-2 rounded-md p-1">{item}</span>
      ))}
      </div>
    </div>
    <div className=' pb-6'>
      <h1 className="text-lg font-semibold">Ingredients :</h1>
      <ul className="list-disc pl-5">
        {data?.recipe?.ingredientLines?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>

    <div>
      {/* <h1 className="text-lg">Instructions :</h1>
      <ul className="list-decimal pl-5"> 
         {data?.recipe?.ingredientLines?.map((item, index) => (
          <li key={index}>{item}</li>
        ))} 
      </ul>*/}
    </div>
  </div>
</div>
  )
}

export default DetailPage