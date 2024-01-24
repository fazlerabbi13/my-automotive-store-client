import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import AddProduct from './Pages/AddProduct';
import Login from './Pages/Login';
import Register from './Pages/Register';
import MyCart from './Pages/MyCart';
import AuthProvider from './Provider/AuthProvider';
import BrandProducts from './components/BrandProducts';
import Update from './Pages/UpdateProduct';
import UpdateProduct from './Pages/UpdateProduct';
import ProductDetails from './components/ProductDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/brand.json')
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/login',
        element: <Login></Login>

      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/mycart',
        element: <MyCart></MyCart>
      },
      {
        path:'/brandProducts/:brand',
        element:<BrandProducts></BrandProducts>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand}`)
      },
      {
        path:'/updateProduct',
        element:<UpdateProduct></UpdateProduct>
      },
      {
        path:'/productDetails/:name',
        element:<ProductDetails></ProductDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/productDetails/${params.name}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>,
)
