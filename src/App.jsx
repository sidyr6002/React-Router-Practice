import { RouterProvider, createBrowserRouter,  } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Github from "./components/Github/Github";
import { githubInfoLoader } from "./components/Github/Github";
import Layout from "./Layout";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/github",
                element: <Github />,
                loader: githubInfoLoader
            }
        ]
    }
])

function App() {
    return (
       <RouterProvider router={router} />
    );
}

export default App;
