import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

function App() {
  const isLoggedIn = !!localStorage.getItem("auth-token"); // simple check

  return (
    <BrowserRouter>
      {/* Only show Navbar if logged in */}
      {isLoggedIn && <Navbar />}

      <Routes>
        <Route path="/login" element={<LoginSignup />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Shop />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mens"
          element={
            <ProtectedRoute>
              <ShopCategory banner={men_banner} category="men" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/womens"
          element={
            <ProtectedRoute>
              <ShopCategory banner={women_banner} category="women" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/kids"
          element={
            <ProtectedRoute>
              <ShopCategory banner={kid_banner} category="kid" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="product/:productid"
          element={
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Only show Footer if logged in */}
      {isLoggedIn && <Footer />}
    </BrowserRouter>
  );
}

export default App;
