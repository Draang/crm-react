import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="space-y-8">
      <h1 className="text-center text-6xl font-extrabold mt-20 text-blue-900">
        CMR - CLIENTES
      </h1>
      <p className="text-center">Hubo un Error</p>
      <p className="text-center text-red-900 font-bold">{error.message}</p>
    </div>
  );
}