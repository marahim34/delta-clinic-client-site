import { createBrowserRouter } from "react-router-dom"
import Home from "../../pages/Home/Home/Home"
import Main from "../../layout/Main"
import Login from "../../pages/Login/Login"
import Error from "../../pages/Error/Error"
import Appointment from "../../pages/Appointment/Appointment/Appointment"
import SignUp from "../../pages/SignUp/SignUp"
import DashBoard from "../../pages/DashBoard/DashBoard/DashBoard"
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes"
import DashBoardLayout from "../../layout/DashBoardLayout"
import MyAppointment from "../../pages/MyAppointment/MyAppointment"
import AllUsers from "../../pages/DashBoard/AllUsers/AllUsers"
import AdminRoutes from "../AdminRoutes/AdminRoutes"
import AddDoctors from "../../pages/DashBoard/AddDoctors/AddDoctors"
import ManageDoctors from "../../pages/DashBoard/ManageDoctors/ManageDoctors"
import Payment from "../../pages/DashBoard/Payment/Payment"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },





            {
                path: '*',
                element: <Error></Error>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes> <DashBoardLayout></DashBoardLayout> </PrivateRoutes>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: '/dashboard/add-doctors',
                element: <AdminRoutes> <AddDoctors></AddDoctors> </AdminRoutes>
            },
            {
                path: '/dashboard/manage-doctors',
                element: <AdminRoutes> <ManageDoctors></ManageDoctors> </AdminRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoutes> <Payment></Payment> </AdminRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    },
])