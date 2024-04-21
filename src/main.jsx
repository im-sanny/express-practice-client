import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./components/Main.jsx";
import Phones from "./components/Phones.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Phone from "./components/Phone.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/phones",
        element: <Phones />,
        loader: () => fetch('http://localhost:5000/phones')
      },
      {
        path:'/phone/:id',
        element:<Phone></Phone>,
        loader: ({params}) => fetch(`http://localhost:5000/phones/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
