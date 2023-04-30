import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ErrorPage from './ErrorPage/ErrorPage';
import AuthProvider from './components/providers/AuthProvider';
import ConfirmBooking from './components/ConfirmBooking/ConfirmBooking';
import PrivateRoute from './PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: `/confirmBooking`,
        element: (
          <PrivateRoute>
            <ConfirmBooking></ConfirmBooking>
          </PrivateRoute>
        ),
        // loader: ({params}) => {
        //   fetch(`http://localhost:5000/booking/${params.id}`);
        // }
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
