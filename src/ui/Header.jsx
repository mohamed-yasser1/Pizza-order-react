import { Link } from "react-router-dom";
import Search from "../features/order/Search";
import Username from "../features/user/Username";

function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast Order Pizza Co..
      </Link>
      <Search />
      <Username />
    </header>
  );
}

export default Navbar;
