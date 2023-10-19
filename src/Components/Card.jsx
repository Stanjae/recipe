import React from 'react'
import {Link} from 'react-router-dom'

const CusCard = ({item}) => {
    const newID = item?.recipe?.uri?.split('_')[1]
  return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg object-cover w-full h-64" src={item?.recipe?.images?.REGULAR?.url} alt="" />
            </a>
            <div className="p-5">
                <Link to={`/detail/${newID}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item?.recipe?.label}</h5>
                </Link>
                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <h6 className=' mb-2 font-medium'>Meal Type: {item?.recipe?.mealType}</h6>
                    <h6 className=' mb-2 font-normal'>Cuisine Type: {item?.recipe?.cuisineType}</h6>
                </div>
                <a href={item?.recipe?.url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    How to Cook
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
  )
}

export default CusCard