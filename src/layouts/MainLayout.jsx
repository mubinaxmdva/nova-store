import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { selectCartTotalQuantity } from "../redux/cart/cartSlice";
import Footer from "../components/Footer";

function MainLayout() {
  const cartCount = useSelector(selectCartTotalQuantity);

  return (
    <div className="store">
      <Header cartCount={cartCount} />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
