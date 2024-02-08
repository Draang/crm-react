import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import NuevoCliente, {
  accion as nuevoClienteAction,
} from "./pages/NuevoCliente";
import Index, { loader as indexLoader } from "./pages";
import { action as eliminarAction } from "./components/Cliente";
import ErrorPage from "./components/ErrorPage";
import EditarCliente, {
  loader as editarLoader,
  action as editarAction,
} from "./components/EditarCliente";
import "./index.css";
/* permite crear rutas por medio de un objeto */
/* centro de la aplicacion */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: indexLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: nuevoClienteAction,
        errorElement: <ErrorPage />,
      },
      /*routing dinamico */ {
        path: "/clientes/:id/editar",
        element: <EditarCliente />,
        loader: editarLoader,
        action: editarAction,
        errorElement: <ErrorPage />,
      },
      { path: "/clientes/:id/eliminar", action: eliminarAction },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
