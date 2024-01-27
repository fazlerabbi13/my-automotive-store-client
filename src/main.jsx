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
import PrivetRoute from './PrivetRoute/PrivetRoute';
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
        element: <PrivetRoute><AddProduct></AddProduct></PrivetRoute>
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
        element:<PrivetRoute> <MyCart></MyCart></PrivetRoute>,
        loader: () => fetch('http://localhost:5000/carts')
      },
      {
        path:'/brandProducts/:brand',
        element:<BrandProducts></BrandProducts>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand}`)
      },
      {
        path:'/updateProduct/:id',
        element:<PrivetRoute><UpdateProduct></UpdateProduct></PrivetRoute>,
        loader: () => fetch('http://localhost:5000/products')
      },
      {
        path:'/productDetails/:name',
        element: <PrivetRoute><ProductDetails></ProductDetails></PrivetRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.name}`)
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
