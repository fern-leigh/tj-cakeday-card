import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Basil from "./routes/Basil.jsx"
import Lily from './routes/Lily.jsx';
import Fern from './routes/Fern.jsx';
import Messages from './routes/Messages.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
