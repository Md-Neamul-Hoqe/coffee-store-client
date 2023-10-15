import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainRoot from "./MainRoot.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
      {
        path: "/SignIn",
        element: <SignIn />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("http://localhost:5000/user"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
