import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layouts/MainLayOut";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllQueries from "../Pages/AllQueries";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import MyQueries from "../Pages/Private/MyQueries";
import AddQuery from "../Pages/Private/AddQuery";
import Details from "../Pages/Details";
import MyRecommendations from "../Pages/Private/MyRecommendations";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement : <Error></Error> , 
      element: <MainLayOut></MainLayOut>,
      children : [
        {
          path : "/" ,
          element : <Home></Home>
        },
        {
          path : "/queries",
          element : <AllQueries></AllQueries>
        },
        {
          path : "/details/:id" , 
          element : <Details></Details>,
          loader : ({params}) => fetch(`${import.meta.env.VITE_API_URL}/recommendation/query/${params.id}`)
        },
        {
          path : "/post",
          element : <PrivateRoute><AddQuery></AddQuery></PrivateRoute>,
        },
        {
          path : "/my-Queries",
          element : <PrivateRoute><MyQueries></MyQueries></PrivateRoute>
        },
        {
          path : "my-recommendations" , 
          element : <MyRecommendations></MyRecommendations>
        },
        {
          path : "register",
          element : <Register></Register>
        },
        {
          path : "login" ,
          element : <Login></Login>
        }
      ]
    },
  ]);

  export default router ; 