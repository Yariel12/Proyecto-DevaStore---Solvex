import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import ProductsPage from "./Components/ProductsPage.jsx";
import UsersPage from "./Components/UsersPage.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "./Pages/Product.jsx";
import EditProductPage from "./Components/EditProductPageFloat.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path="/product"
          element={
            <DefaultLayout>
              <ProductsPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/admin/products/edit/:id"
          element={
            <DefaultLayout>
              <EditProductPage />
            </DefaultLayout>
          }
        />

        <Route
          path="/admin/products"
          element={
            <DefaultLayout>
              <Product />
            </DefaultLayout>
          }
        />
        <Route
          path="/admin/users"
          element={
            <DefaultLayout>
              <UsersPage />
            </DefaultLayout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
