import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/register.jsx";
import Product from "./pages/Product.jsx";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <BrowserRouter>
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
          path="/Productos"
          element={
            <DefaultLayout>
              <Product />
            </DefaultLayout>
          }
        />
        <Route
          path="/ProductosList"
          element={
            <DefaultLayout>
              <ProductList />
            </DefaultLayout>
          }
        />
        <Route
          path="/product/:id"
          element={
            <DefaultLayout>
              <ProductDetails />
            </DefaultLayout>
          }
        />
        <Route
          path="/servicios"
          element={
            <DefaultLayout>
              <ProductDetails />
            </DefaultLayout>
          }
        />
        <Route
          path="/contacto"
          element={
            <DefaultLayout>
              <ProductDetails />
            </DefaultLayout>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
