import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./routes/Home.jsx"
import Basil from "./routes/Basil.jsx"
import Lily from './routes/Lily.jsx';
import Fern from './routes/Fern.jsx';
import Messages from './routes/Messages.jsx'


const router = createBrowserRouter([
    {
        path: "/tj-cakeday-card/",
        element: <Home />,
    },
    {
        path: "message-index",
        element: <Messages />
    },
    {
        path: "basil-message",
        element: <Basil />
    },
    {
        path: "lily-message",
        element: <Lily />
    },
    {
        path: "fern-message",
        element: <Fern />
    }
]);

import "./styles/app.css"

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}