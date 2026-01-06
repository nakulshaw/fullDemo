import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Login from './components/Login.jsx'
import store from "./store/store.js"
import { Provider } from 'react-redux'


const router=createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/login",
        element:(
          <AuthLayout authentication={false}>
              <Login />
          </AuthLayout>
        )
      },
      {
        path:"/signup",
        element:(<AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>)
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider  router={router}></RouterProvider>
    </Provider>
    
  </StrictMode>,
)
