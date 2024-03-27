import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import MainHome from "../page/MainHome";
import Error from "../components/Error";
import CardPage from "../page/CardPage";
import ListBook from "../page/ListBook";
import Read from './../page/Read';
import Wish from "../page/Wish";
import Charts from "../page/Charts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: '/',
                element: <MainHome />,
                errorElement: <Error />,
                loader: () => fetch('/data.json'),
            },
            {
                path: '/card/:id',
                element: <CardPage />,
                loader: () => fetch(`/data.json`),
                errorElement: <Error />
            },
            {
                path: '/page',
                element: <Charts/>,
                errorElement: <Error/>
            }
            ,
            {
                path: '/bookList',
                element: <ListBook />,
                errorElement: <Error />,
                children:[
                    {
                        index: true,
                        element: <Read/>,
                        errorElement:<Error/>
                    },
                    {
                        path:'wish',
                        element:<Wish/>,
                        errorElement: <Error/>
                    }
                ]
            }
        ],
    },
]);