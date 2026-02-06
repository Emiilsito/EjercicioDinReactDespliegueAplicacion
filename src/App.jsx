import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider, UserContext } from "./context/UserContext";
import { useContext } from "react";

// Layout
import Layout from "./components/Layout";

// Páginas
import InicioPage from "./pages/InicioPage";
import ProductosPage from "./pages/ProductosPage";
import AdminPage from "./pages/AdminPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ErrorPage from "./pages/ErrorPage";
import FormularioControladoProductos from "./pages/FormularioControladoProductos";
import LoginPage from "./pages/Login"; // 1. Importa tu nueva página de Login

/**
 * Componente para proteger rutas privadas
 */
const PrivateRoute = ({ children }) => {
  const { userLogged } = useContext(UserContext);
  // Si no está logueado, lo mandamos al login
  if (!userLogged) return <Navigate to="/login" replace />;
  return children;
};

export default function App() {
  return (
    <Router>
      <UserProvider>
          <Routes>
            {/* Rutas Públicas */}
            <Route path="/" element={<InicioPage />} />
            <Route path="/productos" element={<ProductosPage />} />
            <Route path="/productos/:id" element={<ProductDetailPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Rutas Privadas */}
            <Route 
              path="/admin" 
              element={
                <PrivateRoute>
                  <AdminPage />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/formulario-productos" 
              element={
                <PrivateRoute>
                  <FormularioControladoProductos />
                </PrivateRoute>
              } 
            />

            {/* 404 */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
      </UserProvider>
    </Router>
  );
}