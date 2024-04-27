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

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/> ,
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
       }
      ]
    },
  ]);

  