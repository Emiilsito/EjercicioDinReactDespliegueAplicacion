import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InicioPage from "./pages/InicioPage";
import ProductosPage from "./pages/ProductosPage";
import AdminPage from "./pages/AdminPage";
import ProductDetailPage from "./pages/ProductDetailPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioPage />} />
  <Route path="/productos" element={<ProductosPage />} />
  <Route path="/admin" element={<AdminPage />} />
  <Route path="/productos/:id" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
}
