
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './Components/Login';
import Dashboard from './Components/Dashboard'
import ErrorPage from './Components/ErrorPage';
import ChatPage from './Components/ChatPage';
import ChatPageError from './ChatPageError';
import LoginToChat from './LoginToChat';
import Logout from './Components/Logout';

function App() {


 
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Login/> ,
      errorElement:<ErrorPage/>,
    },
    {
      path: "/login",
      element:  <LoginToChat/> ,
      errorElement:<ErrorPage/>,
    },
    {
      path:"/dashboard",
      element: <Dashboard/>,
      errorElement:<ChatPageError/>,
      children: [
        {
          path: ":user",
          element: <ChatPage/>,
         
        },
      ],
    },
  ]);

  return (
  <div className='main'>

        <RouterProvider router={router} />
  </div>
  )
}

export default App
