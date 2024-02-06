import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div >
      <h1 className="text-6xl font-bold"> CRM</h1>
      <Outlet />
    </div>
  );
}
