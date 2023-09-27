import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import RootLayout from "./Pages/RootLayout";
import Edit from "./Pages/Edit";
import Details from "./Pages/Details";
import Index from "./Pages/Index";
import ErrorPage from "./Pages/ErrorPage";
import { Provider } from "react-redux";
import store from "./state";
import AddPost from "./Pages/Add";

const router =createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true, element:<Index/> },
      {path:'post/add',
      element:<AddPost/>
      },
      {path:'post/:id/edit',
      element:<Edit/>
      },
      {path:'post/:id',
      element:<Details/>,
      }
    ]
  }
]); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);