import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AccessoriesPage from "./pages/AccessoriesPage";
import FoodPage from "./pages/FoodPage";
import AboutUs from "./pages/AboutUsPage";
import LoginPage from "./pages/accounts/LoginPage";
import RegisterPage from "./pages/accounts/RegisterPage";
import CartPage from "./pages/CartPage";
import ShopAllPage from "./pages/ShopAllPage";
import AddProductPage from "./pages/admin/AddProductPage";
import AdminRoute from "./components/AdminRoute"; // Admin route guard
import UserRoute from "./components/UserRoute"; // User route guard
import ProductPage from "./pages/admin/ProductPage";
import { CartProvider } from "./pages/context/CartProvider";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <CartProvider>
          <MainLayout />
        </CartProvider>
      }
    >
      {/* User Pages Protected by UserRoute */}
      <Route element={<UserRoute />}>
        <Route index element={<HomePage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/success" element={<CheckoutSuccessPage />} />
        <Route path="/shop-all" element={<ShopAllPage />} />
      </Route>

      {/* Public Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Admin Pages Protected by AdminRoute */}
      <Route path="/add-product" element={<AdminRoute />}>
        <Route index element={<AddProductPage />} />
      </Route>
      <Route path="/products" element={<AdminRoute />}>
        <Route index element={<ProductPage />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
