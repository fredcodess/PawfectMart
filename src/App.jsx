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
import FoodDetailPage from "./pages/FoodDetailPage";
import LoginPage from "./pages/accounts/LoginPage";
import RegisterPage from "./pages/accounts/RegisterPage";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/food" element={<FoodPage />} />
      <Route path="/food/:foodId/details" element={<FoodDetailPage />} />
      <Route path="/accessories" element={<AccessoriesPage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
