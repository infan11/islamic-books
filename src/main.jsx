import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home/Home';
import SignIn from './Components/verify/SignIn/SignIn';
import AuthProvider from './Components/Provider/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",    
    element: <Root></Root>, 
    children : [
     {
      path: "/",
      element : <Home></Home>
      },
     {
      path: "/login",
      element: <SignIn></SignIn>
     } 

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
<div className=' max-w-7xl mx-auto '>
<RouterProvider router={router} />

</div>
</AuthProvider>
  </React.StrictMode>,
)
