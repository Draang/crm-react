import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import NuevoCliente,{accion as nuevoClienteAction} from "./pages/NuevoCliente";
import Index, { loader as indexLoader } from "./pages";
import "./index.css";
/* permite crear rutas por medio de un objeto */
/* centro de la aplicacion */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index />, loader: indexLoader },
      { path: "/clientes/nuevo", element: <NuevoCliente /> , action:nuevoClienteAction},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
