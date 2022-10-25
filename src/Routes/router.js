import { createBrowserRouter } from "react-router-dom";
import Error from "../Commons/Error";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import Home from "../Pages/Courses/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
  { path: "/login", element: <Login></Login> },
  { path: "/register", element: <Register></Register> },
  { path: "/blog", element: <Blog></Blog> },
  { path: "*", element: <Error></Error> },
]);
