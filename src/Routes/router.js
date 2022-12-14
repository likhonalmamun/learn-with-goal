import { createBrowserRouter } from "react-router-dom";
import Error from "../Commons/Error";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import CourseDetails from "../Pages/CourseDetails";
import CheckOut from "../Pages/Courses/CheckOut";
import Home from "../Pages/Courses/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        loader: () => fetch("https://assignment-10-server-pi.vercel.app"),
        element: <Home></Home>,
      },
      {
        path: "/subject/:id",
        loader: ({ params }) =>
          fetch(`https://assignment-10-server-pi.vercel.app/${params.id}`),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "/login", element: <Login></Login> },
  { path: "/register", element: <Register></Register> },
  { path: "/blog", element: <Blog></Blog> },
  { path: "*", element: <Error></Error> },
]);
