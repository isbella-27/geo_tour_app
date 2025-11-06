import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "../../Pages/Accueil/Accueil";
import Destination from "../../Pages/Destination/Destination";
import Culture from "../../Pages/Culture/Culture";
import Cuisine from "../../Pages/Cuisine/Cuisine";
import Activite from "../../Pages/Activite/Activite";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home";
import Header from "../../Components/Header/Header";
import type { ReactNode } from 'react';
import Hebergement from "../../Pages/Hebergement/Hebergement";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {children}
  </>
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout><Home /></Layout>
    },
    {
        path: '/',
        element: <Layout><Accueil /></Layout>
    },
    {
        path: '/Destination',
        element: <Layout><Destination /></Layout>
    },
    
    {
        path: '/Hebergement',
        element: <Layout><Hebergement /></Layout>
    },
    {
        path: '/Culture',
        element: <Layout><Culture /></Layout>
    },
    {
        path: '/Cuisine',
        element: <Layout><Cuisine /></Layout>
    },
    {
        path: '/Activite',
        element: <Layout><Activite /></Layout>
    },
    {
        path: '/Contact',
        element: <Layout><Contact /></Layout>
    }
])

const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Router