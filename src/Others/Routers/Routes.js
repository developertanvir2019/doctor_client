import { createBrowserRouter } from "react-router-dom";
import AddDoctor from "../../pages/AddDoctor/AddDoctor";
import ManageDoctors from "../../pages/AddDoctor/ManageDoctors";
import AllUser from "../../pages/Apoinment/Apoinment.js/AllUser";
import Apoinment from "../../pages/Apoinment/Apoinment.js/Apoinment";
import MyAppointment from "../../pages/Apoinment/Apoinment.js/MyAppointment";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Login/Signup";
import Payment from "../../pages/Payment/Payment";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import PrivateRoute from "../PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <Apoinment></Apoinment>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allUser',
                element: <AllUser></AllUser>
            },
            {
                path: '/dashboard/addDoctor',
                element: <AddDoctor></AddDoctor>
            },
            {
                path: '/dashboard/manageDoctors',
                element: <ManageDoctors></ManageDoctors>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    },
]);