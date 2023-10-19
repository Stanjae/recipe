import React from 'react'
import {useParams} from 'react-router-dom'
import { CustomFetch } from '../Api/UseCustomFetch';
import CusCard from '../Components/Card';

const SearchPage = () => {
  const {id} = useParams();
  
  const { isLoading, error, data} = CustomFetch(id);

  if(isLoading) return <h1 className=' text-xl text-center italic'>Loading...</h1>

  if(error) return <h1 className=' bg-red-700 py-1 text-white font-medium text-2xl text-center italic'>Offline...</h1>
  return (
    <div>
      {data && (<h1 className=' py-1 text-lg font-medium text-center'> ({data?.hits?.length}) Search results </h1>)}
      <div className=" justify-center items-center grid p-7 grid-cols-4 sm:gap-8 gap-4">
        {data?.hits?.map((item, index) => (<div key={index} className=' col-span-4 sm:col-span-2 lg:col-span-1'><CusCard item={item}/></div>))}
      </div>
    </div>
  );
}

export default SearchPage
