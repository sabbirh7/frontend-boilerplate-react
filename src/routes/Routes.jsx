import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from '../components/ErrorPages/NotFound';
import ErrorLayout from '../layouts/ErrorLayout';
import PublicLayout from '../layouts/PublicLayout';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Home from "../pages/Home/Home";
// import Home from '../pages/Home/Home';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/home"/>
    },
    {
        path: "/home",
        element: <PublicLayout pageTitle="Home" component={<Home />} />
    },
    {
        path: "/about",
        element: <PublicLayout pageTitle="About" component={<About />}/>
    },
    {
        path: "/contact",
        element: <PublicLayout pageTitle="Contact" component={<Contact />}/>
    },
    {
        path: "*",
        element: <ErrorLayout pageTitle="Not Found" component={<NotFound />} />
    }
])

export default Routes;