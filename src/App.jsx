import { useEffect, useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root/Root';
import SearchPage from './Pages/Search';
import DetailPage from './Pages/Details';
import HomePage from './Pages/Home';
import { CustomFetch } from './Api/UseCustomFetch';
import ErrorPage from './Pages/ErrorPage';





const router = createBrowserRouter([
  {
    path: "/", element: <Root/>,
    errorElement: <ErrorPage/>,
    children:[
      {index:true, element:<HomePage/>},
      {path: "/search/:id", element:<SearchPage/>},
      {path: "/detail/:sid", element:<DetailPage/>},
    ]
  },
  
]);

function App() {
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
