import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'

import {createBrowserRouter ,RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element : <App/>
  }
])

createRoot(document.getElementById('root')).render(
 <Provider store={store} >
    <RouterProvider router={router} />
  </Provider>
 
)
