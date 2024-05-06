import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "../components/ErrorPages/NotFound";
import ErrorLayout from "../layouts/ErrorLayout";
import PublicLayout from "../layouts/PublicLayout";
import Employee from "../pages/Employee/Employee";
import Home from "../pages/Home/Home";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/home" />
    },
    {
        path: "/home",
        element: <PublicLayout pageTitle="Home" component={<Home />} />
    },
    {
        path: "/employees",
        element: <PublicLayout pageTitle="Employee" component={<Employee />} />
    },

    {
        path: "*",
        element: <ErrorLayout pageTitle="Not Found" component={<NotFound />} />
    }
]);

export default Routes;
