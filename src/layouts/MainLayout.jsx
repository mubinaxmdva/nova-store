import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { selectCartTotalQuantity } from "../redux/cart/cartSlice";

function MainLayout() {
  const cartCount = useSelector(selectCartTotalQuantity);

  return (
    <div className="store">
      <Header cartCount={cartCount} />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
