import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomeLayout from "../Pages/Home/HomeLayout";
import StartService from "../Pages/StartService";
import Login from "../Pages/Login";
import Contact from "../Pages/Contact";
import Help from "../Pages/Help";
import OurSelf from "../Pages/OurSelf";
import Problem from "../Pages/Provlem";
import Terms from "../Pages/Terms";
import Signup from "../Pages/Signup";
import Passenger from "../Pages/Passenger";
import Driver from "../Pages/Driver";
import UserStartService from "../Pages/UserStartService";
import FindUser from "../Pages/FindUser";
import OrderCar from "../Pages/OrderCar";
import ProblemMessage from "../Pages/ProblemMessage";
import Posts from "../Pages/Posts";
import AllUsers from "../Pages/AllUsers";
import AllOrders from "../Pages/AllOrders";
import AllProblems from "../Pages/AllProblems";
import Error from "../Pages/Error";
import AddRevenue from "../Pages/AddRevenue";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/> ,
      errorElement: <Error/>,
      children : [
       {
        path: '/',
        
        element: <HomeLayout/>
       },
       {
        path:'startSerives',
        element : <StartService/>
       },
       {
        path: 'user-start',
        element: <UserStartService/>
       },
       {
        path: 'login',
        element : <Login/>
       },
       {
        path: 'signup',
        element: <Signup/>,
        children : [
          {
            path: 'passenger',
            element:<Passenger/>
          },
          {
            path: 'driver',
            element: <Driver/>
          }
        ]
       },
       {
        path: 'contact',
        element: <Contact/>
       },
       {
        path:'help',
        element : <Help/>
       },
       {
        path: 'ourSelf',
        element :<OurSelf/>
       },
       {
        path: 'problem',
        element: <Problem/>
       },
       {
        path: 'terms&condition',
        element: <Terms/>
       },
       {
        path: 'find-users',
        element : <FindUser/>
       },
       {
        path: 'order-success',
        element : <OrderCar/>
       },
       {
        path: 'problem-success',
        element: <ProblemMessage/>
       },
       {
        path: 'posts',
        element: <Posts/>
       },
       {
        path: 'secret-users',
        element: <AllUsers/>
       },
       {
        path: 'show-orders',
        element: <AllOrders/>
       },
       {
        path: 'fix-problems',
        element: <AllProblems/>
       },
       {
        path : 'secret-revenue',
        element : <AddRevenue/>
       }
      ]
    },
  ]);

  