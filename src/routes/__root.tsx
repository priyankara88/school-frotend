import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Header from "../component/header";

export const Route = createRootRoute({
  component: () => (
    <div className="bg-black w-screen">
      <div className=" bg-red-400 max-sm:ml-4 max:sm:mr-4 max-sm:mr-4 sm:ml-40  sm:mr-40">
        <Header />
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </div>
  ),
});
