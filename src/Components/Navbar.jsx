import React, { useState } from 'react'
import RecipeLogo from '../assets/recipe.jpg'
import { CustomFetch } from '../Api/UseCustomFetch'
import {useNavigate} from 'react-router-dom'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {Link} from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const CNavbar = () => {
  const [cusQuery, setCusQuery] = useState('')

  const navigate = useNavigate()

  const Ontype =(e)=> (setCusQuery(e.target.value));

  const ToEnter =(e)=> {
    if(e.key === 'Enter'){
      if(cusQuery === '' || cusQuery.length === 0){
        alert('Please input a string')
        return
      }
      navigate(`/search/${cusQuery}`);
    }
  }
  const ToSubmit =(e)=> {
    e.preventDefault();
      if(cusQuery === '' || cusQuery.length === 0){
        alert('Please input a string')
        return
      }
      navigate(`/search/${cusQuery}`);
    }

  {/* <nav classNameName="bg-white border-gray-100 border">
      <div classNameName="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" classNameName="flex items-center">
          <img src={RecipeLogo} classNameName=" h-16 w-16 mr-3" alt="Flowbite Logo" />
          <span classNameName="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Stanjhae Recipes</span>
      </a>
      <div classNameName="flex md:order-2">
        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" classNameName="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
          <svg classNameName="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          <span classNameName="sr-only">Search</span>
        </button>
        <div classNameName="relative hidden md:block">
          <div classNameName="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg classNameName="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span classNameName="sr-only">Search icon</span>
          </div>
          <input name='search' value={cusQuery} type="search" onKeyDown={(e)=>ToEnter(e)} id="search-navbar" onChange={(e)=>Ontype(e)} 
          classNameName="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search..."/>
        </div>
        <button data-collapse-toggle="navbar-search" type="button" classNameName="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
            <span classNameName="sr-only">Open main menu</span>
            <svg classNameName="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
      </div>
        <div classNameName="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
          <div classNameName="relative mt-3 md:hidden">
            <div classNameName="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg classNameName="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input value={cusQuery} type="search" onKeyDown={(e)=>ToEnter(e)} id="search-navbar" onChange={(e)=>Ontype(e)}
            classNameName="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
          </div>
          <ul classNameName="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" classNameName="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" classNameName="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" classNameName="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
          </ul>
        </div>
      </div>
    </nav> */}

  return (
    <Disclosure as="nav" className="bg-white border border-gray-200">
      {({ open }) => (
        <>
          <div className="mx-auto w-full px-2 sm:px-6 lg:px-20">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <a href='/'>
                <div className="flex justify-center items-center">
                  <img className=" block mx-auto h-24 w-24"
                    src={RecipeLogo}
                    alt="My Company"
                  />
                  <h1 className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Stanjhae Recipes</h1>
                </div>
              </a>
              </div>
              <div className="absolute hidden inset-y-0 right-0 sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

              <input name='search' value={cusQuery} type="search" onKeyDown={(e)=>ToEnter(e)} id="search-navbar" onChange={(e)=>Ontype(e)} 
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                placeholder="Search..."/>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <form onSubmit={(e)=> ToSubmit(e)}>
              <div className=" py-3 px-2 flex justify-center ">
                <input name='search' value={cusQuery} type="search"id="search-navbar2" onChange={(e)=>Ontype(e)} 
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                  placeholder="Search..."/>
                  <button type='submit' className=' py-2 bg-green-600 text-base font-semibold text-white px-3'>Go</button>
              </div>
            </form>
            
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default CNavbar