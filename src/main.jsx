import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import SingUp from './components/SingUp'
import Dashboard from './components/Dashboard.jsx'
import Protected from './components/Protected'
import { AuthProvider } from './auth/AuthProvider'
import SubirTesis from './components/SubirTesis'
import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Login/>
  }, 
  {
    path:"/singup",
    element: <SingUp/>
  },

  {
    path:"/",
    element: <Protected />,
    children: [{
        path:"/dashboard",
        element: <Dashboard />,

      },
    ],
  },
  {
    path:"/subirtesis",
    element: <SubirTesis/>
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
