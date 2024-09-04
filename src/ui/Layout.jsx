import { Outlet, useNavigation } from "react-router-dom";

import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Spinner from "./Spinner";

function Layout() {
  const isLoading = useNavigation().state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Spinner />}
      <Header />

      <main className="overflow-y-auto">
        <div className="mx-auto h-full max-w-3xl">
          <Outlet />
        </div>
      </main>

      <CartOverview />
    </div>
  );
}

export default Layout;
