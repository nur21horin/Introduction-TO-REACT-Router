import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<div>Hello from React Router</div>
//   },
//   {
//     path:'/about',
//     element:<div> I am in the about page</div>
//   },
//   {
//     path:'nur',
//     element:<div>I am NUur Mohammod</div>
//   },
//   {
//     path:'content',
//     element:<div>Call me right now</div>
//   }
// ])
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './assets/component/header/header.jsx';
import Home from './assets/component/home/home.jsx';
import About from './assets/component/about/about.jsx';
import Contact from './assets/component/contact/contact.jsx';
import Users from './assets/component/users/users.jsx';
import UserDetails from './assets/component/userDetails/userDetails.jsx';

const router=createBrowserRouter ([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
    }
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <RouterProvider router={router}></RouterProvider> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
