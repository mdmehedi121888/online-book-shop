import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Home from './components/Home';
import About from './components/About';
import Books from './components/Books';
import BookDetails from './components/BookDetails.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element:<App></App>,
    errorElement: <ErrorPage />,
    children:[
      {
      path:'/',
      element:<Home></Home>,
    },
    {
      path:'about',
      element:<About></About>
    },{
      path:"books",
      element:<Books></Books>,
      loader:()=> fetch('https://api.itbook.store/1.0/new'),
    },{
      path:'book/:id',
      element:<BookDetails></BookDetails>,
      loader:({params})=>fetch(`https://api.itbook.store/1.0/books/${params.id}`)
    },
  ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
