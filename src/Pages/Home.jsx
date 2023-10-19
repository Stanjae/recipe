import React from 'react'
import bgImage from '../assets/brooke.jpg'

const HomePage = () => {
  return (
    <div style={{backgroundImage:`url(${bgImage})` ,height:'650px'}} className=" bg-no-repeat bg-cover ">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-48 ">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Search Food Recipes</h1>
            <p className="mt-6 rounded-2xl p-1.5 text-2xl font-semibold bg-white leading-8 text-gray-900">Get Started by Searching for a Food Recipe</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" onClick={()=>alert('Use the Search Bar above!')} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Get Started</a>
              <a href="https://github.com/Stanjae/recipe" className="text-sm font-bold  leading-6 text-white">Check the Code<span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </div>
  </div>

  )
}

export default HomePage
