import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider ,Navigate} from "react-router-dom";
import Login from "./Pages/Front/Login.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Signup from "./Pages/Front/Signup.jsx";
import Courses from "./Pages/Front/Courses.jsx";
import Hero from "./Pages/Front/Hero";
import GuestLayout from "./Layouts/GuestLayout.jsx";
import AdminLayout from "./Layouts/AdminLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Students from "./Pages/Dashboard/Students";
import Users from "./Pages/Dashboard/Users";
import { ContextProvider } from "./Contexts/ContextProvider";
import UserForm from "./Pages/Dashboard/UserForm";
import Teacher from "./Pages/Dashboard/Teacher";
import Course from "./Pages/Dashboard/Course";
import Attendence from "./Pages/Dashboard/Attendence";


const router = createBrowserRouter([
    {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/dashboard" />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/students",
                element: <Students />,
            },
            {
                path: "/teachers",
                element: <Teacher />,
            },
            {
                path: "/courses",
                element: <Course />,
            },
            {
                path: "/attendence",
                element: <Attendence />,
            },
            {
                path: "/users/new",
                element: <UserForm key="userCreate" />,
            },
            {
                path: "/users/:id",
                element: <UserForm key="userUpdate" />,
            },
        ],
    },

    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },

            {
                path: "/signup",
                element: <Signup />,
            },

            {
                path: "/home",
                element: <Hero />,
            },
            {
                path: "/courses",
                element: <Courses />,
            },
        ],
    },

    {
        path: "*",
        element: <ErrorPage />,
    },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <ContextProvider>
   
  <RouterProvider router={router} />
  </ContextProvider>
  </React.StrictMode>
);
